const solved = [ 5,1,7,6,9,8,2,3,4,2,8,9,1,3,4,7,5,6,3,4,6,2,7,5,8,9,1,6,7,2,8,4,9,3,1,5,1,3,8,5,2,6,9,4,7,9,5,4,7,1,3,6,8,2,4,9,5,3,6,2,1,7,8,7,2,3,4,8,1,5,6,9,8,6,1,9,5,7,4,2,3 ];
const start = [
       5, 1, 7, 6, 0, 0, 0, 3, 4 ,
       2, 8, 9, 0, 0, 4, 0, 0, 0 ,
       3, 4, 6, 2, 0, 5, 0, 9, 0 ,
       6, 0, 2, 0, 0, 0, 0, 1, 0 ,
       0, 3, 8, 0, 0, 6, 0, 4, 7 ,
       0, 0, 0, 0, 0, 0, 0, 0, 0 ,
       0, 9, 0, 0, 0, 0, 0, 7, 8 ,
       7, 0, 3, 4, 0, 0, 5, 6, 0 ,
       0, 0, 0, 0, 0, 0, 0, 0, 0 ,
  ];

/*
const correct  = [
     8, 0, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 3, 6, 0, 0, 0, 0, 0,
     0, 7, 0, 0, 9, 0, 2, 0, 0 ,
     0, 5, 0, 0, 0, 7, 0, 0, 0 ,
     0, 0, 0, 0, 4, 5, 7, 0, 0 ,
     0, 0, 0, 1, 0, 0, 0, 3, 0 ,
     0, 0, 1, 0, 0, 0, 0, 6, 8 ,
     0, 0, 8, 5, 0, 0, 0, 1, 0 ,
     0, 9, 0, 0, 0, 0, 4, 0, 0 ,
];*/


/*function solve9x9(sudoku) {
let iteration = 0;
// fill null with Range(1,9)
sudoku = sudoku.map(el => el ? el : [...Array(10).keys()].splice(1));

while (iteration++ < 500) {
    console.log(sudoku.reduce((accumulator, currentValue) => (currentValue.constructor === Number) ? accumulator + 1 : accumulator, 0));

    const old = Object.assign({}, sudoku);

    sudoku = improveSolution(sudoku);

    // all numbers found
    if (sudoku.reduce((accumulator, currentValue) => accumulator && (currentValue.constructor === Number))) 
        return sudoku;
    


    // check if progress has been made this turn otherwise return error in sudoku
    if (JSON.stringify(sudoku) === JSON.stringify(old)) 
        throw "sudoku  is errorsome.";

}};

function improveSolution(sudoku) {
    const crossout = indices => {
        let numbers = [],
            arrayIndices = [];
        indices.forEach(index => {
            if (sudoku[index].constructor === Number){
                numbers.push(sudoku[index]);}
             else{
                arrayIndices.push(index);}
            
            for (const arrayIndex of arrayIndices) {
                console.log(arrayIndex,sudoku[arrayIndex]);
                let newGuess = sudoku[arrayIndex].filter(el => numbers.indexOf(el) < 0);
                if (newGuess.length === 1) {
                    newGuess = newGuess[0];
                    numbers.push(newGuess);
                    arrayIndices = arrayIndices.filter(index=> index !== arrayIndex);
                }
                else if (newGuess.length <= 0){ 
                    throw new Error("Error at index " + arrayIndex);}
                
                sudoku[arrayIndex] = newGuess;
            }
        });
    };

    sudoku = Object.assign({}, sudoku);

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {

            let checksquare = [];
            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < 3; i++) {
                    const index = (row * 3 + j) * 9 + col * 3 + i;
                    checksquare.push(index);
                }
            }
            crossout(checksquare);

            if (col === 2) {
                for (let i = 0; i < 3; i++) {
                    let checkcol = [];
                    for (let j = 0; j < 9; j++) {
                        const index = (row * 3 + i) * 9 + j;
                        checkcol.push(index);
                    }
                    crossout(checkcol);
                }
                
            }
            if (row === 2) {
                for (let i = 0; i < 3; i++) {
                    let checkrow = [];
                    for (let j = 0; j < 9; j++) {
                        const index = j * 9 + col * 3 + i;
                        checkrow.push(index);
                    }
                    crossout(checkrow);

                }
            }
        }
    }

    return sudoku;
}
*/
export {
    solved,
    start
};

