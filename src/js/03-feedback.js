import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
var data = {};
loadInput()
form.addEventListener("input", throttle(saveInput, 500))
form.addEventListener("submit", onSubmit)


function saveInput(evt){
    data = JSON.parse(localStorage.getItem('feedback-form-state'))|| {}
    data[evt.target.name] = evt.target.value;
   localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmit(evt){
    evt.preventDefault()
    if (!evt.target.email.value || !evt.target.message.value) {
        alert('Please, enter all data');
        return;
    }
    
    console.dir(data);
    evt.target.reset();
    localStorage.removeItem('feedback-form-state')
}

function loadInput() {
    try {
        let formLoad = JSON.parse(localStorage.getItem('feedback-form-state'));
        if (!formLoad) {
            return
        }

        data = formLoad;
        form.email.value = data.email || "";
        form.message.value = data.message || "";
    }

    catch(error) {
        console.error('error');
    }
}
