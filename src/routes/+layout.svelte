<script>
	import { onMount, onDestroy } from 'svelte';
	import '../app.css';

	import { calculatorStore } from '$lib/store';
    import checkFunctionsEqual from '$lib/checkFunctions';

	import { gameStore } from '$lib/gameStore';
    import { get } from 'svelte/store';

	let { children } = $props();
	let calculator;

	onMount(() => {
		const options = {
			settingsMenu: false,
			invertedColors: false,
		}
		const elt = document.getElementById('calculator');
		calculator = Desmos.GraphingCalculator(elt, options);
		calculatorStore.set(calculator);

		const observer = (eventName, event, ...args) => {
			console.log('Change occurred', eventName, event, args);

			// Check if f(x) is removed and add it back if it is
			const expressions = calculator.getExpressions();
			const fFunction = expressions.find(expr => expr.id === 'f');

			console.log('Expressions:', expressions);
			if (!fFunction || !fFunction.latex.includes('f(x)=')) {
				calculator.setExpression({
					id: 'f',
					latex: 'f(x)=',
					color: '#c74440'
				});
				return; // Skip further processing as we're just restoring f(x)
			}

			const gFunction = expressions.find(expr => expr.id === 'g');
			if (!gFunction || !gFunction.latex.startsWith('g(x)=')) {
				// recreate secret function if it was removed
				const currentGame = get(gameStore);
				console.log('Current game:', currentGame);
				if (currentGame.currentFunction) {
					calculator.setExpression({
						id: 'g',
						latex: `g(x)=${currentGame.currentFunction.expression}`,
						color: '#2d70b3',
						secret: true
					});
				}
			}

			// make sure there arent more than 2 expressions
			expressions.forEach((exp) => {
				if (exp.id !== 'f' && exp.id !== 'g') {
					calculator.removeExpression({ id: exp.id });
				}
			});
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
