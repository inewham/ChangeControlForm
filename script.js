function DisplaySoftwareSection() {
    var checkBox = document.getElementById("tick_software");
    var text = document.getElementById("softwareSection");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

function DisplayHardwareSection() {
    var checkBox = document.getElementById("tick_hardware");
    var text = document.getElementById("HardwareSection");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}
