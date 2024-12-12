function duplicatesArray(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}
let numbers = ["sunil","madhavi","nira","raghav","nira"];
let duplicates = [...new Set(duplicatesArray(numbers))]; 
console.log("Duplicates:", duplicates);



function findDuplicates(arr) {
    let duplicates = [];
    let seen = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            duplicates.push(arr[i]);
        } else {
            seen.add(arr[i]);
        }
    }
    return duplicates;
}

let arr = ["sunil", "madhavi", "nira", "raghav", "nira"];
let duplicates = findDuplicates(arr);
console.log("Duplicate elements:", duplicates);

