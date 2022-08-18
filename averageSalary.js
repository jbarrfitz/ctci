const average = (salary) => {
  let minSal = Math.pow(10, 6) + 1;
  let maxSal = 0;
  let total = 0;

  for (let i = 0; i < salary.length; i++) {
    console.log('curr min sal: ', minSal);
    console.log('salary[i]: ', salary[i]);
    console.log('salary[i] < minSal: ', salary[i] < minSal);
    if (salary[i] < minSal) {
      minSal = salary[i];
      console.log(minSal);
    }
    if (salary[i] > maxSal) {
      maxSal = salary[i];
      console.log(maxSal);
    }
    total += salary[i];
    console.log(total);
  }
  console.log('init Total: ', total);
  total -= minSal;
  console.log('minSal: ', minSal);
  console.log('total: ', total);
  total -= maxSal;
  console.log('maxSal: ', maxSal);
  console.log('total: ', total);
  return total / (salary.length - 2);
};

console.log(average([4000, 2000, 3000, 1000]));
