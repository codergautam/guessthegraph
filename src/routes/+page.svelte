<script>
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import GameOverlay from '$lib/components/GameOverlay.svelte';
  import FloatingUi from '$lib/components/FloatingUI.svelte';
  import GameOver from '$lib/components/GameOver.svelte';
  import Toast from '$lib/components/Toast.svelte'; // Add this import
  import { gameStore } from '$lib/gameStore';
  import { calculatorStore } from '$lib/store';
  import { fade, fly } from 'svelte/transition';

  let showOverlay = true;
  let gameStarted = false;

  function handleStartGame(event) {
    const { mode, difficulty } = event.detail;
    showOverlay = false;

    // Initialize the game with the chosen options
    gameStore.startGame(difficulty);
    gameStore.startNextRound();
    setupCalculator();
    gameStarted = true;
  }

  function setupCalculator() {
    const calculator = get(calculatorStore);
    if (calculator) {
      // Clear previous state
      calculator.setBlank();

      // Set up the calculator for the game
      const currentGame = get(gameStore);

      if (currentGame.currentFunction) {
        // Add the secret function (hidden from user)
        console.log('Setting up calculator with function:', currentGame.currentFunction.expression);
        calculator.setExpression({
          id: 'g',
          latex: `g(x)=${currentGame.currentFunction.expression}`,
          color: '#2d70b3',
          secret: true
        });
        // focus on the secret function
        calculator.focusFirstExpression();

        // Add a placeholder for the user's function
        calculator.setExpression({
          id: 'f',
          latex: 'f(x)=',
          color: '#c74440'
        });
      }
    }
  }

  function handleCorrectAnswer() {
    const calculator = get(calculatorStore);
    const currentGame = get(gameStore);

    // Reveal the secret function
    calculator.setExpression({
      id: 'g',
      latex: `g(x)=${currentGame.currentFunction.expression}`,
      color: '#2d70b3',
      secret: false
    });

    // Move to next round immediately
    const updatedGame = get(gameStore);
    if (updatedGame.currentRound < updatedGame.totalRounds) {
      // Use a tiny timeout to ensure UI updates properly
      setTimeout(() => {
        gameStore.startNextRound();
        setupCalculator();
      }, 100);
    }
  }

  function handlePlayAgain() {
    const currentGame = get(gameStore);
    gameStore.startGame(currentGame.difficulty);
    gameStore.startNextRound();
    setupCalculator();
  }

  function handleNewGame() {
    gameStore.resetGame();
    showOverlay = true;
    gameStarted = false;
  }

  // Subscribe to gameStore changes
  $: if ($gameStore.gameState === 'roundOver' && $gameStore.currentRound === $gameStore.totalRounds) {
    // Last round completed, show game over almost immediately
    setTimeout(() => {
      gameStore.update(state => ({ ...state, gameState: 'gameOver' }));
    }, 100);
  }

  onMount(() => {
    // Any initialization code if needed
  });
</script>

<div id="calculator" class="w-screen h-screen relative"></div>

{#if showOverlay}
  <GameOverlay on:startGame={handleStartGame} />
{/if}

{#if gameStarted && $gameStore.gameState !== 'gameOver'}
  <FloatingUi
    visible={true}
    on:correct={handleCorrectAnswer}
  />
{/if}

{#if $gameStore.gameState === 'gameOver'}
  <GameOver
    gameData={$gameStore}
    on:playAgain={handlePlayAgain}
    on:newGame={handleNewGame}
  />
{/if}

<!-- Add Toast component to the page -->
<Toast />

<style>
  .round-indicator {
    position: absolute;
    top: 15px;
    left: 15px;
    background: var(--dcg-custom-background-color-shaded, #ededed);
    padding: 10px 16px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    z-index: 10;
  }

  .round-label {
    font-weight: 700;
    font-size: 18px;
    color: #333;
  }

  .round-subtitle {
    font-size: 12px;
    color: #666;
  }
</style>
