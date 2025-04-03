<script>
  import { gameStore, gameTimer } from '$lib/gameStore';
  import checkFunctionsEqual from '$lib/checkFunctions';
  import { onMount, createEventDispatcher, onDestroy } from 'svelte';
  import { calculatorStore } from '$lib/store';
  import { fly, fade } from 'svelte/transition';
  import { showToast } from '$lib/toastStore';
  import AnimatedPoints from './AnimatedPoints.svelte';
  import { get } from 'svelte/store';

  export let visible = true;

  const dispatch = createEventDispatcher();

  let checking = false;
  let disabled = false;
  let calculator;

  // Format time as MM:SS
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  async function checkAnswer() {
    if (checking || disabled) return;

    checking = true;
    const result = await checkFunctionsEqual();
    checking = false;

    if (result === true) {
      // Disable button to prevent spamming
      disabled = true;
      showToast('success', 'Correct! Great job!');
      gameStore.checkAnswer(true);
      dispatch('correct');
    } else if (result === 'NaN') {
      showToast('warning', 'Function values are undefined. Please check your function.');
    } else {
      showToast('error', 'Not quite right. Keep trying!');
    }
  }

  // Handle keyboard events for the Enter key
  function handleKeydown(event) {
    console.log('Key pressed:', event.key); // Debugging line
    if (event.key === 'Enter' && $gameStore.gameState === 'playing' && !checking && !disabled) {
      checkAnswer();
    }
  }

  onMount(() => {
    // Add global keyboard listener
    window.addEventListener('keydown', handleKeydown);

    // Clean up event listener when component is destroyed
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  // Reset disabled state when game state changes
  $: if ($gameStore.gameState === 'playing' && disabled) {
    disabled = false;
  }
</script>

<div
  class="floating-ui"
  class:visible
  in:fly={{ y: -20, duration: 300 }}
  out:fade={{ duration: 200 }}
>
  <div class="content">
    <div class="stats">
      <div class="stat">
        <span class="label">Round</span>
        <span class="value">{$gameStore.currentRound}/{$gameStore.totalRounds}</span>
      </div>
      <div class="stat">
        <span class="label">Time</span>
        <span class="value">{formatTime($gameTimer)}</span>
      </div>
      <div class="stat">
        <span class="label">Points</span>
        <span class="value"><AnimatedPoints value={$gameStore.points} /></span>
      </div>
    </div>

    <div class="button-group">
  <button
    class="hint-btn"
    on:click={() => {
      showToast('warning', $gameStore.currentFunction.description, 999999);
      gameStore.useHint();
    }}
    disabled={checking || disabled || $gameStore.hintUsed}
  >
    Hint
  </button>
  <button
    class="check-btn"
    on:click={checkAnswer}
    disabled={checking || disabled}
  >
    {#if checking}
      Checking...
    {:else}
      Check Answer
    {/if}
  </button>
</div>
  </div>
</div>

<style>
  .floating-ui {
    position: absolute;
    top: 5px;
    right: 50px;
    padding: 16px;
    z-index: 100;
    opacity: 0;
    width: 260px;

    background: var(--dcg-custom-background-color-shaded, #ededed);
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 8px;
  }

  .floating-ui.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .content {
    font-size: 14px;
    color: #333;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .label {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    color: #666;
  }

  .value {
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }

  .check-btn {
    width: 100%;
    background: #4263eb;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .check-btn:hover {
    background: #3b5bdb;
  }

  .check-btn:disabled {
    background: #a5b4fc;
    cursor: not-allowed;
  }

  .button-group {
    display: flex;
    gap: 8px;
    width: 100%;
  }

  .hint-btn {
    flex: 1;
    background: #f59e0b;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .hint-btn:hover {
    background: #d97706;
  }

  .hint-btn:disabled {
    background: #fcd34d;
    cursor: not-allowed;
  }

  .shortcut {
    font-size: 12px;
    opacity: 0.8;
    margin-left: 4px;
  }
</style>
