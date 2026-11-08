function generateArray(length, min, max) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

function isSorted(arr, ascending = true) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (ascending && arr[i] > arr[i + 1]) {
      return false;
    }
    if (!ascending && arr[i] < arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function quickSort(arr, ascending = true) {
  let copy = [...arr];
  partitionSort(copy, 0, copy.length - 1, ascending);
  return copy;
}

function partitionSort(arr, low, high, ascending) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high, ascending);
    partitionSort(arr, low, pivotIndex - 1, ascending);
    partitionSort(arr, pivotIndex + 1, high, ascending);
  }
}

function partition(arr, low, high, ascending) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    let condition = ascending ? arr[j] <= pivot : arr[j] >= pivot;
    if (condition) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

function bubbleSort(arr, ascending = true) {
  let copy = [...arr];
  let n = copy.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      let condition = ascending ? copy[j] > copy[j + 1] : copy[j] < copy[j + 1];
      if (condition) {
        let temp = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = temp;
      }
    }
  }
  return copy;
}

function insertionSort(arr, ascending = true) {
  let copy = [...arr];
  for (let i = 1; i < copy.length; i++) {
    let current = copy[i];
    let j = i - 1;
    while (j >= 0 && (ascending ? copy[j] > current : copy[j] < current)) {
      copy[j + 1] = copy[j];
      j--;
    }
    copy[j + 1] = current;
  }
  return copy;
}

function selectionSort(arr, ascending = true) {
  let copy = [...arr];
  for (let i = 0; i < copy.length - 1; i++) {
    let targetIndex = i;
    for (let j = i + 1; j < copy.length; j++) {
      if (ascending ? copy[j] < copy[targetIndex] : copy[j] > copy[targetIndex]) {
        targetIndex = j;
      }
    }
    if (targetIndex !== i) {
      let temp = copy[i];
      copy[i] = copy[targetIndex];
      copy[targetIndex] = temp;
    }
  }
  return copy;
}

let testArr = [1, 2, 3, 4, 5];
console.log(isSorted(testArr, true));
console.log(isSorted(testArr, false));

let sortedAsc = quickSort(generateArray(5, 1, 50), true);
console.log(sortedAsc);
console.log(isSorted(sortedAsc, true));

let sortedDesc = quickSort(generateArray(5, 1, 50), false);
console.log(sortedDesc);
console.log(isSorted(sortedDesc, false));

let sizes = [1000, 10000, 100000];

for (let size of sizes) {
  let data = generateArray(size, 1, 1000000);
  console.log(`Розмір: ${size}`);

  let startQ = performance.now();
  quickSort(data, true);
  let endQ = performance.now();
  console.log(`QuickSort: ${(endQ - startQ).toFixed(4)} мс`);

  if (size <= 10000) {
    let startB = performance.now();
    bubbleSort(data, true);
    let endB = performance.now();
    console.log(`Bubble Sort: ${(endB - startB).toFixed(4)} мс`);

    let startI = performance.now();
    insertionSort(data, true);
    let endI = performance.now();
    console.log(`Insertion Sort: ${(endI - startI).toFixed(4)} мс`);

    let startS = performance.now();
    selectionSort(data, true);
    let endS = performance.now();
    console.log(`Selection Sort: ${(endS - startS).toFixed(4)} мс`);
  } else {
    console.log("Інші сортування пропущені через довгий час виконання");
  }
}
