/*
  weeks.js - Portfolio Content Data
  
  CODE SNIPPETS: Use backticks (`) for multi-line code.
  
  GIF PATHS: Store GIFs in public/gifs/ folder.
  Use paths like "/gifs/week1-canvas.gif" (NO "src" in path).
*/

export const weeks = [
  {
    id: 0,
    title: "Environment Setup",
    topics: "Git, VS Code, AI Workflow",
    description: "Setting up my development environment and learning version control basics.",
    gifPath: "gifs/week0-environment.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "Configured VS Code with helpful extensions",
      "Learned basic Git commands: init, add, commit, push",
      "Set up my first repository on GitHub"
    ],
    challenges: "Understanding the difference between local and remote repositories was confusing at first.",
    codeSnippet: `git init
git add .
git commit -m "Initial commit"
git push origin main`
  },

  {
    id: 1,
    title: "Canvas & Shapes",
    topics: "Coordinate system, basic shapes, RGB color",
    description: "Learning to draw on the p5.js canvas with shapes and colors.",
    gifPath: "gifs/week1-canvas.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "The canvas coordinate system starts at top-left (0,0)",
      "Basic shapes: ellipse(), rect(), line(), triangle()",
      "RGB color values range from 0-255"
    ],
    challenges: "Remembering that Y increases downward, not upward like in math class.",
    codeSnippet: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255, 0, 0);
  ellipse(200, 200, 50, 50);
}`
  },

  {
    id: 2,
    title: "Variables & Interactivity",
    topics: "Variables, mouseX, mouseY, dynamic sketches",
    description: "Making sketches respond to user input with variables and mouse tracking.",
    gifPath: "gifs/week2-variables.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "Variables store values that can change",
      "mouseX and mouseY track cursor position",
      "Using variables makes code flexible and reusable"
    ],
    challenges: "Debugging when I forgot to declare a variable with let. Also this is not easy!",
    codeSnippet: `let circleSize = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, circleSize, circleSize);
}`
  },

  {
    id: 3,
    title: "Functions & Randomness",
    topics: "Custom functions, parameters, random(), noise()",
    description: "Creating reusable code blocks and adding unpredictability to sketches.",
    gifPath: "/gifs/week3-functions.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "Functions let you reuse code without repeating it",
      "Parameters make functions flexible",
      "random() creates unpredictable values each frame"
    ],
    challenges: "Understanding the difference between random() and noise() took some experimentation.",
    codeSnippet: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawFlower(100, 100, 30);
  drawFlower(250, 200, 50);
}

function drawFlower(x, y, size) {
  fill(255, 100, 150);
  for (let i = 0; i < 6; i++) {
    let angle = radians(i * 60);
    ellipse(x + cos(angle) * size, y + sin(angle) * size, size, size);
  }
}`
  },

  {
    id: 4,
    title: "Conditionals",
    topics: "if/else, comparison operators, state management",
    description: "Making decisions in code with conditional statements.",
    gifPath: "/gifs/week4-conditionals.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "if/else lets code make decisions",
      "Comparison operators: ===, !==, <, >, <=, >=",
      "State variables can track modes or conditions"
    ],
    challenges: "Remembering to use === instead of = for comparisons.",
    codeSnippet: `let isDay = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (isDay) {
    background(135, 206, 235);
    fill(255, 255, 0);
    ellipse(350, 50, 80, 80);
  } else {
    background(25, 25, 112);
    fill(255);
    ellipse(350, 50, 60, 60);
  }
}

function mousePressed() {
  isDay = !isDay;
}`
  },

  {
    id: 5,
    title: "For Loops & Patterns",
    topics: "Loop syntax, iteration, grid patterns",
    description: "Using loops to repeat elements and create patterns.",
    gifPath: "/gifs/week5-loops.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "For loops repeat code a specific number of times",
      "The loop variable (i) can control position and size",
      "Loops make it easy to create rows and columns"
    ],
    challenges: "Off-by-one errors when the loop ran one too many or too few times.",
    codeSnippet: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < 10; i++) {
    let x = i * 40 + 20;
    fill(i * 25, 100, 200);
    ellipse(x, 200, 30, 30);
  }
}`
  },

  {
    id: 6,
    title: "Nested Loops & Transformations",
    topics: "2D grids, translate, rotate, push/pop",
    description: "Creating complex patterns with nested loops and transformations.",
    gifPath: "/gifs/week6-nested.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "Nested loops create 2D grids (rows and columns)",
      "translate() moves the origin point",
      "push() and pop() save and restore transformations"
    ],
    challenges: "Keeping track of transformations without push/pop caused unexpected results.",
    codeSnippet: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      let x = col * 50 + 25;
      let y = row * 50 + 25;
      if ((row + col) % 2 === 0) {
        fill(50);
      } else {
        fill(200);
      }
      rect(x - 20, y - 20, 40, 40);
    }
  }
}`
  },

  {
    id: 7,
    title: "Strings & Text",
    topics: "Text rendering, string manipulation, fonts",
    description: "Working with text and typography in p5.js.",
    gifPath: "/gifs/week7-strings.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "text() displays strings on the canvas",
      "textSize() and textAlign() control appearance",
      "Strings can be combined with the + operator"
    ],
    challenges: "Positioning text precisely required understanding textAlign options.",
    codeSnippet: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Hello, p5.js!", width / 2, height / 2);
}`
  },

  {
    id: 8,
    title: "Arrays",
    topics: "Array basics, iteration, push/pop",
    description: "Storing and managing collections of data with arrays.",
    gifPath: "/gifs/week8-arrays.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "Arrays store multiple values in one variable",
      "Access items by index: myArray[0]",
      "Loop through arrays with for loops"
    ],
    challenges: "Array indices start at 0, not 1 - this caused several bugs.",
    codeSnippet: `let xPositions = [];
let yPositions = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < xPositions.length; i++) {
    ellipse(xPositions[i], yPositions[i], 20, 20);
  }
}

function mousePressed() {
  xPositions.push(mouseX);
  yPositions.push(mouseY);
}`
  },

  {
    id: 9,
    title: "Objects & Classes",
    topics: "Object literals, classes, constructors",
    description: "Organizing code with objects and creating reusable blueprints with classes.",
    gifPath: "/gifs/week9-objects.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "Objects group related properties together",
      "Classes are blueprints for creating objects",
      "The constructor sets up initial values"
    ],
    challenges: "Understanding 'this' keyword took practice and experimentation.",
    codeSnippet: `let ball;

function setup() {
  createCanvas(400, 400);
  ball = new Ball(200, 200);
}

function draw() {
  background(220);
  ball.update();
  ball.display();
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }
  
  display() {
    ellipse(this.x, this.y, 30, 30);
  }
}`
  },

  {
    id: 10,
    title: "Arrays of Objects & JSON",
    topics: "Managing collections, data-driven visuals, JSON loading",
    description: "Combining arrays and objects to create dynamic, data-driven sketches.",
    gifPath: "/gifs/week10-json.gif",
    sketchUrl: "https://editor.p5js.org/your-username/sketches/xxxxx",
    learnings: [
      "Arrays can hold multiple objects",
      "JSON is a format for storing structured data",
      "loadJSON() imports external data files"
    ],
    challenges: "Asynchronous loading meant data wasn't immediately available.",
    codeSnippet: `let balls = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    balls.push(new Ball(random(width), random(height)));
  }
}

function draw() {
  background(220);
  for (let ball of balls) {
    ball.update();
    ball.display();
  }
}`
  }
];
