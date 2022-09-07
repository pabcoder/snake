let width = 600;
let height = 600;
let amountOfSquares = 50
let squareSize = 600 / amountOfSquares;
let firstFruit = true;
let direction = 1;
let fruitImage;
let fruit = {
  x: 10, y: 10
};
let snake = [
  {
    x: 2,
    y: 0
  },
  {
    x: 1,
    y: 0
  },
  {
    x: 0,
    y: 0
  }
];

function preload() {
  fruitImage = loadImage('./assets/fruit.png');
}

function setup() {  
  createCanvas(500, 500);
  frameRate(5);
}

function draw() {
  background(220);

  // Aqui pintamos a la serpiente
  snake.forEach(p => {
    square((p.x * squareSize), (p.y * squareSize), squareSize);
  })

  // Acá pintamos la fruta
  //square((fruit.x * squareSize), (fruit.y * squareSize), squareSize);
  image(
    fruitImage,
    (fruit.x * squareSize),
    (fruit.y * squareSize),
    squareSize,
    squareSize
  );

  // Acá movemos las distintas partes de la serpiente
  for (let i = (snake.length-1); i >= 1; i--) {
    snake[i].x = snake[i-1].x;
    snake[i].y = snake[i-1].y;
  }
  
  if (direction === 0) {
    snake[0].y -= 1
  }
  if (direction === 1) {
    snake[0].x += 1
  }
  if (direction === 2) {
    snake[0].y += 1
  }
  if (direction === 3) {
    snake[0].x -= 1
  }

  if (snake[0].x === fruit.x && snake[0].y === fruit.y) {
    let x = snake[0].x;
    let y = snake[0].y;

    if (direction === 0) {
      y -= 1
    }
    if (direction === 1) {
      x += 1
    }
    if (direction === 2) {
      y += 1
    }
    if (direction === 3) {
      x -= 1
    }

    snake.unshift({
      x, y
    });
    setFruit();
  }
}

function setFruit () {
  fill(255);
  fruit = {
    x: Math.floor(Math.random() * (amountOfSquares - 10)) + 1,
    y: Math.floor(Math.random() * (amountOfSquares - 10)) + 1
  };

  //image(fruitImage, fruit.x, fruit.y, squareSize, squareSize);
  //firstFruit = false;
}

function keyPressed() {
  if (keyCode === 38) {
    direction = 0
  }
  if (keyCode === 39) {
    direction = 1
  }
  if (keyCode === 40) {
    direction = 2
  }
  if (keyCode === 37) {
    direction = 3
  }
}