
var tab_color = [];

function change_color() {
    var value = document.getElementById("name").value;
    console.log("Valeur de name", value);

    if (value == "")
    {
        value = "white";
    }
    var element = document.getElementById("section_change_color");
    element.style.backgroundColor = value;
    console.log("couleur du background : ", element.style.backgroundColor);

    if (tab_color.indexOf(element.style.backgroundColor) == -1)
    {
        tab_color.push(element.style.backgroundColor);
        console.log("Tableau des couleurs -> ", tab_color);
    }
}