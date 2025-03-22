<script>
  import { createEventDispatcher } from 'svelte';
  import { fly, fade, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import AnimatedPoints from './AnimatedPoints.svelte';

  export let gameData;

  const dispatch = createEventDispatcher();

  // Calculate total time of all rounds
  const totalTime = gameData.roundsHistory.reduce((sum, round) => sum + round.timeSpent, 0);

  // Format time as MM:SS
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function playAgain() {
    dispatch('playAgain');
  }

  function newGame() {
    dispatch('newGame');
  }
</script>

<div
  class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
  transition:fade={{ duration: 500 }}
>
  <div
    class="w-full max-w-2xl p-8 rounded-2xl bg-white/95 shadow-2xl"
    transition:scale={{ duration: 400, delay: 100, opacity: 0, start: 0.95, easing: quintOut }}
  >
    <div class="text-center mb-6">
      <h1 class="text-4xl font-bold text-gradient mb-2">Game Complete!</h1>
      <p class="text-slate-600">
        You scored <span class="font-bold text-indigo-600"><AnimatedPoints value={gameData.points} /></span> points
        in {formatTime(totalTime)}
      </p>
    </div>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-3 text-slate-800">Round Summary</h2>
      <div class="bg-gray-100 rounded-lg overflow-hidden">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-gray-200 text-gray-700">
              <th class="py-2 px-3 text-left">Round</th>
              <th class="py-2 px-3 text-left">Function</th>
              <th class="py-2 px-3 text-left">Time</th>
              <th class="py-2 px-3 text-right">Points</th>
            </tr>
          </thead>
          <tbody>
            {#each gameData.roundsHistory as round, i}
              <tr class="border-t border-gray-200">
                <td class="py-3 px-3">{i + 1}</td>
                <td class="py-3 px-3">
                  <div>{round.function.description}</div>
                  <div class="text-xs text-gray-500 font-mono">g(x) = {round.function.expression}</div>
                </td>
                <td class="py-3 px-3">{formatTime(round.timeSpent)}</td>
                <td class="py-3 px-3 text-right font-medium"><AnimatedPoints value={round.points} /></td>
              </tr>
            {/each}
            <tr class="bg-indigo-50 font-medium text-indigo-900 border-t border-gray-200">
              <td class="py-3 px-3" colspan="2">Total</td>
              <td class="py-3 px-3">{formatTime(totalTime)}</td>
              <td class="py-3 px-3 text-right"><AnimatedPoints value={gameData.points} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex gap-4 justify-center">
      <button
        on:click={playAgain}
        class="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
      >
        Play Again ({gameData.difficulty})
      </button>
      <button
        on:click={newGame}
        class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-lg font-medium transition-colors"
      >
        New Game
      </button>
    </div>
  </div>
</div>
