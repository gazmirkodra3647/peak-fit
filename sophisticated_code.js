Here's an example of a complex JavaScript code that satisfies the given requirements. The file name for this code is "sophisticated_code.js".

```javascript
/* sophisticated_code.js */

// Define a class for creating custom shapes
class Shape {
  constructor() {
    this.position = { x: 0, y: 0 };
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  getPosition() {
    return this.position;
  }

  draw() {
    // Draw the shape based on its position
    console.log(`Drawing shape at (${this.position.x}, ${this.position.y})`);
  }
}

// Define a class for creating custom animations
class Animation {
  constructor(duration, shape) {
    this.duration = duration;
    this.shape = shape;
  }

  start() {
    console.log('Animation started...');
    // Start animating the shape
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / this.duration, 1);
      // Calculate intermediate position based on animation progress
      const x = this.shape.getPosition().x + progress * 100;
      const y = this.shape.getPosition().y + progress * 50;
      this.shape.setPosition(x, y);
      this.shape.draw();
      if (progress === 1) {
        console.log('Animation complete!');
        clearInterval(interval);
      }
    }, 10);
  }
}

// Create a shape instance
const shape = new Shape();

// Set initial position
shape.setPosition(10, 20);

// Create an animation instance
const animation = new Animation(2000, shape);

// Start the animation
animation.start();
```

This code demonstrates a simple animation system using classes. It defines a `Shape` class that represents a shape object with a position and methods for setting the position, getting the position, and drawing the shape. Then, it defines an `Animation` class that holds a reference to a shape and performs an animation on it. The animation gradually moves the shape's position over a specified duration using an interpolation formula.

By executing this code, you will see the animation starting, the shape being drawn at different positions, and finally, an animation completion message. Of course, the code can be further expanded to add more features and complexity.