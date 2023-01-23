let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

if (Object.keys(salaries).length == 0) {
  console.log(sum);
} else {
  for (let salary in salaries) {
    sum += salaries[salary];
  }
  console.log(sum);
}
