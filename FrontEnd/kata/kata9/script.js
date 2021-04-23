var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');


function clickButton() {
    var temp = document.createElement('li');
    temp.innerHTML = input.value;
    list.appendChild(temp);
    }


button.addEventListener('click', clickButton);

input.addEventListener('keypress', function (e) {
    if (e.key == 'Enter')
    {
        var temp = document.createElement('li');
        temp.innerHTML = input.value;
        list.appendChild(temp);
        input.value = null;
    }
})
