<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  export let value = 0;

  // Create tweened store to animate the number change
  const displayValue = tweened(value, {
    duration: 800,
    easing: cubicOut
  });

  // Update the tweened store whenever the actual value changes
  $: displayValue.set(value);
</script>

<span>{Math.round($displayValue)}</span>
