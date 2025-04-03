import { writable, derived } from 'svelte/store';

// Game functions by difficulty
const gameFunctions = {
  easy: [
    { expression: 'x^2', description: 'Quadratic Function' },
    { expression: '2x+3', description: 'Linear Function' },
    { expression: '\\sin(x)', description: 'Sine Function' },
    { expression: '\\abs(x)', description: 'Absolute Value Function' },
    { expression: '3', description: 'Constant Function' },
    { expression: 'x', description: 'Identity Function' },
    { expression: 'x+1', description: 'Simple Linear Function' },
    { expression: '\\cos(x)', description: 'Cosine Function' },
    { expression: '\\tan(x)', description: 'Tangent Function (basic)' },
    { expression: '\\sqrt{x}', description: 'Square Root Function' },
    { expression: 'x^3', description: 'Simple Cubic Function' },
    { expression: '5', description: 'Constant Function' },
    { expression: 'x-4', description: 'Linear Subtraction' },
    { expression: '-x', description: 'Negative Identity Function' },
    { expression: '4x', description: 'Simple Scaling Function' },
    { expression: '\\frac{x}{2}', description: 'Simple Fractional Function' },
    { expression: '\\abs{x+2}', description: 'Shifted Absolute Value' },
    { expression: '\\sin(2x)', description: 'Scaled Sine Function' },
    { expression: '\\cos(2x)', description: 'Scaled Cosine Function' },
    { expression: 'x^2+1', description: 'Shifted Quadratic' },
    { expression: 'x^2-1', description: 'Quadratic Minus One' },
    { expression: '2', description: 'Constant Function Two' },
    { expression: '\\sin(x)+1', description: 'Shifted Sine' },
    { expression: '\\cos(x)-1', description: 'Shifted Cosine' },
    { expression: '\\frac{1}{2}x', description: 'Half of x' },
    { expression: 'x^4', description: 'Quartic Function' },
    { expression: 'x^2 + x', description: 'Quadratic plus Linear' },
    { expression: '3x - 5', description: 'Linear Function with negative shift' },
    { expression: '\\frac{x}{4}', description: 'Quarter of x' },
    { expression: '7', description: 'Constant Seven' },
    { expression: '\\sqrt{x+1}', description: 'Shifted Square Root' },
    { expression: '\\frac{1}{x}', description: 'Basic Reciprocal Function' },
    { expression: '\\sin(x)-1', description: 'Sine minus one' },
    { expression: '\\cos(x)+1', description: 'Cosine plus one' },
    { expression: '-2x', description: 'Negative scaled Linear' },
    { expression: '\\abs{x-3}', description: 'Absolute shifted by three' },
    { expression: '\\sqrt{x}+2', description: 'Square root plus two' },
    { expression: '\\frac{x}{3}', description: 'Third of x' },
    { expression: '-x^2', description: 'Negative Quadratic' },
    { expression: '\\frac{x^2}{2}', description: 'Quadratic divided by two' },
    { expression: '2x^2', description: 'Squeezed Parabola' },
    { expression: 'x^3+1', description: 'Cubic plus one' },
    { expression: 'x^3-1', description: 'Cubic minus one' },
    { expression: 'x+10', description: 'Linear shifted by ten' },
    { expression: '\\frac{1}{x+1}', description: 'Shifted Reciprocal' },
    { expression: '\\abs{x}+1', description: 'Absolute plus one' },
    { expression: 'x^2+x+1', description: 'Quadratic plus linear plus one' },
    { expression: '-3x', description: 'Negative triple scaling' }
  ],
  medium: [
    { expression: 'x^3-2x', description: 'Cubic Function' },
    { expression: '\\tan(x)', description: 'Tangent Function' },
    { expression: 'x^0.5', description: 'Square Root' },
    { expression: '1/x', description: 'Reciprocal Function' },
    { expression: 'e^x', description: 'Exponential Function' }
  ],
  hard: [
    { expression: '\\sin(x)/x', description: 'Sinc Function' },
    { expression: '\\ln(\\abs(x))', description: 'Natural Log' },
    { expression: 'x^2*\\sin(x)', description: 'Product Function' },
    { expression: '\\frac{1}{(1+e^{-x})}', description: 'Logistic Function', readableExpression: '1/(1+e^(-x))' },
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
    applyHintPenalty: () => {
      update(state => ({
        ...state,
        points: Math.floor(state.points * 0.5)
      }));
    },
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
        let basePoints = 1000;

        const roundPoints = isCorrect ?
          Math.max(0, Math.round(basePoints * (1 - Math.min(timeSpent, 300) / 300))) : 0;

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
