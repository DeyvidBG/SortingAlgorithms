let array = [-1, 10, 4, 6, 7, 3]

const mergeSort = (array, start, end) => {
  if (start < end) {
    let mid = Math.floor((start + end) / 2)
    mergeSort(array, start, mid)
    mergeSort(array, mid + 1, end)
    merge(array, start, mid, end)
  }
}

const merge = (array, start, mid, end) => {
  // build temporary array to avoid modifying the original
  let temp = new Array()

  let i = start,
    j = mid + 1,
    k = 0

  while (i <= mid && j <= end) {
    if (array[i] < array[j]) {
      temp[k++] = array[i++]
    } else {
      temp[k++] = array[j++]
    }
  }

  // fill the rest

  while (i <= mid) {
    temp[k++] = array[i++]
  }

  while (j <= end) {
    temp[k++] = array[j++]
  }

  for (let i = start; i <= end; i++) {
    array[i] = temp[i - start]
  }
}

mergeSort(array, 0, array.length)
console.log(array)
