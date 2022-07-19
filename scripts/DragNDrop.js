import { checkGeneration } from "./index.js";
let elem = null;

/*
function generateAreas() {
  const area = new Area();
  return area.createAreaElement();
}

generateAreas();

const generationZero = document.getElementById(`0`);
const generationOne = document.getElementById(`1`);
for (let i = 0; i < 10; i++) { // выведет 0, затем 1, затем 2
  generationZero.append(generateAreas());
  generationOne.append(generateAreas());
}
*/

document.addEventListener('dragstart', function(evt) {
    //console.log('Start');
    //console.log(evt.target.closest('.card'));
    elem = evt.target.closest('.card');
});

document.addEventListener('drop', function(evt) {
  //console.log('Drop');
  //console.log(evt.target.closest('.area'));
  const area = evt.target.closest('.area');
  area.appendChild(elem);
  checkGeneration();
});
