function openTabs(evt, tabName) {

    var i, tabContent, tablinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeText(value) {
    var display = document.getElementById("display");
    var text = "";

    if (value == 1) text += "Amir (Leader)";
    if (value == 2) text += "Ammar";
    if (value == 3) text += "Fekry";
    if (value == 4) text += "Yi Xuin";

    display.innerHTML = text;
}