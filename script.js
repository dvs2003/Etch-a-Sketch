const createButton = document.querySelector("#enter");
const resetButton = document.querySelector("#reset");

createButton.addEventListener("click", () => {
    const containerDiv = document.querySelector(".mainContainer");

    [numberRows, numberCols] = grabInputs();
    createGrid(containerDiv, numberRows, numberCols);

});

resetButton.addEventListener("click", () => {
    reset()
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
                let squareStyle = window.getComputedStyle(newSquare);
                let currentBrightness = parseFloat(squareStyle['filter'].slice(10).slice(1,-1))
                newSquare.style.filter=`brightness(${(currentBrightness > 0) ? currentBrightness -= 0.1 : currentBrightness})`;
                //console.log(currentBrightness);
            });
        }
        parentDiv.appendChild(newRow);
    }
}

function reset() {
    const boxes = document.querySelectorAll(".eachRow");
    const containerDiv = document.querySelector(".mainContainer");
    boxes.forEach((box) => {
        containerDiv.removeChild(box);
    });
}