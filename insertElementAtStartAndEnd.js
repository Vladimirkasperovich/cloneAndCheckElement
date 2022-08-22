//Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
/*let elem = document.querySelector('#elem');

let li = document.createElement('li');
li.innerHTML = 'start';

let li1 = document.createElement('li');
li1.innerHTML = 'finish';

elem.prepend(li);
elem.append(li1);*/ 



//Дан элемент #elem:Вставьте перед этим элементом элемент с текстом 'new'.
/*let parent = document.querySelector('#parent')
let elem = document.querySelector('#elem');

let li = document.createElement('li');
li.innerHTML = 'new';

parent.insertBefore(li, elem);*/




//Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.
/*let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');
let li = document.createElement('li');
li.id = 'new';
li.innerHTML = 'new';
parent.insertBefore(li, elem);

li.addEventListener('click', function(){
    li.innerHTML += '!'
});*/ 



//Дан элемент:Вставьте перед ним абзац с текстом '!!!'
/*let p = document.createElement('p');
p.innerHTML = '!!!';

let elem = document.querySelector('#elem');
elem.insertAdjacentElement('beforebegin', p);*/




//Дан элемент:Вставьте после него абзац с текстом '!!!'
/*let p = document.createElement('p');
p.innerHTML = '!!!';

let elem = document.querySelector('#elem');
elem.insertAdjacentElement('afterEnd', p);*/ 



//Дан элемент:Вставьте ему в начало абзац с текстом '!!!'.
/*let p = document.createElement('p');
p.innerHTML = '!!!';

let elem = document.querySelector('#elem');
elem.insertAdjacentElement('afterbegin', p);*/ 



//Дан элемент:Вставьте ему в конец абзац с текстом '!!!'.
/*let p = document.createElement('p');
p.innerHTML = '!!!';

let elem = document.querySelector('#elem');
elem.insertAdjacentElement('beforeend', p);*/ 



//Дан элемент:Дан элемент. Вставьте перед ним следующий тег:
/*let elem = document.querySelector('#elem');
elem.insertAdjacentHTML('beforebegin', '<div class="www"><p>text</p><p>text</p><input></div>');*/



//Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
/*let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');


btn.addEventListener('click', function(){
    let foo = elem.cloneNode(true);
     console.log(foo);
})*/ 



//Дан элемент:Проверьте, является ли этот элемент элементом с классом www
/*let elem = document.querySelector('#elem');
console.log(elem.matches('div.www')) //true*/ 



//Дан элемент. Проверьте, является ли этот элемент абзацем.
/*let elem = document.querySelector('#elem');
console.log(elem.matches('p')) *///true, то есть можно проверить класс элемента и сам элемент на его тэг 



//Даны две переменные elem1 и elem2, содержащие два элемента:Проверьте, является ли элемент из elem2 потомком элемента из elem1.
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

console.log(elem1.contains(elem2))