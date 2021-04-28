// Create Drag Class
class Drag {
  dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
  }

  dragEnd() {
    this.className = 'fill';
  }

  dragOver(e) {
    e.preventDefault();
  }

  dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
  }

  dragLeave() {
    this.className = 'empty';
  }

  dragDrop() {
    this.className = 'empty';
    this.append(fill);
  }
}

// Get elements
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Initialize Drag Class
const drag = new Drag();

// Eventlistener
fill.addEventListener('dragstart', drag.dragStart);
fill.addEventListener('dragend', drag.dragEnd);

empties.forEach((empty) => {
  empty.addEventListener('dragover', drag.dragOver);
  empty.addEventListener('dragenter', drag.dragEnter);
  empty.addEventListener('dragleave', drag.dragLeave);
  empty.addEventListener('drop', drag.dragDrop);
});
