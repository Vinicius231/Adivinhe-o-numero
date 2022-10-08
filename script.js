var numberaleatorio = Math.floor(Math.random()*101)
var resultado = document.querySelector('.resultado')

document.addEventListener('keydown',teclado)

function teclado() {
    var tecla = event.keyCode

    if(tecla == 13) {
        submit()
        
    }
}

function submit() {
    var number = document.querySelector('.number').value

    var tecla = event.keyCode


    if(number == numberaleatorio) {
        resultado.innerHTML += `<b>Você acertou!</b> O número escolhido era ${numberaleatorio} <br>
        <button class="reload" onclick="reload()">Recomeçar</button>
        `
    } else if (number < numberaleatorio && number > 0) {
        resultado.innerHTML += `Você chutou ${number}. O meu número é <b>MAIOR!</b> <br>`
        
    } else if (number > numberaleatorio && number < 100) {
        resultado.innerHTML += `Você chutou ${number}. O meu número é <b>MENOR!</b> <br>`
    }
    if(number > 100 || number < 0) {
        var erro = document.querySelector('.number')

        erro.classList.add('error')

        setTimeout(function remove() {
            erro.classList.remove('error')
        },400)
    }
}

function reload() {
    location.reload()
}
