var more_button = document.getElementById("more_button");
var less_button = document.getElementById("less_button");
var change_button = document.getElementById("change_button");
var clear_button = document.getElementById("clear_button");
var dragged;
var color = -1;
const fill = document.querySelectorAll('[class~="fill"]');

/// color change
//날짜에 따라 스팩트럼으로 색깔 변화하는거 rgba
///(https://ofcourse.kr/js-course/style-%EC%86%8D%EC%84%B1)

let R;
let G;
let B;

function changeColor() {
    color++;
    if (color % 3 === 1) {
        R = 150;
        G = 150;
        B = 255;
        setter = "blue";
    }
    else if (color % 3 === 2) {
        R = 150;
        G = 255;
        B = 150;
        setter = "green";
    }
    else if (color % 3 === 0) {
        R = 255;
        G = 150;
        B = 150;
        setter = "red";
    }
    for (let i = 0; i < fill.length; i++) {
        fill[i].style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
        if (setter === "red") {
            G -= 10;
            B -= 10;
        } 
        else if (setter =="blue") 
        {
            R -= 10;
            G -= 10;
        }
        else
        {
            R -= 10;
            B -= 10;
        }
    }
}
changeColor();
change_button.addEventListener("click", changeColor);




const less_box = document.querySelector(".less_box");
const more_box = document.querySelector(".more_box");

var empties = document.querySelectorAll(".empty");
var is_filled = new Array(16);




////////////////////////////////////////////////////////////////////////////
// click More & Less Buttons;

more_button.addEventListener("click", clickMoreButton);
less_button.addEventListener("click", clickLessButton);

function clickMoreButton() {
    for (var empty of empties) {
        if (!is_filled[empty.id]) {
            display_Object(empty);
            is_filled[empty.id] = 1;
            break;
        }
    }
}
function clickLessButton() {
    for (var empty of empties) {
        if (is_filled[empty.id]) {
            var temp = empty;
        }
    }
    if (empty.id == 15) {
        undisplay_Object(temp);
        is_filled[temp.id] = 0;
    }
}
function display_Object(empty) {
    empty.style.visibility = "visible";
}
function undisplay_Object(empty) {
    const Object_id = empty.id;
    const Btn_Clear = document.querySelectorAll(".todo")[Object_id - 1];
    empty.style.visibility = "hidden";
    Btn_Clear.value = '';
    localStorage.removeItem('todo' + Object_id);
}
///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////clear button//////////////

//////////////clear button//////////////////

function clearAll()
{
    for (var k = 0; k <15; k++)
    {
        clickLessButton();
    } 
}

clear_button.addEventListener("click", clearAll);



//drag and drop

for (let i = 0; i < fill.length; i++) {
    fill[i].addEventListener("dragstart", dragStart);
    fill[i].addEventListener("dragend", dragEnd);
}

var cname;

function dragStart(event) {
    cname = this.className;
    dragged = event.target;
    console.log(dragged);
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
    this.className = cname;
}

//////////////less box///////////////////////////////////

less_box.addEventListener("dragover", LdragOver);
less_box.addEventListener("dragenter", LdragEnter);
less_box.addEventListener("dragleave", LdragLeave);
less_box.addEventListener("drop", LdragDrop);

function LdragOver(e) {
    e.preventDefault();
}

function LdragEnter(e) {
    e.preventDefault();
    this.className += " Lhovered";
}

function LdragLeave() {
    this.className = "less_box";
}

function LdragDrop() {
    this.className = "less_box";
    const ance = dragged.parentNode;
    const id = ance.id;
    const dragClear = document.querySelectorAll(".todo")[id - 1];
    is_filled[id] = 0;
    ance.style.visibility = "hidden";
    console.log(dragClear);
    dragClear.value = '';
    localStorage.removeItem('todo' + id);
}

//////////////more box///////////////////////////////////
more_box.addEventListener("dragover", MdragOver);
more_box.addEventListener("dragenter", MdragEnter);
more_box.addEventListener("dragleave", MdragLeave);
more_box.addEventListener("drop", MdragDrop);

function MdragOver(e) {
    e.preventDefault();
}

function MdragEnter(e) {
    e.preventDefault();
    this.className += " Mhovered";
}

function MdragLeave() {
    this.className = "more_box";
}

function MdragDrop() {
    this.className = "more_box";
    clickMoreButton();
}

////////////////////////////////todos/////////////////////////////
/*
const boxContainer = document.querySelector(".content");
boxContainer.childNodes.forEach((v) => setBoxEventListener(v));
console.log(boxContainer.childNodes);
function setBoxEventListener(v, i) {
    //v는 box컨테이너 안에있는 각각의 div요소들임
    //v에 이벤트 리스너 등록

    v.addEventListener("click", (e) => {
        // v.style.backgroundColor = "red";
        form.addEventListener("submit", (e) => onSubmit(e, v.id));
    });
    console.log(v);
}
const form = document.querySelector(".form");
const todo = document.querySelector(".todo");
const date = document.querySelector(".date");
function getInput(e, id) {
    console.log(e.target.value);
}
function getDate(e, id) {
    console.log(e.target.value);
}
function onSubmit(e, id) {
    e.preventDefault();
    const todo = e.target[0].value;
    const date = e.target[1].value;
    console.log(todo, date);
    console.log(e);
    const obj = { todo: todo, date: date };
    window.localStorage.setItem(`todo${id}`, JSON.stringify(obj));
    e.target[0].value = "";
    e.target[1].value = "";
} */

///////////////////////////////////////////////////////////////save in localstorage && 새로고침시 정보불러오기

function submitOnEnter(event) {
    if (event.which === 13) {
        const postItId = event.target.id;
        localStorage.setItem('todo' + postItId, JSON.stringify(event.target.value));
        //event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
        event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
    }
}

var todos = document.querySelectorAll(".todo")



todos.forEach((todo, i) => {
    console.log(todo.value)
    todo.addEventListener("input", (e) => {
        const value=e.target.value;
        localStorage.setItem('todo' + todo.id, JSON.stringify(value));
        if (!value)
        {
            localStorage.removeItem('todo' + todo.id);
        }
    })
    
})
// autosave();
// setInterval(autosave, 300);


for (var todo of todos) {
    todo.addEventListener("keypress", submitOnEnter);
}

for (let id = 1; id < 16; id++) {
    var getTodo = localStorage.getItem("todo" + id);
    var getTodo2 = JSON.parse(localStorage.getItem("todo" + id));
    if (getTodo) {
        var empty = empties[id - 1];
        display_Object(empty);
        is_filled[empty.id] = 1;
        todos[id - 1].value = getTodo2;
    }
}