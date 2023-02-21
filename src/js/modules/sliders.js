const sliders = (sliders, dir, prev, next) =>{

    let slideIndex = 1,
        paused = false;

    const items = document.querySelectorAll(sliders);

    function showSlides(n){
        if(n > items.length){ //еслі чісло n больше чем кол-во слайдов, то показиваем первий слайд
            slideIndex = 1;
        }
        if(n < 1){ //еслі чісло n меньше чем кол-во слайдов, то показиваем последній слайд
            slideIndex = items.length;
        }
        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });
        items[slideIndex - 1].style.display = 'block'; //показивает первий слайд на страніце когда пользвательно только на нее зашел
    }
    showSlides(slideIndex); //первічная ініціальзація 

    function plusSlide(n){
        showSlides(slideIndex += n);
    }

    try{
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', ()=>{
            plusSlide(-1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');

        });
        nextBtn.addEventListener('click', ()=>{
            plusSlide(1);
            items[slideIndex - 1].classList.add('slideInRight');
            items[slideIndex - 1].classList.remove('slideInLeft');
        });
    }catch(e){

    }

    function activateAnimation(){
        if (dir === 'vertical'){
            paused = setInterval(function(){
                plusSlide(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        }else{
            paused = setInterval(function(){
                plusSlide(1);
                items[slideIndex - 1].classList.add('slideInRight');
                items[slideIndex - 1].classList.remove('slideInLeft');
            }, 3000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', ()=>{
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', ()=>{
        activateAnimation();
    });

    
};

export default sliders;