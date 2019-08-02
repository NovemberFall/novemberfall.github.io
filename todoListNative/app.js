/* The second way, for example:
const secondWay = document.querySelector('.add');
*/

const addForm = document.getElementsByClassName('add');
const list = document.getElementsByClassName('todos')[0];
const search = document.getElementById('search');
//const search = document.querySelector('.search input');

const generateTmeplate = (todo) =>{
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
}


addForm[0].addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addForm[0].add.value.trim();
    
    if(todo.length){
        generateTmeplate(todo);
        addForm[0].reset();
    } 
});

//delete todos
list.addEventListener('click', e=> {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(list.children).filter((todo) => { // .filter()  return a array
        return !todo.textContent.toLowerCase().includes(term);
    }).forEach((todo) => {
        return todo.classList.add('filtered');
    });

    Array.from(list.children).filter((todo) => { // .filter()  return a array
        return todo.textContent.toLowerCase().includes(term);
    }).forEach((todo) => {
        return todo.classList.remove('filtered');
    });
};

//keyup event
search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});





