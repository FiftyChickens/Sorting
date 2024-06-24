function selectionSort(arr) {
    // useing a function to sort the array
    const swap = (arr, minimum, j) =>
        ([arr[minimum], arr[i]] = [arr[i], arr[minimum]]);

    for (let i = 0; i < arr.length; i++) {
        // setting minimum to the fist index and incrementing for each loop
        let minimum = i;
        for (let j = i + 1; j < arr.length; j++) {
            // if the current index is less than the next index, set minimum to the next index
            if (arr[j] < arr[minimum]) {
                minimum = j;
            }
        }
        // check if minimum changed, if it did, swap the values
        if (i !== minimum) {
            swap(arr, minimum, i);
        }
    }
    return arr;
}

module.exports = selectionSort;
