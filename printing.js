// function printStairs(n) {
//     for (let i = 1; i <= n; i++) {
//         const spaces = ' '.repeat(n - i);
//         const hashes = '#'.repeat(i);
//         console.log(spaces + hashes);
//     }
// }

// printStairs(6);


function printNumberStairs(n) {
    for (let i = 1; i <= n; i++) {
        const numbers = Array(i).fill(i).join('');
        console.log(numbers);
    }
}

printNumberStairs(4);

