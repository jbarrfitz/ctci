const average = (salary) => {
  let minSal = Math.pow(10, 6) + 1;
  let maxSal = 0;
  let total = 0;

  for (let i = 0; i < salary.length; i++) {
    if (salary[i] < minSal) {
      minSal = salary[i];
    }
    if (salary[i] > maxSal) {
      maxSal = salary[i];
    }
    total += salary[i];
  }
  total -= minSal;
  total -= maxSal;
  return total / (salary.length - 2);
};

console.log(average([4000, 2000, 3000, 1000]));
