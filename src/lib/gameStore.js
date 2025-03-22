import { writable, derived } from 'svelte/store';

// Game functions by difficulty
const gameFunctions = {
  easy: [
    { expression: 'x^2', description: 'Quadratic Function' },
    { expression: '2x+3', description: 'Linear Function' },
    { expression: '\\sin(x)', description: 'Sine Function' },
    { expression: '\\abs(x)', description: 'Absolute Value' },
    { expression: '3', description: 'Constant Function' }
  ],
  medium: [
    { expression: 'x^3-2x', description: 'Cubic Function' },
    { expression: '\\tan(x)', description: 'Tangent Function' },
    { expression: '\\sqrt(x)', description: 'Square Root' },
    { expression: '1/x', description: 'Reciprocal Function' },
    { expression: 'e^x', description: 'Exponential Function' }
  ],
  hard: [
    { expression: '\\sin(x)/x', description: 'Sinc Function' },
    { expression: '\\ln(\\abs(x))', description: 'Natural Log' },
    { expression: 'x^2*\\sin(x)', description: 'Product Function' },
    { expression: '1/(1+e^(-x))', description: 'Logistic Function' },
    { expression: '\\floor(x)', description: 'Floor Function' }
  ]
};

function createGameStore() {
  const initialState = {
    isPlaying: false,
    difficulty: null,
    currentRound: 0,
    totalRounds: 5,
    currentFunction: null,
    functions: [],
    startTime: null,
    roundStartTime: null,
    points: 0,
    roundsHistory: [],
    gameState: 'idle', // idle, playing, checking, roundOver, gameOver
  };

  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    update,
    startGame: (difficulty) => {
      update(state => {
        const functions = [...gameFunctions[difficulty]];
        // Shuffle functions to make each game different
        for (let i = functions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [functions[i], functions[j]] = [functions[j], functions[i]];
        }

        return {
          ...initialState,
          isPlaying: true,
          difficulty,
          functions,
          startTime: Date.now(),
          gameState: 'playing'
        };
      });
    },
    startNextRound: () => {
      update(state => {
        const nextRound = state.currentRound + 1;
        if (nextRound > state.totalRounds) {
          return {
            ...state,
            gameState: 'gameOver'
          };
        }

        return {
          ...state,
          currentRound: nextRound,
          currentFunction: state.functions[nextRound - 1],
          roundStartTime: Date.now(),
          gameState: 'playing'
        };
      });
    },
    checkAnswer: (isCorrect) => {
      update(state => {
        const endTime = Date.now();
        const timeSpent = (endTime - state.roundStartTime) / 1000; // in seconds

        // Calculate points (faster = more points)
        // Base points: Easy: 100, Medium: 200, Hard: 300
        let basePoints = 0;
        switch(state.difficulty) {
          case 'easy': basePoints = 100; break;
          case 'medium': basePoints = 200; break;
          case 'hard': basePoints = 300; break;
        }

        const roundPoints = isCorrect ?
          Math.max(0, Math.round(basePoints * (1 - Math.min(timeSpent, 60) / 60))) : 0;

        const roundHistory = {
          round: state.currentRound,
          function: state.currentFunction,
          timeSpent,
          isCorrect,
          points: roundPoints
        };

        return {
          ...state,
          points: state.points + roundPoints,
          roundsHistory: [...state.roundsHistory, roundHistory],
          gameState: isCorrect ? 'roundOver' : 'playing'
        };
      });
    },
    resetGame: () => set(initialState)
  };
}

export const gameStore = createGameStore();

// Derived store for timer
export const gameTimer = derived(
  gameStore,
  ($gameStore, set) => {
    let interval;

    if ($gameStore.gameState === 'playing' && $gameStore.roundStartTime) {
      interval = setInterval(() => {
        set((Date.now() - $gameStore.roundStartTime) / 1000);
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  },
  0
);
