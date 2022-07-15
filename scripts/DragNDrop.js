const zone = document.querySelector('.content');
const card = document.querySelector('#dragcard');

zone.ondragover = allowDrop;

function allowDrop(evt) {
  evt.preventDefault();
}

card.ondragstart = drag;

function drag(evt) {
  evt.dataTransfer.setData('id', evt.target.id);
}

zone.ondrop = drop;

function drop(evt) {
  let itemId = evt.dataTransfer.getData('id');
  console.log(itemId);
  evt.target.append(document.getElementById(itemId))
}
