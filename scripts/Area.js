export class Area {
  constructor()
  {
  };

  //Метод получения шаблона карточки
  _getTemplate() {
    return document.querySelector('#areaTemplate').content.querySelector('.area').cloneNode(true);
  };

  _setEventListeners() {
    this._areaElement.addEventListener('dragenter', function() {
      //console.log('Enter');
    });

    this._areaElement.addEventListener('dragleave', function() {
      //console.log('Leave');
    });

    this._areaElement.addEventListener('dragover', function(event) {
      event.preventDefault();
      //console.log('Over');
    });

    this._areaElement.addEventListener('drop', function(event) {
      //console.log('Drop');
      //this.appendChild(Elem);
    });

  };

  //Публичный метод создания элемента карточки
  createAreaElement() {
    this._areaElement = this._getTemplate();
    this._setEventListeners();
    //console.log(this._cardElement)
    return this._areaElement;
  };




}
