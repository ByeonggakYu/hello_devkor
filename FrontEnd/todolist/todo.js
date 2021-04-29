
var more_button = document.getElementById('more_button');

var fill = document.querySelector('.fill');

var empties = document.querySelectorAll('.empty');
var is_filled = new Array(16);


more_button.addEventListener('click', clickMoreButton);

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

function display_Object(empty)
{
    empty.style.visibility="visible";
}