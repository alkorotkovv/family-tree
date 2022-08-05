import { checkGeneration } from "./index.js";
const content = document.querySelector('.content');
let elem = null;
let areaAppend = null;
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
    const area = evt.target.closest('.area');
    if (area != null)
    area.style.boxShadow = "0px 0px 8px 4px rgba(0, 0, 0, 0.3) inset";
    elem = evt.target.closest('.card');
});

document.addEventListener('drop', function(evt) {
  //console.log('Drop');
  //console.log(evt.target.closest('.area'));
  const area = evt.target.closest('.area');
  area.appendChild(elem);
  area.style.boxShadow = "none";
  checkGeneration();
});

document.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
  console.log('Start');
  elem = evt.target.closest('.card');
  //console.log(elem);
  const areas = document.querySelectorAll('.area');
  //console.log(areas);


  let touch = evt.targetTouches[0];
  console.log(touch.pageY);
  console.log(content.offsetTop);
  console.log(elem.offsetWidth / 2);

  elem.style.top = `${touch.pageY-500}px`;
  elem.style.left = `${touch.pageX}px`;
  /*
  elem.style.top = `${touch.pageY - (content.offsetTop) - (elem.offsetWidth / 2)}px`;
  elem.style.left = `${touch.pageX - (content.offsetLeft) - (elem.offsetHeight / 2)}px`;
  */

  areas.forEach((area) => {
    if (
      elem.getBoundingClientRect().top + elem.offsetWidth / 2 < area.getBoundingClientRect().bottom &&
      elem.getBoundingClientRect().right - elem.offsetWidth / 2 > area.getBoundingClientRect().left &&
      elem.getBoundingClientRect().bottom - elem.offsetWidth / 2 > area.getBoundingClientRect().top &&
      elem.getBoundingClientRect().left + elem.offsetWidth / 2 < area.getBoundingClientRect().right
      ) {
        console.log('area');
        console.log(area);
        areaAppend = area;
      }
    }
  );

  const area = evt.target.closest('.area');
  if (area != null)
  area.style.boxShadow = "0px 0px 8px 4px rgba(0, 0, 0, 0.3) inset";

});
/*
document.addEventListener('touchend', function(evt) {
  console.log('Dropв');
  console.log(evt.targetTouches);
  const area = evt.target.closest('.area');
  area.appendChild(elem);
  area.style.boxShadow = "none";
  checkGeneration();
});
*/
