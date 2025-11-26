// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

const { animate, scroll, inView } = Motion

// Animación del hero - logo (Blur + Fade)
animate('.logo-hero', {
  opacity: [0, 1],
  filter: ['blur(10px)', 'blur(0px)'],
  rotate: [90, 90] // Mantiene la rotación del CSS
}, {
  duration: 1.2,
  delay: 0.2,
  easing: 'ease-out'
})

// Animación del hero - h1 (Blur + Fade)
animate('.box-hero h1', {
  opacity: [0, 1],
  filter: ['blur(10px)', 'blur(0px)']
}, {
  duration: 1.2,
  delay: 0.4,
  easing: 'ease-out'
})

// Animación del hero - h2 (Blur + Fade)
animate('.box-hero h2', {
  opacity: [0, 1],
  filter: ['blur(10px)', 'blur(0px)']
}, {
  duration: 1.2,
  delay: 0.6,
  easing: 'ease-out'
})

// Animación del botón de scroll
animate('.button-scroll i', { 
  y: [0, -15, 0],
}, {
  duration: 1.5,
  repeat: Infinity,
  easing: 'ease-in-out'
})

// Animación de las columnas al hacer scroll usando inView
const columns = document.querySelectorAll('[class*="col-"]')

columns.forEach((col, index) => {
  inView(col, () => {
    animate(col, {
      opacity: [0, 1],
      y: [50, 0]
    }, {
      duration: 0.8,
      delay: index * 0.1,
      easing: 'ease-out'
    })
  }, {
    amount: 0.3
  })
})