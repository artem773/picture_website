const checkTextInputs = (selector) =>{
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if(e.key.match(/[^a-z 0-9]/ig)){ //можно вводити тільки латінніцу і цифри
                e.preventDefault();
            }
        })
    });
}

export default checkTextInputs;