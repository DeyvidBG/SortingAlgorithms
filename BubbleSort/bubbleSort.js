let array = [10, -5, 9, -4, 3, 2, -7]

for (let i = 0; i < array.length; i++) {
  let swapped = false
  for (let j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j]
      array[j] = array[j + 1]
      array[j + 1] = temp
      swapped = true
    }
  }
  if (swapped !== true) {
    break
  } else {
    continue
  }
}

console.log(array)
