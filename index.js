console.log('Iniciando...')
const horatxt = document.getElementById('hora')
const horainfotxt = document.getElementById('horaInfo')
console.log(`Constante horatxt definida para ${horatxt}`)
console.log(`Constante horainfotxt definida para ${horainfotxt}`)
let data = new Date()
console.log(`Data definida para: ${data}`)
let hora = data.getHours(Number)
let minutos = data.getMinutes(Number)
let segundos = data.getSeconds(Number)
console.log('Contagem de ciclos definida para zero.')
let ciclos = 0

function mostrarHoras() {
    setTimeout(() => {
        data = new Date()
        hora = data.getHours(Number)
        minutos = data.getMinutes(Number)
        segundos = data.getSeconds(Number)
        //console.log(`Dara atualizada para: ${data}`)

        if (segundos < 10 && minutos < 10) {
            horatxt.innerHTML = `${hora}:0${minutos}:0${segundos}`
        } else if (segundos < 10) {
            horatxt.innerHTML = `${hora}:${minutos}:0${segundos}`
        } else if (minutos < 10) {
            horatxt.innerHTML = `${hora}:0${minutos}:${segundos}`
        } else {
            horatxt.innerHTML = `${hora}:${minutos}:${segundos}`
        }
        
        ciclos++
        horainfotxt.innerHTML = `<p>Número de ciclos: ${ciclos}</p>`
        mostrarHoras()
    }, 1000);
}

mostrarHoras()

function mostrarSite() {
    setTimeout(() => {
        document.getElementById('popup').style.animation = 'popupSumir 350ms linear'

        setTimeout(() => {
            document.getElementById('popup').style.display = 'none'
            document.querySelector('main').style.display = 'block'
        }, 350)
    }, 250)
}

function alterarModoCor() {
    document.querySelector('body').classList.toggle('modo-escuro')
}

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.querySelector('body').classList += 'modo-escuro'
} else {document.querySelector('body').classList -= 'modo-escuro'}