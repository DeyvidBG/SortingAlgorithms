// Insertion Sort
let array = [4, 3, 5, 10, 1, 7]
console.log("Input: " + array)

// Algorithm
for (let i = 1; i < array.length; i++) {
  let key = array[i]
  let j = i - 1
  while (j >= 0 && key < array[j]) {
    array[j + 1] = array[j]
    j--
  }
  array[j + 1] = key
}

// Output
console.log("Output: " + array)
