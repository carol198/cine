//$('.dropdown-toggle').dropdown()

$(document).ready(function(){
    $("#terror").click(function(){
        //$("li #terror").add("span").text("hola");
        var nombre=$(this).text();
        if(nombre == "TERROR"){
            $("div #1").show();
            $("#2").hide();
            $("#3").hide();
            $("#4").hide();
            $("#5").hide();
            $("#6").hide();
            $("#7").hide();
            $("#8").hide();
            $("#9").hide();
            }
        
    });
    $("#suspenso").click(function(){
        var nombre=$(this).text();
        if(nombre === "SUSPENSO"){
            $("#1").hide();
            $("#2").hide();
            $("#3").hide();
            $("#4").show();
            $("#5").show();       
            $("#6").show();
            $("#7").hide();
            $("#8").hide();
            $("#9").hide();
        }
        
    });
    $("#comedia").click(function(){
        $("#1").hide();
        $("#2").hide();
        $("#3").hide();
        $("#4").hide();
        $("#5").hide();       
        $("#6").hide();
        $("#7").show();
        $("#8").show();
        $("#9").show();
    });
});

$(document).ready(function(){
    $("#1").click(function(){
        $("div #panel").toggle();
        //$("div #panel").empty();
        agregartexto();
    });
});
$(document).ready(function(){
    // al hacer click a un li le doy una function
    $('li').on('click',function(){
        //defines la variable texto para traer el texto de li clickeado
        var texto = $(this).text();
        //al boton con id #cambiarTexto tengo que ponerle la variable  | texto | con html , para que cambie el button  
        $('#cambiarTexto').html(texto);

    })
})

function agregartexto(){
    var txt=document.createElement("p");
    txt.innerHtml ="Es muy buena....";
    $("section").append(txt);
}