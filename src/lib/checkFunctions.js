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
  console.log(calculator);

  const range = Array.from({ length: 11 }, (_, i) => i - 5);
  console.log(range);
  const promises = range.map(i =>
    Promise.all([executeFunction('f', i, calculator), executeFunction('g', i, calculator)])
      .then(([val1, val2]) => ({ i, val1, val2 }))
  );

  console.time();
  const results = await Promise.all(promises);
  console.timeEnd();
  let allNaN = true;

  for (const { i, val1, val2 } of results) {


    if(isNaN(val1) || isNaN(val2)) {
      continue;
    } else {
      allNaN = false;
    }

    if (Math.abs(val1 - val2) > 0.0001) {
      console.log('functions not equal at x = ', i);
      return false;
    }
  }
  console.log('allnan', allNaN);

  return allNaN ? 'NaN' : true;
}
