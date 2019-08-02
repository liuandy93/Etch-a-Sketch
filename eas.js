
    let gridContainer = document.getElementById('grid-container');
    gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
    gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
    let gridSize = 256;
    //gridContainer.classList.add('grid-container');
   //let div = document.querySelectorAll('div');




function generateGrid() {
    gridContainer.style.gridTemplateColumns = "repeat(" + Math.sqrt(gridSize) + ", 1fr)"; 
    gridContainer.style.gridTemplateColumns = "repeat(" + Math.sqrt(gridSize) + ", 1fr)";

    for (var i = 0; i < gridSize; i ++) {
        let div = document.createElement('div');
        gridContainer.appendChild(div);
        div.classList.add('grid-item');
        //div.addEventListener("mouseenter", mouseOver);
    }
}
    
    generateGrid();

    var etch = function(){
        $('.grid-item').on('mouseover', function(){
          $(this).css("background-color", "#000");
        });
      };
    
    etch();

    function resetGame() {
          $('.grid-item').css("background-color", "#ffffff");
          gridSize = 0;
          gridSize = parseInt(prompt("How large would you like the grid to be?"));
          gridSize *= gridSize;
          $("#grid-container").empty();
          gridContainer.style.gridTemplateColumns = null;
          gridContainer.style.gridTemplateRows = null;
          generateGrid();
          etch();
          
      }






