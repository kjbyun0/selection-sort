// function findMin(arr, si) {
//   let minIdx = si;
//   for (let i = si+1; i < arr.length; i++) {
//     if (arr[minIdx] > arr[i])
//       minIdx = i;
//   }
//   return minIdx;
// }

// function selectionSort(arr) {
//   // type your code here
//   for (let i = 0; i < arr.length; i++) {
//     const minIdx = findMin(arr, i);
//     const minVal = arr[minIdx];
//     for (let j = minIdx; j > i; j--) {
//       arr[j] = arr[j-1];
//     }
//     arr[i] = minVal;
//   }
//   return arr;
// }

function findMin(arr, si)  {
  let minIdx = si;
  for (let i = si+1; i < arr.length; i++) {
    if (arr[i] < arr[minIdx])
      minIdx = i;
  }
  return minIdx;
}

function selectionSort(arr) {
  // type your code here
  let sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length; i++) {
    const minIdx = findMin(sortedArr, i);
    const minVal = sortedArr[minIdx];
    sortedArr = [...sortedArr.slice(0, i), minVal, ...sortedArr.slice(i, minIdx), ...sortedArr.slice(minIdx+1)];
  }
  return sortedArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [1]")
  console.log("=>", selectionSort([1]));

  console.log("");

  console.log("Expecting: [1, 2]")
  console.log("=>", selectionSort([1, 2]));

  console.log("");

  console.log("Expecting: [1, 2]")
  console.log("=>", selectionSort([2, 1]));

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const shortInput = [];
  for (let i = 0; i < 3; i++) {
    shortInput.push(Math.random());
  }

  const startTime = Date.now();
  for (let i = 0; i < 1000; i++) {
    selectionSort(shortInput);
    selectionSort(longInput);
  }
  const endTime = Date.now();
  const avgTime = (endTime - startTime) / 2000;
  console.log("Average RunTime: ", avgTime);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
