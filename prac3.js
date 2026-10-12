function generateArray(length, min, max) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

function printArray(arr) {
  let result = "{";
  for (let i = 0; i < arr.length; i++) {
    result += `[cell - ${i},value - ${arr[i]}]`;
    if (i < arr.length - 1) {
      result += ",";
    }
  }
  result += "}";
  console.log(result);
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
      if (ascending) {
        if (copy[j] < copy[targetIndex]) {
          targetIndex = j;
        }
      } else {
        if (copy[j] > copy[targetIndex]) {
          targetIndex = j;
        }
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

let originalArray = generateArray(8, 1, 30);

console.log("Початковий масив:");
printArray(originalArray);

console.log("\n--- Bubble Sort ---");
console.log("Прямий порядок (true):");
printArray(bubbleSort(originalArray, true));
console.log("Зворотний порядок (false):");
printArray(bubbleSort(originalArray, false));

console.log("\n--- Insertion Sort ---");
console.log("Прямий порядок (true):");
printArray(insertionSort(originalArray, true));
console.log("Зворотний порядок (false):");
printArray(insertionSort(originalArray, false));

console.log("\n--- Selection Sort ---");
console.log("Прямий порядок (true):");
printArray(selectionSort(originalArray, true));
console.log("Зворотний порядок (false):");
printArray(selectionSort(originalArray, false));
