function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

function DisplaySoftwareSection() {
    var checkBox = document.getElementById("tick_software");
    var softwareSection = document.getElementById("softwareSection");
    var SectionEHeader = document.getElementById("SectionEHeader");
    if (checkBox.checked == true){
        softwareSection.style.display = "block";
        SectionEHeader.style.display = "block";
    } else {
       softwareSection.style.display = "none";
       SectionEHeader.style.display = "none";
    }
}

function DisplayHardwareSection() {
    var checkBox = document.getElementById("tick_hardware");
    var HardwareSection = document.getElementById("HardwareSection");
    var SectionFHeader = document.getElementById("SectionFHeader")
    if (checkBox.checked == true){
        HardwareSection.style.display = "block";
        SectionFHeader.style.display = "block";
    } else {
       HardwareSection.style.display = "none";
       SectionFHeader.style.display = "none";
    }
}
