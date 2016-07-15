$('.dropdown-toggle').dropdown()

$(document).ready(function(){
    $("#terror").click(function(){
        $("#1").hide();
        $("#2").hide();
        $("#3").hide();
        $("#4").show();
        $("#5").show();
        $("#6").show();
        $("#7").show();
        $("#8").show();
        $("#9").show();
    });
    $("#suspenso").click(function(){
        $("#1").show();
        $("#2").show();
        $("#3").show();
        $("#4").hide();
        $("#5").hide();
        $("#6").hide();
        $("#7").hide();
        $("#8").hide();
        $("#9").hide();
    });
});

$(document).ready(function(){
    $("#1").click(function(){
        $("div #panel").toggle();
    });
});