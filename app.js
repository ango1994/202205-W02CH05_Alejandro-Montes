const mapSize = 30;

let prebioticBroth = generateMap(mapSize);
const prebioticBrothCopy = prebioticBroth.map(function (arr) {
    return arr.slice();
});

export function generateMap(mapSize) {
    const generatedArr = [];
    for (let i = 0; i < mapSize; i++) {
        generatedArr.push(
            Array.from({ length: mapSize }, () => Math.round(Math.random()))
        );
    }
    return generatedArr;
}
export function checkNeighbours(arr, i, j) {
    let neighbours = 0;
    if (typeof arr[i][j - 1] !== 'undefined' && arr[i][j - 1] === 1) {
        neighbours++;
    }
    if (typeof arr[i][j + 1] !== 'undefined' && arr[i][j + 1] === 1) {
        neighbours++;
    }
    if (typeof arr[i - 1] !== 'undefined' && arr[i - 1][j] === 1) {
        neighbours++;
    }
    if (typeof arr[i + 1] !== 'undefined' && arr[i + 1][j] === 1) {
        neighbours++;
    }
    if (typeof arr[i - 1] !== 'undefined' && arr[i - 1][j - 1] === 1) {
        neighbours++;
    }
    if (typeof arr[i + 1] !== 'undefined' && arr[i + 1][j + 1] === 1) {
        neighbours++;
    }
    if (typeof arr[i - 1] !== 'undefined' && arr[i - 1][j + 1] === 1) {
        neighbours++;
    }
    if (typeof arr[i + 1] !== 'undefined' && arr[i + 1][j - 1] === 1) {
        neighbours++;
    }
    // }
    return neighbours;
}
export function changeMap(arr, arrCopy, i, j) {
    const neighbours = checkNeighbours(arr, i, j);
    if (neighbours < 2) {
        arrCopy[i][j] = 0;
    }
    if (neighbours > 3) {
        arrCopy[i][j] = 0;
    }
    if (neighbours === 3) {
        arrCopy[i][j] = 1;
    }
}
function runExperiment(arr, arrCopy) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            changeMap(arr, arrCopy, i, j);
        }
    }

    prebioticBroth = prebioticBrothCopy.map(function (arr) {
        return arr.slice();
    });

    console.log(prebioticBroth);
}

console.log(prebioticBroth);

setInterval(function () {
    runExperiment(prebioticBroth, prebioticBrothCopy);
}, 2000);
