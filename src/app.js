// Función para generar excusas
window.onload = function () {
  generarExcusa();
};

function generarExcusa() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let rnd1 = Math.floor(Math.random() * who.length);
  let rnd2 = Math.floor(Math.random() * action.length);
  let rnd3 = Math.floor(Math.random() * what.length);
  let rnd4 = Math.floor(Math.random() * when.length);

  // Genera la excusa combinando las partes
  let excuse = `${who[rnd1]} ${action[rnd2]} ${what[rnd3]} ${when[rnd4]}`;

  // Muestra la excusa en el elemento con id "excuse"
  document.querySelector("#excuse").innerHTML = excuse;
}
