window.addEventListener('load', function(){


    let fundo = document.querySelector('body')
    let escuro = document.querySelector('.esc')
    let claro = document.querySelector('.cla')

    escuro.addEventListener('click', function(){
        fundo.classList.remove()
        fundo.classList.toggle("fundopreto") 
    });
    claro.addEventListener('click', function(){
        fundo.classList.remove()
        fundo.classList.toggle("fundobranco") 
    });

});