window.addEventListener('load', function(){

    let botaoEscuro = document.querySelector('.esc')
    let botaoVerde = document.querySelector('.ver')

    botaoVerde.addEventListener('click', function(){
        document.querySelector('body').classList.remove('fundoPreto')
        document.querySelector('body').classList.add('fundoVerde')
    })

    botaoEscuro.addEventListener('click', function(){
        document.querySelector('body').classList.remove('fundoVerde')
        document.querySelector('body').classList.add('fundoPreto')
    })
});