function bubbleSort(arr) {
    //i is the amount of times we need to iterate the array
    for (let i = 0; i < arr.length; i++) {
        //j is the current index we are iterating
        for (let j = 0; j < arr.length - 1; j++) {
            // if current index is greater than the next index, do below
            if (arr[j] > arr[j + 1]) {
                // hold current index temporarily
                let temp = arr[j];
                // set current index to next index
                arr[j] = arr[j + 1];
                // set next index to current index
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;

