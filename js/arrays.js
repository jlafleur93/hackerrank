
arr = [3, 2, 1];

function reverseArray(a) {
    let output = []
    for (let i = a.length - 1; i >= 0; i--) {
        output.push(a[i]);
    }
    return output
}

console.log(reverseArray(arr));