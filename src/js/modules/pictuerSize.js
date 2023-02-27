const pictureSize = (selectorImg) => {
    const block = document.querySelectorAll(selectorImg);


    function showImg(block){
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png'; //обрізаємо з назви 4 останні букви та добавляємо інші букви з назви картинок
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg(block){
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png'; //обрізаємо з назви 6 останні букви та добавляємо інші букви з назви картинок
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }
    
    block.forEach(block => {
        block.addEventListener('mouseover', ()=> {
            showImg(block);
        });
        block.addEventListener('mouseout', ()=> {
            hideImg(block);
        });
    })
}

export default pictureSize;