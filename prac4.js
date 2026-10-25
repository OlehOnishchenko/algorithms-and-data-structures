// 1. Від 1 до n
function print1ToN(n) {
  if (n < 1) return;
  print1ToN(n - 1);
  console.log(n);
}

// 2. Від А до В
function printAtoB(a, b) {
  console.log(a);
  if (a === b) return;
  if (a < b) {
    printAtoB(a + 1, b);
  } else {
    printAtoB(a - 1, b);
  }
}

// 3. Точна степінь двійки
function isPowerOfTwo(n) {
  if (n === 1) return "YES";
  if (n < 1 || n % 2 !== 0) return "NO";
  return isPowerOfTwo(n / 2);
}

// 4. Сума цифр числа
function sumOfDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// Перевірка
console.log("--- 1. Від 1 до 5 ---");
print1ToN(5);

console.log("--- 2. Від 5 до 1 ---");
printAtoB(5, 1);

console.log("--- 3. Спінь двійки (8 і 3) ---");
console.log(isPowerOfTwo(8)); 
console.log(isPowerOfTwo(3)); 

console.log("--- 4. Сума цифр (179) ---");
console.log(sumOfDigits(179)); 
