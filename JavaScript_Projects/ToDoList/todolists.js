const todolist = [];
renderToDoList();
function renderToDoList(){
    let todolits = '' ;
    for ( let i = 0 ; i < todolist.length ; i++){
        const todoobj = todolist[i];
        const { name, duedate } = todoobj;
        const html =
         `<div>${name}</div><div>${duedate}</div><button class="dlt-btn js-dlt-btn" >Delete</button>`;
        todolits += html;
    }
    document.querySelector('.js-todo-lists').innerHTML = todolits;

    document.querySelectorAll('.js-dlt-btn').forEach( (deleteElement, index) =>{
        deleteElement.addEventListener('click', () => {
            removeToDo(index, 1);
        })
    })
}

//adding event lsitener
document.querySelector('.js-add-btn').addEventListener('click', () =>{
    gettodo();
})

function gettodo(){
    const inele = document.querySelector('.js-input-todo');
    const ele = inele.value;
    const indate = document.querySelector('.js-date-ele');
    const duedate = indate.value;
    todolist.push({name: ele, duedate: duedate});
    inele.value='';
    indate.value = '';
    renderToDoList();
}
function removeToDo(ele){
    todolist.splice(ele,1);
    renderToDoList();
}