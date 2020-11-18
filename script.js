const images = document.images,
itemsList = document.querySelectorAll('li'),
list = document.getElementById('list');

let arr_pict = [["./picture/blue_lake.jpg", 'first', "Голубое озеро"],
["./picture/house.jpg", 'second', "Пруд"],
["./picture/lake_and_mountins.jpg", 'third', "Красиовое озеро с горами"],
["./picture/mrachniy_zakat.jpg", 'forth', "Закат в мрачное время"],
["./picture/sia.jpg", 'fivth', "Океан"],
["./picture/zakat.jpg", 'sixth',"Красивый закат"]
],
str,
pos = [],
index;

function showChoosePicture(e){
    if (e.target !== list){
        for (key of images){
            key.classList.remove('active');
        }
images[e.target.id].classList.add('active');
itemsList.forEach(element => element.classList.remove('active_list'));
e.target.classList.add('active_list');
arr_pict.forEach((element, index) => {
  if(e.target.innerHTML === element[2] && index !== 0){
pos = element;
arr_pict[index]=arr_pict[0];
arr_pict[0]= pos;
  }
})
    }
}

function deleteAll(){
    for (key of images){
        key.classList.remove('active');
    }
}

function showAll(){
    for (key of images){
        key.classList.toggle('active');
        console.log(key);
    }
}

const newStr = () =>{
  str = '';
 arr_pict.forEach(element => {
   str = str + `<img src='${element[0]}' alt='${element[1]}' width = '600px' height = '400px'/>`
 })
}


let newWindow = (width, height) => {
newStr();
let newWin = window.open('about:blank', 'Picture', `width = ${width} height = ${height}`);
newWin.document.write(`

<div style = "display : flex">
${str}
</div>
`);
}

function newWord(){
  itemsList[1].innerHTML = document.getElementById('input').value;
  itemsList[1].id = '1';
 images[1].src = './picture/sneg.svg';
 images[1].alt = 'sneg';
 images[1].classList.add('active');
itemsList.forEach(element => element.classList.remove('active_list'));
document.querySelectorAll('li')[1].classList.add('active_list');
 pos = arr_pict[0];
 arr_pict[0] = ['./picture/sneg.svg', 'sneg',  itemsList[1].innerHTML];
 arr_pict[1]=pos;
 console.log(arr_pict);
}




list.addEventListener('click', showChoosePicture);
document.getElementById('delete').addEventListener('mousedown', deleteAll);
document.getElementById('title').addEventListener('mousedown', showAll);
document.getElementById('buttons').addEventListener('mousedown', ()=>{newWindow(1300, 500)});
document.getElementById('submit').addEventListener('click', newWord);
