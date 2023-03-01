const drop = ()=>{
    //drag
    //dragEnd
    //dragenter - обєкт над droparea
    //dragexit
    //dragleave - обєкт за межами droparea
    //dragover - обєкт зависає над droparea
    //dragstart
    //drop - oбєкт відправлен в droparea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter','dragleave','dragover','drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(event){
        event.preventDefault();
        event.stopPropagation();
    }

    function highlight(item){
        item.closest('.file_upload').style.border = '5px solid pink';
        item.closest('.file_upload').style.borderRadius = "30px";
        item.closest('.file_upload').backgroundColor = '0 , 0 , 0 , 0.7';
    }

    function unhighlight(item){
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.borderRadius = "none";
        item.closest('.file_upload').backgroundColor = 'rgba(178, 80, 188, 0.8)';
    }

    ['dragenter','dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave','drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e)=> {
            input.files = e.dataTransfer.files;
            let dots;
            const arr =  input.files[0].name.split('.');
            // 'asdasdasdasd.png' => ['asdasdasd', 'png']
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 5) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });



};

export default drop;