import { postData } from "../services/requests";

const forms = () => {

    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name = "upload"]');

    // checkNumInputs('input[name = "user_phone"]');

    const message = {
        loading: 'Loading...',
        success: "Thank's, we will connected with you !",
        failure: 'Something wrong !',
        spinner: './assets/img/spinner.gif',
        ok: './assets/img/icons8-ok-48.png', 
        fail: './assets/img/fail.png'
    };

    const path = {
        desidner: './assets/server.php',
        question: './assets/question.php'
    };

    const clearInputs = () =>{
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => { 
            item.previousElementSibling.textContent = 'Файл не обраний';
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', ()=>{
            console.log(item.files[0]);
            let dots;
            const arr =  item.files[0].name.split('.');
            // 'asdasdasdasd.png' => ['asdasdasd', 'png']
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 5) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.spinner;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.desidner : api = path.question;
            console.log(api);




            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(()=>{
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                })
        });
    });
};

export default forms;