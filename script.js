function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelector('div');
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "yellow";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function chnageSize(input) {
  populateBoard(input);
}
