let rgbValue;
let gridContainer = document.getElementById('grid-container');
gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
let gridSize = 256;


function generateGrid() {
    gridContainer.style.gridTemplateColumns = "repeat(" + Math.sqrt(gridSize) + ", 1fr)"; 
    gridContainer.style.gridTemplateColumns = "repeat(" + Math.sqrt(gridSize) + ", 1fr)";

    for (var i = 0; i < gridSize; i ++) {
        let div = document.createElement('div');
        gridContainer.appendChild(div);
        div.classList.add('grid-item');
    }
}

  generateGrid();

	$('#incrementOpacity').click(function(){
		$('.grid-item').css('opacity',0);
		$('.grid-item').hover(function(){
      $(this).css('background-color', '#000');
			console.log($(this).css('opacity'));
			$(this).css('opacity', function(){
				return parseFloat($(this).css('opacity')) + 0.05;
			});
		});
	});
    
    function resetGame() {
          $('.grid-item').css("background-color", "#ffffff");
          gridSize = 0;
          gridSize = parseInt(prompt("How large would you like the grid to be? i.e 30x30, 60x60, 100x100"));
          gridSize *= gridSize;
          $("#grid-container").empty();
          gridContainer.style.gridTemplateColumns = null;
          gridContainer.style.gridTemplateRows = null;
          generateGrid();          
      }

    $('#blackMode').click(function() {
      $('.grid-item').css({"background-color": "#ffffff", 'opacity': 1});
      $('.grid-item').hover(function() {
        $(this).css('background-color', '#000');
      });
    });

    $('#rgbMode').click(function() {
      $('.grid-item').css({"background-color": "#ffffff", 'opacity': 1});
      $('.grid-item').hover(function() {
      rgbValue = Math.floor(Math.random() * 16777215).toString(16);
      $(this).css('background-color', '#' + rgbValue);
    });
  });







