function merge(arr1, arr2) {
    let mergedArr = [];
    i = 0;
    j = 0;
    // Loop through both arrays
    while (i < arr1.length && j < arr2.length) {
        // arr2 is less than arr1 push arr1 at index i into mergedArr
        if (arr2[j] > arr1[i]) {
            mergedArr.push(arr1[i]);
            // then increment index of i to test j again with i
            i++;
            // arr1 is less than arr2 push arr2 with index i into mergedArr
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    // if one array is empty push the other array into mergedArr
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }
    console.log(mergedArr);
    return mergedArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        console.log(arr);
        return arr;
    }
    // find value that is in the middle of the array
    let half = Math.floor(arr.length / 2);
    // use jalf to slice the array into 2 arrays
    let left = mergeSort(arr.slice(0, half));
    let right = mergeSort(arr.slice(half, arr.length));
    // use method above to merge the 2 arrays into 1 array
    return merge(left, right);
}


module.exports = { merge, mergeSort };[1, 2, 3, 4, 4, 5, 6, 8]
