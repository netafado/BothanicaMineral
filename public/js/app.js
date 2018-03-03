"use strict";
(function($){

    // brilho
    function Brilho(canvas, w, h){
        console.log(w);
        let cW = canvas.width = w;
        let cH = canvas.height = h;
        let ctx = canvas.getContext('2d');

        // imagens
        let bg = document.getElementById('dourado');
        let brilho = document.getElementById('shiny');

        let position = {x: 0, y: 0};
        let vel = {x:6, y:0};

        function desenhar(){
            console.log('desenhar');
            ctx.clearRect(0,0, cW, cH);
            ctx.drawImage(bg,0,0, cW, 1);
            ctx.drawImage(brilho,position.x,position.y, 200, 1);
            position.x += vel.x;
            requestAnimationFrame(desenhar)

            if(position.x > cW * 1.7){
                position.x = 0;
            }
            

        }

        desenhar();


    }
    //esse evento acontece quando toda a página é carregada
    window.addEventListener('load', function(){
        $('#loader').fadeOut(200);
        Brilho(document.getElementById('brilho'), $('.line-gold').width(), 1);
    })
})($)