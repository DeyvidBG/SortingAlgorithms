# Insertion sort

Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.

Insertion sort works similarly as we sort cards in our hand in a card game.

We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place.

A similar approach is used by insertion sort.

# Insertion sort - Complexity

## Time Complexity

** Best Case Complexity: ** - O(n) When the array is already sorted, the outer loop runs for n number of times whereas the inner loop does not run at all. So, there are only n number of comparisons. Thus, complexity is linear.

** Average Case Complexity: ** - O(n^2) It occurs when the elements of an array are in jumbled order (neither ascending nor descending).

** Worst Case Complexity: ** - O(n^2) Suppose, an array is in ascending order, and you want to sort it in descending order. In this case, worst case complexity occurs.

Each element has to be compared with each of the other elements so, for every nth element, (n-1) number of comparisons are made.

## Space Complexity

Space complexity is O(1) because an extra variable key is used.

# Insertion Sort Applications

The insertion sort is used when:

1. the array is has a small number of elements
2. there are only a few elements left to be sorted
