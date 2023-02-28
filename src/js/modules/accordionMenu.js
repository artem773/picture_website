const accordionMenu = (triggersSelector) => {
    const buttons = document.querySelectorAll(triggersSelector);
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

}
/* 
const accordionMenu = (triggersSelector, items) => {
    const buttons = document.querySelectorAll(triggersSelector),
          blocks = document.querySelectorAll(items);
    
    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    buttons.forEach(btn => {
        btn.addEventListener('click', function(){
            if(!this.classList.contains('active')){
                buttons.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                })
            }
            this.classList.add('active', 'active-style');
        });
    });
} */

export default accordionMenu;