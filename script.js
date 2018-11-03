$(document).ready(function() {
  $("#tick_software").click(function(){
    $("#softwareSection").slideToggle("slow");
    $("#SectionEHeader").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#tick_hardware").click(function(){
    $("#HardwareSection").slideToggle("slow");
    $("#SectionFHeader").slideToggle("slow");
  });
});

$('#cmd').click(function(){
    $(document.title= "CR" + document.getElementById("input_SecARow2Col1").value);
    window.print();
});
