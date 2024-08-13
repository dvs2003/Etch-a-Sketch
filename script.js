const createButton = document.querySelector("#enter");

createButton.addEventListener("click", () => {
    const containerDiv = document.querySelector(".mainContainer");

    [numberRows, numberCols] = grabInputs();
    createGrid(containerDiv, numberRows, numberCols);

});


function grabInputs() {
    const inputRows = document.querySelector('#numberRows');
    const inputCols = document.querySelector("#numberCols");

    const numberRows = parseInt(inputRows.value); // Add datatype checking
    const numberCols = parseInt(inputCols.value);
    
    return [numberRows, numberCols]
}

function createGrid(parentDiv, numberRows, numberCols) {
    for (let indexRow = 0; indexRow < numberRows; indexRow++) {
        
        const newRow = document.createElement("div");
        newRow.classList.add("eachRow");
        
        for (let indexCol = 0; indexCol < numberCols; indexCol++) {
            
            const newSquare = document.createElement("div");
            newSquare.classList.add("eachSquare");
            newRow.appendChild(newSquare);

            newSquare.addEventListener("mouseover", () => {
                newSquare.classList.add("squareAfterHover");
            });
        }
        parentDiv.appendChild(newRow);
    }
}