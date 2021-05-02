
var more_button = document.getElementById('more_button');
var less_button = document.getElementById('less_button');
var dragged;

const fill = document.querySelectorAll('[class~="fill"]');

/// color change
//날짜에 따라 스팩트럼으로 색깔 변화하는거 rgba 
///(https://ofcourse.kr/js-course/style-%EC%86%8D%EC%84%B1)

let R;
let G;
let B;

function setColor() {
    const date = new Date();
    const hours = date.getHours();
    let setter;
    
    if (8 <= hours && hours < 16)
    {
        R = 255;
        G = 150;
        B = 150;
        setter = "red";
    }
    else if (16 <= hours && hours < 24)
    {
        R = 150;
        G = 255;
        B = 150;
        setter = "green";
    }
    else
    {
        R = 150;
        G = 150;
        B = 255;
        setter = "blue";
    }
    console.log(hours);
    console.log(setter);
    for (let i = 0; i < fill.length; i++)
    {
        fill[i].style.backgroundColor= 'rgb(' + R + ',' + G + ',' + B + ')';
        if (setter === "red")
        {
            G -= 10;
            B -= 10;
        }
        else if (setter === "green")
        {
            R -= 10;
            B -= 10;
        }
        else
        {
            R -= 10;
            G -= 10;
        }
    }
}

setColor();

const less_box = document.querySelector('.less_box');
const more_box = document.querySelector('.more_box');

var empties = document.querySelectorAll('.empty');
var is_filled = new Array(16);

////////////////////////////////////////////////////////////////////////////
// click More & Less Buttons;

more_button.addEventListener('click', clickMoreButton);
less_button.addEventListener('click', clickLessButton);

function clickMoreButton()
{
    for (var empty of empties)
    {
        if(!is_filled[empty.id])
        {
            display_Object(empty);
            is_filled[empty.id] = 1;
            break;
        }
    }
}
function clickLessButton()
{
    for (var empty of empties)
    {
        if (is_filled[empty.id])
        {
            var temp = empty;
        }
    }
    if (empty.id == 15)
    {
        undisplay_Object(temp);
        is_filled[temp.id] = 0;
    }
}
function display_Object(empty)
{
    empty.style.visibility="visible";
}
function undisplay_Object(empty)
{
    empty.style.visibility="hidden";
}
///////////////////////////////////////////////////////////////////////////////////

//drag and drop

for (let i = 0; i < fill.length; i++)
{
    fill[i].addEventListener('dragstart',dragStart);
    fill[i].addEventListener('dragend', dragEnd);
}

var cname;

function dragStart(event) {
    cname = this.className;
    dragged = event.target;
    console.log(dragged);
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
    this.className = cname;
}

//////////////less box///////////////////////////////////

less_box.addEventListener('dragover', LdragOver);
less_box.addEventListener('dragenter', LdragEnter);
less_box.addEventListener('dragleave', LdragLeave);
less_box.addEventListener('drop', LdragDrop);

function LdragOver(e) {
    e.preventDefault();    
}

function LdragEnter(e) {
    e.preventDefault();
    this.className += ' Lhovered';
}

function LdragLeave() {
    this.className = 'less_box';
}

function LdragDrop() {
    this.className = 'less_box';
    const ance = dragged.parentNode;
    const id = ance.id;
    is_filled[id] = 0;
    ance.style.visibility="hidden"; 
}

//////////////more box///////////////////////////////////
more_box.addEventListener('dragover', MdragOver);
more_box.addEventListener('dragenter', MdragEnter);
more_box.addEventListener('dragleave', MdragLeave);
more_box.addEventListener('drop', MdragDrop);

function MdragOver(e) {
    e.preventDefault();
}

function MdragEnter(e) {
    e.preventDefault();
    this.className += ' Mhovered';
}

function MdragLeave() {
    this.className = 'more_box';
}

function MdragDrop() {
    this.className = 'more_box';
    clickMoreButton()
}
