function generateRandomArray(length, min, max) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

let mainArray = generateRandomArray(10, -20, 30);
console.log("Масив:", mainArray);

// 1
function countAndSumEvenInRange(arr, startIndex, endIndex) {
  let count = 0;
  let sum = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    if (arr[i] % 2 === 0) {
      count++;
      sum += arr[i];
    }
  }
  return { count, sum };
}
console.log("Завдання 1:", countAndSumEvenInRange(mainArray, 2, 6));

// 2
function analyzeAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      count++;
    }
  }
  return { average: avg, countGreaterThanAvg: count };
}
console.log("Завдання 2:", analyzeAverage(mainArray));

// 3
function sumTwoArrays(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}
let arrA = generateRandomArray(5, 1, 10);
let arrB = generateRandomArray(5, 1, 10);
console.log("Завдання 3:", sumTwoArrays(arrA, arrB));

// 4
function concatenateArrays(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}
let shortArr = generateRandomArray(3, 1, 10);
let longArr = generateRandomArray(6, 10, 20);
console.log("Завдання 4:", concatenateArrays(shortArr, longArr));

// 5
function swapMinAndMax(arr) {
  let copy = [...arr];
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 1; i < copy.length; i++) {
    if (copy[i] < copy[minIndex]) minIndex = i;
    if (copy[i] > copy[maxIndex]) maxIndex = i;
  }
  let temp = copy[minIndex];
  copy[minIndex] = copy[maxIndex];
  copy[maxIndex] = temp;
  return copy;
}
console.log("Завдання 5:", swapMinAndMax(mainArray));

// 6
function splitPositivesAndNegatives(arr) {
  let positives = [];
  let negatives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positives.push(arr[i]);
    if (arr[i] < 0) negatives.push(arr[i]);
  }
  return { positives, negatives };
}
console.log("Завдання 6:", splitPositivesAndNegatives(mainArray));

// 7
function removeMinMaxDuplicates(arr) {
  let minVal = arr[0];
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) minVal = arr[i];
    if (arr[i] > maxVal) maxVal = arr[i];
  }

  let result = [];
  let minFound = false;
  let maxFound = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === minVal) {
      if (!minFound) {
        result.push(arr[i]);
        minFound = true;
      }
    } else if (arr[i] === maxVal) {
      if (!maxFound) {
        result.push(arr[i]);
        maxFound = true;
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log("Завдання 7:", removeMinMaxDuplicates([5, 1, 9, 1, 3, 9, 9, 2]));

// 8
function elementsBetweenAverages(arr1, arr2) {
  function getAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum / arr.length;
  }

  let avg1 = getAvg(arr1);
  let avg2 = getAvg(arr2);
  let minAvg = Math.min(avg1, avg2);
  let maxAvg = Math.max(avg1, avg2);

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= minAvg && arr1[i] <= maxAvg) result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] >= minAvg && arr2[i] <= maxAvg) result.push(arr2[i]);
  }
  return result;
}
console.log("Завдання 8:", elementsBetweenAverages(generateRandomArray(8, 0, 40), generateRandomArray(8, 10, 60)));
