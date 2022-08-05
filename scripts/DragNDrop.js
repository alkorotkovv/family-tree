import { checkGeneration, buffer, header } from "./index.js";
const content = document.querySelector('.content');

let elem = null;
let areaAppend = null;
let areaStart = null;
let coord;

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}





document.addEventListener('dragstart', function(evt) {
    //console.log('Start');
    //console.log(evt.target.closest('.card'));
    const area = evt.target.closest('.area');
    /*
    if (area != null)
    area.style.boxShadow = "0px 0px 8px 4px rgba(0, 0, 0, 0.3) inset";
    */
    elem = evt.target.closest('.card');
});

document.addEventListener('drop', function(evt) {
  //console.log('Drop');
  //console.log(evt.target.closest('.area'));
  const area = evt.target.closest('.area');
  area.appendChild(elem);
  //area.style.boxShadow = "none";
  checkGeneration();
});



document.addEventListener('touchmove', function(evt) {
  //evt.preventDefault();
  console.log('Start');
  console.log("bufferY = " + getCoords(buffer).top);
  elem = evt.target.closest('.card');
  //console.log(elem);
  const areas = document.querySelectorAll('.area');
  //console.log(areas);
  const areaa = evt.target.closest('.area');

  let touch = evt.targetTouches[0];
  console.log(touch);
  //console.log(content.offsetTop);
  //console.log(elem.style.top);

  //console.log(Array.from(elem.parentNode.classList).some(item => item == "buffer"));
  if (Array.from(elem.parentNode.classList).some(item => item === "buffer"))
    {
      elem.style.top = `${touch.pageY - getCoords(buffer).top - (elem.offsetHeight / 2)}px`;
      elem.style.left = `${touch.pageX - getCoords(buffer).left - (elem.offsetWidth / 2)}px`;
    }
  else if (Array.from(elem.parentNode.classList).some(item => item === "area"))
    {
      console.log("coordY = " + coord)
      elem.style.top = `${touch.pageY - 99 - (elem.offsetHeight / 2)}px`;
      elem.style.left = `${touch.pageX - (elem.offsetWidth / 2)}px`;
    }



  //elem.style.top = `${touch.pageY}px`;
  //elem.style.left = `${touch.pageX}px`;

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
        areaAppend = area;
      }
    }
  );

  //const area = evt.target.closest('.area');
  //if (areaAppend != null)
  //areaAppend.style.boxShadow = "0px 0px 8px 4px rgba(0, 0, 0, 0.3) inset";

});

document.addEventListener('touchend', function(evt) {
  console.log('Dropв');
  if (areaAppend !== null)
    {
      areaAppend.appendChild(elem);
      elem.style.top = "";
      elem.style.left = "";
  //elem.style.top = `${areaAppend.offsetTop}px`;
  //elem.style.left = `${areaAppend.offsetLeft}px`;
  //areaAppend.style.boxShadow = "none";
      checkGeneration();
    }
  else
    {
      buffer.appendChild(elem);
      elem.style.top = "";
      elem.style.left = "";
    }
  //const area = evt.target.closest('.area');

});

