const calculator = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promoBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calculateFunction = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if(sizeBlock.value == '' || materialBlock.value == ''){
            resultBlock.textContent = 'Please choose size and material'
        }else if(promoBlock.value === 'IWANTPOPART'){
            resultBlock.textContent = `${Math.round(sum * 0.7)} грн`;
        }else{
            resultBlock.textContent = sum;
        }
    }

    sizeBlock.addEventListener('change', calculateFunction);
    materialBlock.addEventListener('cahnge', calculateFunction);
    optionsBlock.addEventListener('change', calculateFunction);
    promoBlock.addEventListener('input', calculateFunction);

}

export default calculator;