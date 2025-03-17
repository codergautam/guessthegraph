<script>
	import { onMount, onDestroy } from 'svelte';
	import '../app.css';

	import { calculatorStore } from '$lib/store';
    import checkFunctionsEqual from '$lib/checkFunctions';

	let { children } = $props();
	let calculator;

	onMount(() => {
		const elt = document.getElementById('calculator');
		calculator = Desmos.GraphingCalculator(elt);
		calculatorStore.set(calculator);

		const observer = (eventName, event) => {
			console.log('Change occurred', eventName, event);
			if (event.isUserInitiated) {
				checkFunctionsEqual().then((equal) => {
					console.log('Functions are equal', equal);
					if (!equal) {
						console.log('Functions are not equal');
					} else {
						console.log('Functions are equal');
					}
				});
			}
		};

		calculator.observeEvent('change', observer);

		// Cleanup on component destroy
		onDestroy(() => {
			calculator.unobserveEvent('change', observer);
			calculator.destroy();
		});
	});
</script>

{@render children()}
