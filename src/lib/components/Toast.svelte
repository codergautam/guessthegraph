<script>
  import { fade, fly } from 'svelte/transition';
  import { toastStore } from '$lib/toastStore';
</script>

{#if $toastStore.visible}
  <div
    class="fixed z-50 bottom-6 left-1/2 transform -translate-x-1/2"
    in:fly={{ y: 50, duration: 200 }}
    out:fly={{ y: 50, duration: 200 }}
  >
    <div
      class="px-5 py-3 rounded-lg shadow-lg flex items-center"
      class:bg-green-600={$toastStore.type === 'success'}
      class:bg-red-600={$toastStore.type === 'error'}
      class:bg-yellow-600={$toastStore.type === 'warning'}
    >
      <!-- Icon based on type -->
      {#if $toastStore.type === 'success'}
        <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      {:else if $toastStore.type === 'error'}
        <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      {:else}
        <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      {/if}

      <span class="text-white font-medium">{$toastStore.message}</span>
    </div>
  </div>
{/if}
