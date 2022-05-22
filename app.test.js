import { checkNeighbours, generateMap } from './app';

const arr = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
];

describe('Given the function checkNeighbours', () => {
    describe('When it receives the parametes arr[2][4]', () => {
        test('Then it should return the number of neighbours', () => {
            const i = 2;
            const j = 4;
            const expectedResult = checkNeighbours(arr, i, j);
            expect(expectedResult).toBe(5);
        });
    });
    describe('When it receives the parametes arr[0][0]', () => {
        test('Then it should return the number of neighbours', () => {
            const i = 0;
            const j = 0;
            const expectedResult = checkNeighbours(arr, i, j);
            expect(expectedResult).toBe(3);
        });
    });
    describe('When it receives the parametes arr[0][4]', () => {
        test('Then it should return the number of neighbours', () => {
            const i = 0;
            const j = 4;
            const expectedResult = checkNeighbours(arr, i, j);
            expect(expectedResult).toBe(3);
        });
    });
    describe('When it receives the parametes arr[4][0]', () => {
        test('Then it should return the number of neighbours', () => {
            const i = 4;
            const j = 0;
            const expectedResult = checkNeighbours(arr, i, j);
            expect(expectedResult).toBe(3);
        });
    });
    describe('When it receives the parametes arr[4][4]', () => {
        test('Then it should return the number of neighbours', () => {
            const i = 4;
            const j = 4;
            const expectedResult = checkNeighbours(arr, i, j);
            expect(expectedResult).toBe(3);
        });
    });
    describe('When it receives the parametes arr[4][2]', () => {
        test('Then it should return the number of neighbours', () => {
            const i = 4;
            const j = 2;
            const expectedResult = checkNeighbours(arr, i, j);
            expect(expectedResult).toBe(5);
        });
    });
    describe('When it receives the parametes arr[2][4]', () => {
        test('Then it should return the number of neighbours', () => {
            const i = 2;
            const j = 4;
            const expectedResult = checkNeighbours(arr, i, j);
            expect(expectedResult).toBe(5);
        });
    });
    describe('When it receives the parametes arr[2][0]', () => {
        test('Then it should return the number of neighbours', () => {
            const i = 2;
            const j = 0;
            const expectedResult = checkNeighbours(arr, i, j);
            expect(expectedResult).toBe(5);
        });
    });
    describe('When it receives the parametes arr[2][2]', () => {
        test('Then it should return the number of neighbours', () => {
            const i = 2;
            const j = 2;
            const expectedResult = checkNeighbours(arr, i, j);
            expect(expectedResult).toBe(8);
        });
    });
});

describe('Given the function generateMap', () => {
    describe('When it receives the parameter mapSize', () => {
        test('Then it should return an array', () => {
            const mapSize = 5;
            const expectedResultGenerateMap = generateMap(mapSize);
            expect(typeof expectedResultGenerateMap).toBe('object');
        });
    });
});
