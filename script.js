const images = document.images,
itemsList = document.querySelectorAll('li'),
list = document.getElementById('list');

let arr_pict = [["./picture/blue_lake.jpg", 'first'],
["./picture/house.jpg", 'second'],
["./picture/lake_and_mountins.jpg", 'third'],
["./picture/mrachniy_zakat.jpg", 'forth'],
["./picture/sia.jpg", 'fivth'],
["./picture/zakat.jpg", 'sixth']
],
str,
pos = [];

function showChoosePicture(e){
    if (e.target !== list){
        for (key of images){
            key.classList.remove('active');
        }
images[e.target.id].classList.add('active');
itemsList.forEach(element => element.classList.remove('active_list'));
e.target.classList.add('active_list');
    }
if (Number.parseInt(e.target.id) !== 0){
  pos = arr_pict[0];
  arr_pict[0] = arr_pict[Number.parseInt(e.target.id)];
  arr_pict[Number.parseInt(e.target.id)] = pos;
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



list.addEventListener('click', showChoosePicture);
document.getElementById('delete').addEventListener('mousedown', deleteAll);
document.getElementById('title').addEventListener('mousedown', showAll);
document.getElementById('buttons').addEventListener('mousedown', ()=>{newWindow(1300, 500)});
//document.getElementById('submit').addEventListener('click', newWord);
