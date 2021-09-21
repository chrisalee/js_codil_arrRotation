// use modulus % for pattern

const cyclicalRotation = (arr, k) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const shiftR = (i + k) % arr.length
    newArr[shiftR] = arr[i]
  }
  console.log(newArr);
  return newArr;
}

cyclicalRotation([], 10); // []
cyclicalRotation([2,5], 2); // [2, 5]
cyclicalRotation([2,5,5,5,5,5,5,3,3,2,1,00,6,4], 33); // [2,1,00,6,4,2,5,5,5,5,5,5,3,3]
cyclicalRotation([1,2,3,4,5,6,7,8,9], 8); // [2,3,4,5,6,7,8,9, 1]
