$(document).ready(function() {
    if(Cookies.get('color')=='white') {
        $("body").addClass("white").removeClass("black");
        $("#switchColor").html('Tema Claro');
    }
    else if(Cookies.get('color')=='black') {
        $("body").addClass("black").removeClass("white");
        $("#switchColor").html('Tema Escuro');
    }

    //console.log("Teste");
    console.log($('input[name=armadura]:checked', '#armadura').val());
    $("#switchColor").click(function(){
        if($("body").hasClass("white")) {            
            $("body").addClass("black").removeClass("white");
            $("#switchColor").html('Tema Escuro');
            Cookies.set('color','black');
        }
        else {
            $("body").addClass("white").removeClass("black");
            $("#switchColor").html('Tema Claro');
            Cookies.set('color','white');
        }
    });
    
    $("#fatura").click(function(){
        //console.log($('input[name=armadura]:checked', '#armadura').val());
        
        var Nome = ["armadura","motor","suspensao","transmissao","travao","turbo"];
        var soma = 0
        for(var i=0;i<Nome.length;i++) {
            if($("input[name="+Nome[i]+"]:checked").siblings("input[type=number]").val()!=undefined) {
                soma+=parseInt($("input[name="+Nome[i]+"]:checked").siblings("input[type=number]").val());
            }
        }

        soma = Math.ceil(soma * (1 + ($("#percentagem").val()/100)));
        $("#resposta").empty().append("Valor Total: "+soma);

    });

    $("#carro").change(function(){
        var valor = $("#carro").val();
        $("input[type=radio]").each(function(index){
            $(this).siblings("input[type=number]").val(Math.ceil(valor * $(this).val()));
        });
    });

    $("#turbo").change(function(){
        var turbo = $("#turbo").val();
        turbo= turbo / 0.104375
        $("#carro").val(Math.ceil(turbo));
        $("#carro").trigger("change");
    });

});