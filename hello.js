// const numRows = 5;

// for(let i = 1; i<=numRows; i++){
//     let row = " "
//     for(let j = 1; j <= i; j++){
//         row+= " *";
//     }
//     console.log(row);
// }

// const size = 4;

// for (let i = 1; i <= size; i++){
//     let row = "";

//     for (let j=1; j <= size; j++){
//         if((i + j) % 2 === 0){
//             row += "* ";
//         }else {
//             row+= "# ";
//         }
//     }

//     console.log(row);
// }

// const numRowsPyramid = 6;

// for (let i = 1; i<= numRowsPyramid; i++){
//     let row = " ".repeat(numRowsPyramid - i);

//     for (let j = 1; j <= i; j++){
//         row += "* ";
//     }

//     console.log(row);
// }


// const sizeSquare = 5;

// for (let i = 1; i <= sizeSquare; i++){
//     let row = "";

//     for (let j = 1; j <= sizeSquare; j++){
//         if(i === 1 || i === sizeSquare || j === 1 || j === sizeSquare){
//             row += "* ";
//         } else {
//             row += "  ";
//         }
//     }

//     console.log(row);
// }


const numRowsInverted = 5;

for (let i = numRowsInverted; i >= 1; i--){
    let row = "";

    for (let j = 1; j <= i; j++){
        row += "* ";
    }

    console.log(row);
}