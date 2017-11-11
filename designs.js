function changeColor() {
    const color = $("#colorPicker").val();
    this.style.background = color;
}

function makeGrid() {
    const gridHeight = $("#input_height").val();
    const gridWidth = $("#input_width").val();
    const pixelCanvas = document.getElementById("pixel_canvas");  
    pixelCanvas.innerText = "";  
    
    for (let height = 0 ; height < gridHeight ; height++) {
        const row = pixelCanvas.insertRow(-1);
        for (let width = 0 ; width < gridWidth ; width++) {
            const cell = row.insertCell(-1);
            cell.onclick = changeColor;
        }
    }
    event.preventDefault();
}

$('#sizePicker').submit(makeGrid);
