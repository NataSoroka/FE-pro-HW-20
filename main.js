class Checkboxes {
    constructor(title) {
        this.title = title;
    }

    handler() {
        console.log("Select " + this.title);
    }
}

var checkboxElements = [];

checkboxElements.push(new Checkboxes("Masha"));
checkboxElements.push(new Checkboxes("Petya"));
checkboxElements.push(new Checkboxes("Vasya"));
checkboxElements.push(new Checkboxes("Ira"));
checkboxElements.push(new Checkboxes("Semen"));


var checkbox, elem, btn;
var b = document.body;
var l = window.localStorage;


function createInput(title, id) {
    var el = document.createElement('input');
    el.type = "checkbox";
    el.name = "name";
    el.value = title;
    el.id = id;
    b.appendChild(el);
    var label = document.createElement('label');
    label.setAttribute("for", id);
    label.innerHTML = title + " <br>";
    b.appendChild(label);
    return el;
}



function checked() {
    var id = this.id;
    if (this.getAttribute("checked") == true) {
        this.setAttribute("checked", false);
    } else {
        this.setAttribute("checked", true);
    }
    l.setItem(id, this.checked);
}



function createButton(title, handler) {
    var el = document.createElement('button');
    el.innerHTML = title;
    el.addEventListener("click", handler);
    b.appendChild(el);

}



function ExecuteChecked() {
    for (var i = 0; i < checkboxElements.length; i++) {
        if (l.getItem(i) == 'true') {
            checkboxElements[i].handler();
        }
    }
}



function ExecuteAll() {
    for (var i = 0; i < checkboxElements.length; i++) {
        checkboxElements[i].handler();
    }
}


//////////////////Create DOM///////////////////

for (var i in checkboxElements) {
    checkbox = checkboxElements[i];
    elem = createInput(checkbox.title, i);

    if (!l.getItem(i)) {
        elem.checked = false;
        l.setItem(i, false);
    } else {
        elem.checked = l.getItem(i) == 'true';
    }
    elem.addEventListener("click", checked);
}

createButton("Execute checked", ExecuteChecked);
createButton("Execute all", ExecuteAll);