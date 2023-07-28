function zeroesToEnd(arr) {
    let nonZeroIdx = 0;
  
    // Move all non-zero elements to the front of the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[nonZeroIdx] = arr[i];
        nonZeroIdx++;
      }
    }
  
    // Fill the rest of the array with zeroes
    for (let i = nonZeroIdx; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    return arr;
  }
  
  // Test cases
  console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); // Output: [1, 2, 4, 5, 0, 0, 0]
  console.log(zeroesToEnd([0, 0, 2, 0, 5]));    // Output: [2, 5, 0, 0, 0]
  console.log(zeroesToEnd([4, 4, 5]));          // Output: [4, 4, 5]
  console.log(zeroesToEnd([0, 0]));             // Output: [0, 0]
  