/*
export const treeData =
{
  name: 'Коротков Александр Андреевич',
  id: 1,
  image: './images/photo.png',
  place: 'Нижний Новгород',
  birthday: '12.03.1995',
  about: 'инженер',
  generation: 0,
  parents: [{
    name: 'Коротков Андрей Вячеславович',
    image: './images/photo.png',
    place: 'Княгинино',
    birthday: '04.07.1964',
    about: 'водитель',

    parents: [{
      name: 'Коротков Вячеслав Тимофеевич',
      image: './images/photo.png',
      place: 'Княгинино',
      birthday: '?',
      about: '?'
    },
    {
      name: 'Короткова Надежда Андреевна',
      image: './images/photo.png',
      place: 'Арзамас',
      birthday: '01.11.1938',
      about: '?'
    }]
  },
  {
    name: 'Короткова Елена Эдуардовна',
    image: './images/photo.png',
    place: 'Арзамас',
    birthday: '04.09.1968',
    about: 'пенсионный фонд',

    parents: [{
      name: 'Шмыров Эдуард',
      image: './images/photo.png',
      place: '?',
      birthday: '?',
      about: '?'
    },
    {
      name: 'Шмырова Валентина Александровна',
      image: './images/photo.png',
      place: 'Слепые',
      birthday: '?',
      about: 'врач'
    }]
  }]
};

//treeData.parents.forEach((parent) => console.log(parent));


const parents = treeData.parents;
parents.forEach((parent) =>
  {
    console.log(parent);
    const grandparents = parent.parents;
    console.log(grandparents);
    grandparents.forEach((grandparent) =>
      {
        console.log(grandparent);

      }




    )
  }
);
*/


export const treeData = [
  {
    name: 'Коротков Александр Андреевич',
    id: 1,
    image: './images/photo.png',
    place: 'Нижний Новгород',
    birthday: '12.03.1995',
    about: 'инженер',
    parents: [2,3]
  },
  {
    name: 'Коротков Андрей Вячеславович',
    id: 2,
    image: './images/photo.png',
    place: 'Княгинино',
    birthday: '04.07.1964',
    about: 'водитель',
    parents: [4,5]
  },
  {
    name: 'Короткова Елена Эдуардовна',
    id: 3,
    image: './images/photo.png',
    place: 'Арзамас',
    birthday: '04.09.1968',
    about: 'пенсионный фонд',
    parents: [6,7]
  },
  {
    name: 'Коротков Вячеслав Тимофеевич',
    id: 4,
    image: './images/photo.png',
    place: 'Княгинино',
    birthday: '?',
    about: '?'
  },
  {
    name: 'Короткова Надежда Андреевна',
    id: 5,
    image: './images/photo.png',
    place: 'Арзамас',
    birthday: '01.11.1938',
    about: '?'
  },
  {
    name: 'Шмыров Эдуард',
    id: 6,
    image: './images/photo.png',
    place: '?',
    birthday: '?',
    about: '?'
  },
  {
    name: 'Шмырова Валентина Александровна',
    id: 7,
    image: './images/photo.png',
    place: 'Слепые',
    birthday: '?',
    about: 'врач'
  }
];


const me = treeData.find((person) => {
  return person.id == 1;
});
//console.log(me);

me.generation = 0;

const parentIDs = me.parents;
//console.log(parentIDs);



function returnGen(arr1, arr2) {
  return arr1.filter(function(object) {
    return arr2.indexOf(object.id) !== -1;
  });
}

//Возвращает массив объектов - родителей из 1ого поколения (мама, папа)
const generation1 = returnGen(treeData, parentIDs);
//console.log(generation1)


generation1.forEach(element => {
  console.log(element.parents);

});


const grandparentIDs = generation1.parents;
console.log(grandparentIDs);
//const generation2 = returnGen(treeData, grandparentIDs);
