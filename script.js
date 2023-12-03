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
const buttonSendSuggestion = document.querySelector('.buttonSendSuggestion');

const enlargeButton = document.querySelector('.enlargeButton');
const searchBox = document.querySelector('.searchBox');
const boxHelp = document.querySelectorAll('.boxTextHelp');
const textHelp = document.querySelector('.textHelp');

const suggestionTxt = document.querySelector('.suggestionTxt');

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
buttonCloseSuggestion.onclick = function (){
    modalSuggestion.close();
    pictureImage.innerHTML = '';
    pictureImage.innerHTML = pictureImageTxt;
    suggestionTxt.value = '';
}
buttonSendSuggestion.onclick = function (){

    if(suggestionTxt.value == ''){

        alert('Você deve descrever sua sugestão para poder enviar');
    }else{
        pictureImage.innerHTML = '';
        pictureImage.innerHTML = pictureImageTxt;
        suggestionTxt.value = '';
    
        alert('Sua sugestão foi enviada');
    }
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

const inputFile = document.querySelector('#pictureInputID');
const pictureImage = document.querySelector('.pictureImage');
const pictureImageTxt = 'Selecione uma imagem de exemplo';
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            const addImg = document.createElement('img');
            addImg.src = readerTarget.result;
            addImg.classList.add('pictureImg');
            addImg.setAttribute('id', 'imgInsert');
            pictureImage.innerHTML = '';
            pictureImage.appendChild(addImg);
        });
        reader.readAsDataURL(file);
    };
});
const buttonDelete = document.querySelector('.deletarImagem');
const imageInsert = document.querySelector('#imgInsert');

buttonDelete.onclick = function(){
    pictureImage.innerHTML = '';
    pictureImage.innerHTML = pictureImageTxt;
}