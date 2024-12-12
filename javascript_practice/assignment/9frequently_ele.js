function MostFrequentElement(arr) {
    if (arr.length === 0) return null;
    arr.sort();

    let maxCount = 1;
    let currentCount = 1;
    let mostFrequent = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++; 
        } else {
            currentCount = 1; 
        }

        if (currentCount > maxCount) {
            maxCount = currentCount; 
            mostFrequent = arr[i];   
        }
    }

    return mostFrequent;
}
const array = [1, 3, 2, 3, 4, 3, 5, 1, 3, 1, 1, 1];
console.log("Most frequent element:", MostFrequentElement(array));
