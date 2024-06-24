function insertionSort(arr) {
    // Starting at second element
    for (let i = 1; i < arr.length; i++) {
        // current and previous refer to index location
        let current = arr[i];
        let previous = i - 1;
        // while previous is greater than 0 and previous value is greater than current value,
        while (previous >= 0 && arr[previous] > current) {
            // move previous value to the next index and .
            arr[previous + 1] = arr[previous];
            // decrement previous by 1 to prevent infinite loop
            previous--;
        }
        // move current value to the next index
        arr[previous + 1] = current;
    }
    console.log(arr);
    return arr;
}
module.exports = insertionSort;