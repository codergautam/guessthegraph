<script>
  import { fly, fade, scale, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  let showModal = false;
  let selectedMode = null;
  let showDifficultySelector = false;

  // Use onMount to ensure the animation works on initial load
  onMount(() => {
    // Small timeout to ensure DOM is ready
    setTimeout(() => {
      showModal = true;
    }, 10);
  });

  function selectMode(mode) {
    selectedMode = mode;
    if (mode === 'singleplayer') {
      showDifficultySelector = true;
    } else if (mode === 'daily') {
      startGame('daily');
    }
  }

  function startGame(difficulty) {
    // Fade out the modal first
    showModal = false;

    // Then dispatch the event after animation completes
    setTimeout(() => {
      dispatch('startGame', {
        mode: selectedMode,
        difficulty
      });
    }, 500); // Match fade duration
  }

  function goBack() {
    showDifficultySelector = false;
  }
</script>

{#if showModal}
<div
  class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
  transition:fade={{ duration: 500 }}
>
  <div
    class="w-full max-w-2xl p-8 rounded-2xl bg-white/95 shadow-2xl relative overflow-hidden"
    transition:scale={{ duration: 400, delay: 100, opacity: 0, start: 0.95, easing: quintOut }}
  >
    <div class="relative" style="overflow: hidden;">
      <!-- Mode Selection Panel -->
      <div
        class="transition-all duration-500 ease-out transform"
        class:translate-x-0={!showDifficultySelector}
        class:-translate-x-full={showDifficultySelector}
        class:opacity-100={!showDifficultySelector}
        class:opacity-0={showDifficultySelector}
      >
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gradient mb-2">Guess the Graph <span class="text-2xl text-gradient-secondary">(beta)</span></h1>
          <p class="text-slate-600">Can you match the mathematical function?</p>
        </div>

        <div class="grid gap-4">
          <button
            on:click={() => selectMode('singleplayer')}
            class="game-btn bg-indigo-600 hover:bg-indigo-700"
            in:fly={{ y: 20, duration: 300, delay: 200 }}
          >
            <span class="text-xl">Singleplayer</span>
            <span class="text-xs text-indigo-200">Challenge yourself!</span>
          </button>

          <button
            on:click={() => selectMode('daily')}
            class="game-btn bg-emerald-600 hover:bg-emerald-700"
            in:fly={{ y: 20, duration: 300, delay: 300 }}
          >
            <span class="text-xl">Daily Challenge</span>
            <span class="text-xs text-emerald-200">New function every day</span>
          </button>

          <button
            disabled
            class="game-btn bg-gray-400 not-allowed relative overflow-hidden"
            in:fly={{ y: 20, duration: 300, delay: 400 }}
          >
            <div class="absolute top-0 right-0 bg-yellow-500 text-xs px-2 py-0.5 rounded-bl-md font-medium">
              Coming Soon
            </div>
            <span class="text-xl">Multiplayer</span>
            <span class="text-xs text-gray-200">Race against others</span>
          </button>
        </div>

        <div class="mt-8 text-center text-sm text-slate-500">
          <p>Use the Desmos graphing calculator to match the hidden function</p>
        </div>
      </div>

      <!-- Difficulty Selection Panel -->
      <div
        class="absolute top-0 left-0 w-full transition-all duration-500 ease-out transform"
        class:translate-x-0={showDifficultySelector}
        class:translate-x-full={!showDifficultySelector}
        class:opacity-100={showDifficultySelector}
        class:opacity-0={!showDifficultySelector}
      >
        <div class="flex items-center mb-6">
          <button
            on:click={goBack}
            class="text-gray-500 hover:text-gray-700 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            Back
          </button>

          <div class="text-center flex-1 pr-8">
            <h1 class="text-3xl font-bold text-gradient">Select Difficulty</h1>
            <p class="text-slate-600">Choose how challenging you want it to be</p>
          </div>
        </div>

        <div class="grid gap-4">
          <button
            on:click={() => startGame('easy')}
            class="game-btn bg-green-600 hover:bg-green-700"
          >
            <span class="text-xl">Easy</span>
            <span class="text-xs text-green-200">Simple functions</span>
          </button>

          <button
            on:click={() => startGame('medium')}
            class="game-btn bg-yellow-600 hover:bg-yellow-700"
          >
            <span class="text-xl">Medium</span>
            <span class="text-xs text-yellow-200">More challenging expressions</span>
          </button>

          <button
            on:click={() => startGame('hard')}
            class="game-btn bg-red-600 hover:bg-red-700"
          >
            <span class="text-xl">Hard</span>
            <span class="text-xs text-red-200">Complex mathematical functions</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
{/if}