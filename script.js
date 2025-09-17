// ===========================
// Part 1: Functions & Scope
// ===========================

// Function to change the color of the box dynamically
function changeBoxColor(color) {
    const box = document.getElementById('box');
    box.style.backgroundColor = color;
    return `Box color changed to ${color}`; // demonstrates return value
  }
  
  // Function to toggle a CSS class on an element
  function toggleAnimation(elementId, className) {
    const el = document.getElementById(elementId);
    el.classList.toggle(className);
  }
  
  // Demo of global vs local scope
  let globalVar = "I'm a global variable";
  
  function demoScope() {
    let localVar = "I'm a local variable";
    console.log(globalVar); // accessible
    console.log(localVar);  // accessible
  }
  
  // ===========================
  // Part 2: Event Listeners & Interactions
  // ===========================
  
  // Animate box on single click
  document.getElementById('animateBtn').addEventListener('click', () => {
    toggleAnimation('box', 'animate');
  });
  
  // Change box color on button click
  document.getElementById('colorBtn').addEventListener('click', () => {
    const colors = ['green', 'purple', 'orange', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(changeBoxColor(randomColor));
  });
  
  // Toggle bounce animation on button click
  document.getElementById('bounceBtn').addEventListener('click', () => {
    toggleAnimation('box', 'bounce');
  });
  
  // Optional: hover effect to temporarily change color
  document.getElementById('animateBtn').addEventListener('mouseover', () => {
    changeBoxColor('yellow');
  });
  
  document.getElementById('animateBtn').addEventListener('mouseout', () => {
    changeBoxColor('red');
  });
  