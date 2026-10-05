function generateMatrix(m, n, min, max) {
  let matrix = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    matrix.push(row);
  }
  return matrix;
}

function printMatrix(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    console.log("Матриця порожня");
    return;
  }

  let m = matrix.length;
  let n = matrix[0].length;

  let header = "\t\t";
  for (let j = 0; j < n; j++) {
    header += "стовпець " + (j + 1) + "\t";
  }
  console.log(header);

  for (let i = 0; i < m; i++) {
    let rowStr = "рядок " + (i + 1) + "\t";
    for (let j = 0; j < n; j++) {
      let val = matrix[i][j];
      if (typeof val === "number" && !Number.isInteger(val)) {
        val = Number(val.toFixed(2));
      }
      rowStr += val + "\t\t";
    }
    console.log(rowStr);
  }
}

// 1
function subtractRowAverage(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
    let avg = sum / matrix[i].length;
    let newRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      newRow.push(matrix[i][j] - avg);
    }
    result.push(newRow);
  }
  return result;
}

// 2
function shiftMatrix(matrix, k) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push([...matrix[i]]);
  }

  for (let step = 0; step < k; step++) {
    for (let i = 0; i < res.length; i++) {
      let last = res[i].pop();
      res[i].unshift(last);
    }
    let firstRow = res.shift();
    res.push(firstRow);
  }

  return res;
}

// 3
function removeMaxRowsAndCols(matrix) {
  let maxVal = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxVal) {
        maxVal = matrix[i][j];
      }
    }
  }

  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let rowHasMax = false;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === maxVal) {
        rowHasMax = true;
      }
    }
    if (rowHasMax) continue;

    let newRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let colHasMax = false;
      for (let r = 0; r < matrix.length; r++) {
        if (matrix[r][j] === maxVal) {
          colHasMax = true;
        }
      }
      if (!colHasMax) {
        newRow.push(matrix[i][j]);
      }
    }
    result.push(newRow);
  }

  return result;
}

// 4
function rotate90ClockwiseInPlace(matrix) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }

  return matrix;
}

let m1 = generateMatrix(3, 4, 1, 20);
console.log("Початкова матриця 3х4:");
printMatrix(m1);

console.log("\nЗавдання 1:");
printMatrix(subtractRowAverage(m1));

console.log("\nЗавдання 2 (зсув на 1):");
printMatrix(shiftMatrix(m1, 1));

console.log("\nЗавдання 3:");
printMatrix(removeMaxRowsAndCols(m1));

let squareMatrix = generateMatrix(4, 4, 1, 9);
console.log("\nЗавдання 4 (до повороту):");
printMatrix(squareMatrix);
rotate90ClockwiseInPlace(squareMatrix);
console.log("Завдання 4 (після повороту):");
printMatrix(squareMatrix);
