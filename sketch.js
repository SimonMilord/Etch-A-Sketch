const grid = document.querySelector('.grid');
let gridVal = document.getElementById('sizeText');
let gridSize = document.getElementById('slider');
const resetBtn = document.querySelector('.reset');
let applyNewSize = document.querySelector(".apply");
let squareSize = 16;

let defaultGrid = 16;
createGrid(defaultGrid);

function show() {
    console.log(gridVal);
}

// creates the div inside the grid
function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
  
    return div;
  }

// creates the grid given a gridSize
function createGrid(gridSize) {
    for (let rows = 0; rows < gridSize; rows++) {
        for (let cols = 0; cols < gridSize; cols++) {
            grid.appendChild(createDiv(grid.clientWidth / gridSize));
        };
    };
};

function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
        createGrid(squareSize);
}

// event listeners 
grid.addEventListener('mouseover', (e) => {
        if (e.target.matches('.box')) {
            e.target.classList.add('active');
        }
    });

gridSize.addEventListener('input', function (e) {
    squareSize = e.target.value;
    gridVal.value = `${squareSize} x ${squareSize}`;
    });

applyNewSize.addEventListener('click', function () {
    if (gridSize === 16){
        return;
    } else {
        reset();
    }
  });

resetBtn.addEventListener('click', function(){
    window.location.reload();
    return false;
});
