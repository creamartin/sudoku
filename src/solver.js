const correct = [
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

const worldHardestsudoku  = [
     8, 0, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 3, 6, 0, 0, 0, 0, 0,
     0, 7, 0, 0, 9, 0, 2, 0, 0 ,
     0, 5, 0, 0, 0, 7, 0, 0, 0 ,
     0, 0, 0, 0, 4, 5, 7, 0, 0 ,
     0, 0, 0, 1, 0, 0, 0, 3, 0 ,
     0, 0, 1, 0, 0, 0, 0, 6, 8 ,
     0, 0, 8, 5, 0, 0, 0, 1, 0 ,
     0, 9, 0, 0, 0, 0, 4, 0, 0 ,
];
function solve9x9(sudoku) {
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
        

    }

};

function improveSolution(sudoku) {
    // iterate through blocks of 3x3 -> right then down
    sudoku = Object.assign({}, sudoku);

    const crossout = indices => {
        let numbers = [],
            arrayIndices = [];
        indices.foreach(index => {
            if (sudoku[index].constructor === Number) 
                numbers.push(sudoku[index]);
             else 
                arrayIndices.push(index);
            
            for (const arrayIndex of arrayIndices) {
                let newGuess = sudoku[arrayIndex]. filter(el => numbers.indexOf(el) < 0);
                if (newGuess.length === 1) {
                    newGuess = newGuess[0];
                    numbers.push(newGuess);
                }
                if (newGuess.length <= 0) 
                    throw "Error at index " + arrayIndex;
                
                sudoku[arrayIndex] = newGuess;
            }
        });
    };
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            debugger;
            let numbers = [],
                arrayIndices = [];
            // check square
            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < 3; i++) {
                    const index = (row * 3 + j) * 9 + col * 3 + i;

                    if (sudoku[index].constructor === Number) 
                        numbers.push(sudoku[index]);
                     else 
                        arrayIndices.push(index);
                    
                    for (const arrayIndex of arrayIndices) {
                        let newGuess = sudoku[arrayIndex] ?. filter(el => numbers.indexOf(el) < 0);
                        if (newGuess.length === 1) {
                            newGuess = newGuess[0];
                            numbers.push(newGuess);
                        }
                        if (newGuess.length<= 0)
                            throw "Error at index "+arrayIndex;
                        sudoku [arrayIndex] = newGuess;
                    }
                }
            }
            // if end of col -> check col if (col === 2) {
                            for (let i = 0; i < 3; i++) {
                                numbers = [];
                                arrayIndices = [];
                                for (let j = 0; j < 9; j++) {
                                    let index = (row * 3 + i) * 9 + j; // TODO
                                    if (sudoku[index].constructor === Number) 
                                        numbers.push(sudoku[index])
                                     else 
                                        arrayIndices.push(index);
                                    
                                }
                                for (const arrayIndex of arrayIndices) {
                                    let newGuess = sudoku[arrayIndex] ?. filter(el => numbers.indexOf(el) < 0);
                                    if (newGuess.length === 1) {
                                        newGuess = newGuess[0];
                                        numbers.push(newGuess);
                                    }
                                    sudoku[arrayIndex] = newGuess;
                                }
                            }
                        }
                        // if end of row -> check row
                            if (row === 2) {
                            for (let i = 0; i < 3; i++) {
                                numbers = [];
                                arrayIndices = [];
                                for (let j = 0; j < 9; j++) {
                                    let index = j * 9 + col * 3 + i; // TODO
                                    if (sudoku[index].constructor === Number) 
                                        numbers.push(sudoku[index])
                                     else 
                                        arrayIndices.push(index);
                                    

                                }
                                for (const arrayIndex of arrayIndices) {
                                    let newGuess = sudoku[arrayIndex] ?. filter(el => numbers.indexOf(el) < 0);
                                    if (newGuess.length === 1) {
                                        newGuess = newGuess[0];
                                        numbers.push(newGuess);
                                    }
                                    sudoku[arrayIndex] = newGuess;
                                }
                            }
                        }
                    }
                }

                return sudoku;
            }

            export {
                solve9x9 as solve9x9,
                improveSolution as improveSolution,
                correct as correct
            };

