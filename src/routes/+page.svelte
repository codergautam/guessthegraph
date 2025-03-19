<script>
  import { onMount } from 'svelte';
  import GameOverlay from '$lib/components/GameOverlay.svelte';

  let showOverlay = true;
  let gameStarted = false;

  function handleStartGame(event) {
    const { mode, difficulty } = event.detail;
    showOverlay = false;

    // You can initialize your game with the chosen options here
    console.log(`Starting game: ${mode} - ${difficulty}`);
    gameStarted = true;
  }

  onMount(() => {
    // Your existing calculator initialization code would go here
  });
</script>

<div id="calculator" class="w-screen h-screen relative"></div>

{#if showOverlay}
  <GameOverlay on:startGame={handleStartGame} />
{/if}