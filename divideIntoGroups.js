function divideIntoGroups(arr) {
    const groups = {};

    for (const num of arr) {
        if (groups[num]) {
            groups[num].push(num);
        } else {
            groups[num] = [num];
        }
    }

    return Object.values(groups);
}

const inputArray = [1, 2, 1, 1, 7, 1, 2, 3, 7, 2];
const dividedArrays = divideIntoGroups(inputArray);

console.log(dividedArrays);
