let array = [1, 5, 3, 10, -1, 9]

let mergeSort = (array, start, end) => {
  if (start < end) {
    let mid = Math.floor((start + end) / 2)
    mergeSort(array, start, mid)
    mergeSort(array, mid + 1, end)
    merge(array, start, mid, end)
  }
}

let merge = (array, start, mid, end) => {
  let startIndex = start,
    midIndex = mid + 1,
    temp = new Array(),
    k = 0

  while (startIndex <= mid && midIndex <= end) {
    if (array[startIndex] < array[midIndex]) {
      temp[k++] = array[startIndex++]
    } else {
      temp[k++] = array[midIndex++]
    }
  }

  while (startIndex <= mid) {
    temp[k++] = array[startIndex++]
  }

  while (midIndex <= end) {
    temp[k++] = array[midIndex++]
  }

  for (let i = start; i <= end; i++) {
    array[i] = temp[i - start]
  }
}

mergeSort(array, 0, array.length)
console.log(array)
