function spiralOrder(matrix) {
    const result = [];

    while (matrix.length > 0){
        result.push(...matrix.shift());
        for (const row of matrix) {
            if (row.length > 0) {
                result.push(row.pop());
            }
        }
        if (matrix.length > 0) {
            result.push(...matrix.pop().reverse());
        }
        for (let i = matrix.length - 1; i >= 0; i--) {
            if (matrix[i].length > 0) {
                result.push(matrix[i].shift());
            }
        }
    }

    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = spiralOrder(matrix);
console.log(result);