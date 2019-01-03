

   $( "#btn1" ).click(function() {
    $("#SwitchNuit").hide();
    $("#btn1").hide();
    $("#btn2").show();
    $("#SwitchJour").show();
   });

   $( "#btn2" ).click(function() {
    $("#SwitchJour").hide();
    $("#btn2").hide();
    $("#btn1").show();
    $("#SwitchNuit").show();
   });




   $(document).ready(function(){
    $('#btn1').click(function() {
        $('body').css('background-color', '#191818');
        $('body').css('color', '#E9E2E2');
    });
});

$(document).ready(function(){
    $('#btn2').click(function() {
        $('body').css('background-color', '#EEEEEE');
        $('body').css('color', '#444');
    });
});


$(document).ready(function(){
    $('#btnp').click(function() {
        $('body').css('background-color', '#EC6A9D');
        $('p').css('color', '#332BDE');
        $('h1,h2,h3').css('color','#9EDF2D');
        $('p').css({"font-family":"papyrus"});
        $('h1,h2,h3').css({"font-family":"Comic Sans"});
    });
});