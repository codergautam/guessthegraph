import { get } from 'svelte/store';
import { calculatorStore } from './store';

export function executeFunction(f1, value, calculator) {
  return new Promise((resolve, reject) => {
    let f = calculator.HelperExpression({ latex: f1 + '(' + value + ')' });

    f.observe('numericValue', function () {
      resolve(f.numericValue);
    });
  });
}

export default async function checkFunctionsEqual() {
  const calculator = get(calculatorStore);

  const range = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
  const promises = range.map(i =>
    Promise.all([executeFunction('f', i, calculator), executeFunction('g', i, calculator)])
      .then(([val1, val2]) => ({ i, val1, val2 }))
  );

  const results = await Promise.all(promises);
  let allNaN = true;

  for (const { i, val1, val2 } of results) {


    if(isNaN(val1) || isNaN(val2)) {
      continue;
    } else {
      allNaN = false;
    }

    if (Math.abs(val1 - val2) > 0.0001) {
      return false;
    }
  }

  return allNaN ? 'NaN' : true;
}
