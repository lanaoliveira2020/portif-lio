document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
   
    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
       
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

    
    })
   
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
   
    const alternaContraste = document.getElementById('alterna-contraste')

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
    
    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })

})

ScrollReveal().reveal('#Eu sou Alana', { delay: 500 });
ScrollReveal().reveal('#Eu estou cursando no ensino médio', { delay: 500 });
ScrollReveal().reveal('#HTML', { delay: 500 });
ScrollReveal().reveal('#CSS', { delay: 500 });
ScrollReveal().reveal('#JavaScript', { delay: 500 });
ScrollReveal().reveal('#Scratch', { delay: 500 });