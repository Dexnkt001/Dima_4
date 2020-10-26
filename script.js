const images = document.images,
itemsList = document.querySelectorAll('li'),
list = document.getElementById('list');

function showChoosePicture(e){
    if (e.target !== list){
        for (key of images){
            key.classList.remove('active')
        }
images[e.target.id-1].classList.add('active')
    }
  
}

function deleteAll(){
    for (key of images){
        key.classList.remove('active')
    }
}

function showAll(){
    for (key of images){
        key.classList.toggle('active')
    }
}

newWindow = function(size) {
   const newWin = window.open("./second.html", "hello", "width=600,height=400");
    let div = newWin.document.createElement('div');
    document.body.append(div);
for (key of images){
    newWin.document.write(`<img ${key.attributes[0]} ${key.attributes[1]} width = ${size}px height = auto`);
}   
  }

  function newWord(){
    itemsList[1].innerHTML = document.getElementById('input').value;
   images[1].src = './picture/sneg.svg';
   images[1].alt = 'sneg';
}



list.addEventListener('click', showChoosePicture);
document.getElementById('delete').addEventListener('mousedown', deleteAll);
document.getElementById('title').addEventListener('mousedown', showAll);
//document.getElementById('buttons').addEventListener('mousedown', newWindow);
document.getElementById('submit').addEventListener('click', newWord)