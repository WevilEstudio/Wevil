const { animate, scroll, inView } = Motion

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