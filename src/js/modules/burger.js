const burger = (burgerSelector, menuSelector)=>{
    const burgerElement = document.querySelector(burgerSelector),
          menuElement = document.querySelector(menuSelector);


    menuElement.style.display = 'none';

    burgerElement.addEventListener('click', ()=>{
        if(menuElement.style.display == 'none' && window.screen.availWidth <= 992){
            menuElement.style.display = 'block'
        }else{
            menuElement.style.display = 'none'
        }
    });
    

    window.addEventListener('resize', ()=>{
        if(window.screen.availWidth > 992){
            menuElement.style.display ='none';
        }
    });

}

export default burger;