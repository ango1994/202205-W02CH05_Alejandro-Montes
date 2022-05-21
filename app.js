const prebioticBroth = [
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
];
const prebioticBrothCopy = [
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
];

let neighbours = 0;

function checkCenter(arr, i, j) {
    if (i === 0 && j === 0) {
        if (arr[i][j + 1] === 1) {
            neighbours++;
        }
        if (arr[i + 1][j + 1] === 1) {
            neighbours++;
        }
        if (arr[i + 1][j] === 1) {
            neighbours++;
        }
    } else if (i === 0 && j < arr.length && j !== 0) {
        if (arr[i][j - 1] === 1) {
            neighbours++;
        }
        if (arr[i][j + 1] === 1) {
            neighbours++;
        }
        if (arr[i + 1][j] === 1) {
            neighbours++;
        }
        if (arr[i + 1][j - 1] === 1) {
            neighbours++;
        }
        if (arr[i + 1][j + 1] === 1) {
            neighbours++;
        }
    } else if (i === 0 && j === arr[i].length) {
        if (arr[i][j - 1] === 1) {
            neighbours++;
        }
        if (arr[i + 1][j] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j - 1] === 1) {
            neighbours++;
        }
    } else if (i === arr.length - 1 && j === 0) {
        if (arr[i][j + 1] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j + 1] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j] === 1) {
            neighbours++;
        }
    } else if (i === arr.length - 1 && j < arr[i].length && j !== 0) {
        if (arr[i][j - 1] === 1) {
            neighbours++;
        }
        if (arr[i][j + 1] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j - 1] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j + 1] === 1) {
            neighbours++;
        }
    } else if (i === arr.length && j === arr[i].length) {
        if (arr[i][j - 1] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j - 1] === 1) {
            neighbours++;
        }
    } else {
        if (arr[i][j - 1] === 1) {
            neighbours++;
        }
        if (arr[i][j + 1] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j] === 1) {
            neighbours++;
        }
        if (arr[i + 1][j] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j - 1] === 1) {
            neighbours++;
        }
        if (arr[i + 1][j + 1] === 1) {
            neighbours++;
        }
        if (arr[i - 1][j + 1] === 1) {
            neighbours++;
        }
        if (arr[i + 1][j - 1] === 1) {
            neighbours++;
        }
    }
}
function changePrebioticBroth(arrCopy, i, j) {
    if (neighbours < 2) {
        arrCopy[i][j] = 0;
    }
    if (neighbours > 3) {
        arrCopy[i][j] = 0;
    }
    if (neighbours === 2 && neighbours === 3) {
        arrCopy[i][j] = 1;
    }
    if (neighbours === 3) {
        arrCopy[i][j] = 1;
    }
}
function countNeighbours(arr, arrCopy) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            checkCenter(arr, i, j);
            changePrebioticBroth(arrCopy, i, j);
            neighbours = 0;
        }
    }
    console.log(neighbours);
}

console.log(prebioticBroth);
countNeighbours(prebioticBroth, prebioticBrothCopy);
console.log(prebioticBrothCopy);

// function panel(arr, arrCopy) {
//     debugger;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (
//                 arr[i][j] === 1 &&
//                 arr[i][j - 1] === 1 &&
//                 arr[i][j + 1] === 1 &&
//                 j !== 0
//             ) {
//                 arrCopy[i][j - 1] = 0;
//                 arrCopy[i][j + 1] = 0;
//                 arrCopy[i - 1][j] = 1;
//                 arrCopy[i + 1][j] = 1;
//             }
//             if (
//                 i !== 0 &&
//                 i !== arr.length + 1 &&
//                 arr[i][j] === 1 &&
//                 arr[i + 1][j] === 1 &&
//                 arr[i - 1][j] === 1
//             ) {
//                 arrCopy[i][j - 1] = 1;
//                 arrCopy[i][j + 1] = 1;
//                 arrCopy[i - 1][j] = 0;
//                 arrCopy[i + 1][j] = 0;
//             }
//         }
//     }
// }
