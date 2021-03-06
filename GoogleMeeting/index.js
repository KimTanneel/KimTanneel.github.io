    function onClickType(){
    document.getElementById('input-link').className='wrap-span active';
    document.getElementById('link-meeting').className='link-meeting active';
    document.getElementById('wrap-join').style.opacity='1'
}
function onInputLink(){
    console.log('Onchange');
    const inputElement = document.getElementById('inputLinkId');
    console.log(inputElement);
    if(inputElement.value.length===0){
        document.getElementById('btnLinkId').className= ''
    }
    else{
        document.getElementById('btnLinkId').className= 'active'
    }
}
function onBlurInput(){
    const textLinkElement = document.getElementById('inputLinkId');
    document.getElementById('input-link').className= 'wrap-span';
    console.log({textLinkElement});
    if (textLinkElement.value.length===0){
        document.getElementById('wrap-join').style.opacity='0'
        document.getElementById('link-meeting').className='link-meeting';

    }
    
}
function getIndexCurrentSlide(){
    const divImageSlideElement = document.getElementsByClassName('img-slide');
    const arrDivSlides = [...divImageSlideElement];
    const currentSlide = arrDivSlides.findIndex(x => x.className.includes('active'))
    return currentSlide
}
function findElementSlide(index){
    return document.getElementsByClassName('img-slide')[index];
}

function setActivatDot(option){
    const dotElements = document.getElementsByClassName('dot')
    const dotElementarr = [...dotElements];
    const currentDot = dotElementarr.findIndex(x => x.className.includes('active'));
    dotElementarr[currentDot].className='dot';
    console.log({option});
    dotElementarr[currentDot+option].className='dot active'
}

function setActiveSlide(pevIndex,option){
    const index = pevIndex+option;
    const totalSlide = document.getElementsByClassName('img-slide').length;
    const divImageSlideElement = document.getElementsByClassName('img-slide');
    const arrDivSlides = [...divImageSlideElement];
    arrDivSlides.forEach(x => x.className='img-slide')
    const slideElemnt =findElementSlide(index).className='img-slide active';
    if(option===1){
        document.getElementById('before-slide').className='btn-page active';
    }
    if(option===-1){
        document.getElementById('after-slide').className='btn-page active';
    }
    if(index+1===totalSlide){
        document.getElementById('after-slide').className='btn-page';
    }
    if(index===0){
        document.getElementById('before-slide').className='btn-page';
    }
    
}
function onNextPageClick(){
    const totalSlide = document.getElementsByClassName('img-slide').length;
    const currentSlide = getIndexCurrentSlide();
    if(currentSlide+1<totalSlide){
        setActiveSlide(currentSlide,1)
        setActivatDot(1);

    }

}
function onBeforePageClick(){
    const totalSlide = document.getElementsByClassName('img-slide').length;
    const currentSlide = getIndexCurrentSlide();

    if(currentSlide>0){
        setActiveSlide(currentSlide,-1)
        setActivatDot(-1);
    }
}

function changePageMeeting(){
    // http://127.0.0.1:5501/GoogleMeeting/meeting.html
    window.location.href = "meeting.html";
}