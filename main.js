let items = ['html'];

function showToDO() {
    let html = '';
    for(let item of items){
        html += `
            <ul>
                <li>${item}</li>
            </ul>
        `
    }
    document.querySelector('.to-do-list').innerHTML = html;
}

function handelEvents() {
    document.querySelector('body').addEventListener('click', function(event) {
    });
}

let addToDoForm = document.querySelector('#add-to-do-form');
    addToDoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let item = document.querySelector('#add-to-do').value;
        items.push(item);
        let toDoList = document.querySelector('ul');
        toDoList.innerHTML = '';
        showToDO();
        addToDoForm.reset();
    });
showToDO();