function factorial(n) {
  let i = n;
  let fact = 1;
  while (i > 1) {
    fact *= i--;
  }
  return fact;
}