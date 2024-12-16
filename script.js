const slots = document.querySelectorAll('.slot');
let currentIndex = 0;
let interval;
let isSpinning = true;

function showNextSlot() {
  // Elimina la clase activa del slot actual
  slots[currentIndex].classList.remove('active');

  // Calcula el siguiente índice
  currentIndex = (currentIndex + 1) % slots.length;

  // Añade la clase activa al siguiente slot
  slots[currentIndex].classList.add('active');
}

// Inicia la animación de la ruleta con una velocidad rápida
function startAnimation() {
  interval = setInterval(showNextSlot, 100);
  isSpinning = true;
}

// Detiene la animación y selecciona un slot aleatorio
function stopAnimation() {
  if (isSpinning) {
    clearInterval(interval);
    // Escoge un índice aleatorio diferente al actual
    const previousIndex = currentIndex;
    while (currentIndex === previousIndex) {
      currentIndex = Math.floor(Math.random() * slots.length);
    }
    // Muestra el slot seleccionado
    slots.forEach(slot => slot.classList.remove('active'));
    slots[currentIndex].classList.add('active');
    isSpinning = false;
  } else {
    startAnimation();
  }
}

// Inicia la animación al cargar
startAnimation();

// Agrega un evento para detener/iniciar la ruleta al hacer clic
document.getElementById('ruleta').addEventListener('click', stopAnimation);
