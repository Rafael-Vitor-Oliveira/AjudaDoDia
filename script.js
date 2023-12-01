const openModalPrint = document.querySelector('#openModalPrint');
const modalPrint = document.querySelector('.modalPrint');
const buttonClosePrint = document.querySelector('.buttonClosePrint');

const openModalCache = document.querySelector('#openModalCache');
const modalCache = document.querySelector('.modalCache');
const buttonCloseCache = document.querySelector('.buttonCloseCache');

const openModalAccessibility = document.querySelector('#openModalAccessibility');
const modalAccessibility = document.querySelector('.modalAccessibility');
const buttonCloseAccessibility = document.querySelector('.buttonCloseAccessibility');

const suggestionBox = document.querySelector('.suggestionBox');
const modalSuggestion = document.querySelector('.modalSuggestion');
const buttonCloseSuggestion = document.querySelector('.buttonCloseSuggestion');

const enlargeButton = document.querySelector('.enlargeButton');
const searchBox = document.querySelector('.searchBox');
const boxHelp = document.querySelectorAll('.boxTextHelp');
const textHelp = document.querySelector('.textHelp');

function search(){
    if(searchBox.value != ''){
        for (let boxes of boxHelp){
            let title = boxes.querySelector('.textHelp');

            title = title.textContent.toLowerCase();
            let filterText = searchBox.value.toLowerCase();
            if(!title.includes(filterText)){
               boxes.style.display = 'none';
            }
            else{
                boxes.style.display = 'block';
            }
        }
    }
    else{
        for(let boxes of boxHelp){
            boxes.style.display = 'block';
        }
    }
}

openModalPrint.onclick = function (){
    modalPrint.showModal();
}
buttonClosePrint.onclick = function (){
    modalPrint.close();
}

openModalCache.onclick = function (){
    modalCache.showModal();
}
buttonCloseCache.onclick = function(){
    modalCache.close();
}

openModalAccessibility.onclick = function (){
    modalAccessibility.showModal();
}
buttonCloseAccessibility.onclick = function (){
    modalAccessibility.close();
}

suggestionBox.onclick = function (){
    modalSuggestion.showModal();
}
buttonCloseSuggestion.onclick = function(){
    modalSuggestion.close()
}
function ampliar(){
    let buttonZoom = document.getElementById('info');
    buttonZoom.classList.toggle('infoZoom');

    if(buttonZoom.classList.contains('infoZoom')){
        let buttonZoomOut = document.querySelector('.enlargeButton');
        buttonZoomOut.setAttribute('src', './assets/diminuir.svg');
    }
    else{
        let buttonZoomIn = document.querySelector('.enlargeButton');
        buttonZoomIn.setAttribute('src', './assets/ampliar2.svg');
    }
}
searchBox.addEventListener('input', search);