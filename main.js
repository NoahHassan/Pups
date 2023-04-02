var sceneId = 0;

var headButton;
var shadowPerson;

window.onload = function() {
    headButton = document.getElementById("headButton");
    shadowPerson = document.getElementById("shadowPerson");

    SetVisible(headButton);
    SetHidden(shadowPerson);
}

function switchScene()
{
    switch(sceneId)
    {
        case 0:
            sceneId += 1;
            SetHidden(headButton);
            SetVisible(shadowPerson);
            break;
    }
}

function SetVisible(obj)
{
    obj.classList.remove("hidden");
}

function SetHidden(obj)
{
    obj.classList.add("hidden");
}