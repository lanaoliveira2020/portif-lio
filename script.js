document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBota = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

})