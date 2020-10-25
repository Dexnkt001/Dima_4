const images = document.images,
itemsList = document.querySelectorAll('li'),
list = document.querySelector('ul');

function showChoosePicture(e){
    if (e.target !== list){
images[e.target.id-1].classList.add('active')
    }
    let temp;
    temp = images[e.target.id-1];
    images[e.target.id-1] = images[0];
    images[0] = temp;
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



list.addEventListener('click', showChoosePicture);
document.querySelector('.delete').addEventListener('mousedown', deleteAll);
document.querySelector('h1').addEventListener('mousedown', showAll);
document.querySelector('.buttons').addEventListener('mousedown', newWindow);