# js_codil_arrRotation

1h 38min


Task 1

JavaScript
Task description
An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given

    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
Solution
Files
task1

solution.js

test-input.txt

solution.js
test-input.txt
12345678910111213
// use modulus % for pattern

const solution = (arr, k) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const shiftRight = (i + k) % arr.length
        newArr[shiftRight] = arr[i];
        // console.log(newArr);
    }
    // console.log(newArr);

Test Output

Compilation successful.

Example test:   ([3, 8, 9, 7, 6], 3)
OK

Example test:   ([0, 0, 0], 1)
OK

Example test:   ([1, 2, 3, 4], 4)
OK

Your code is syntactically correct and works properly on the example test.
Note that the example tests are not part of your score. On submission at least 8 test cases not shown here will assess your solution.
All changes saved

Any problems with the editor?

Switch to basic editor
Give Feedback

Set active file solution.js
message?: any, hint
Enable accessibility mode
