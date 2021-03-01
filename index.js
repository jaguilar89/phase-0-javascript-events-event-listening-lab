function addingEventListener() {
    const input = document.getElementById('input');
    const div = document.querySelectorAll('div')[5];
    input.addEventListener('click', clickAlert);
    div.addEventListener('click', clickAlert);
    
};

addingEventListener();

function clickAlert() {
    alert('I was clicked!');
};