document.addEventListener('DOMContentLoaded', () => {
  const screen = document.getElementById('screen');
  const buttons = document.querySelectorAll('[data-key]');

  let pantalla = '';

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const valorboton = button.getAttribute('data-key');

          if (valorboton === 'clear') {
               pantalla = '';
              screen.textContent = '';
          } else if (valorboton === 'equal') {
              try {
                  const resultado = eval(pantalla);
                  screen.textContent = resultado;
                   pantalla = resultado;
              } catch (error) {
                  alert('Error en la operación');
              }
          } else {
              pantalla = pantalla+valorboton;
              screen.textContent = pantalla;
          }
      });
  });
});
