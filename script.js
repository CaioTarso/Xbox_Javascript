const html = document.querySelector('html')
const btninst = document.querySelector('.btn-instalar')
const bt1 = document.querySelector('.btn-star-wars')
const bt2 = document.querySelector('.btn-call-of-duty')
const bt3 = document.querySelector('.btn-assassins-creed')
const banner = document.querySelector('.img-banner')
const titulo = document.querySelector('.titulo-banner')
const botoes = document.querySelectorAll('.btn')
const subTitle = document.querySelector('.subtitulo')



btninst.addEventListener('click', () => {
    
    limparBotoes()

    
    bt1.classList.add('active')

})



bt1.addEventListener('click', () => {
    
    limparBotoes()

    html.setAttribute('data-contexto', 'bg-dark')
    banner.setAttribute('src', '/img/star-wars.png')
    titulo.innerHTML = "Star Wars Outlaws" 
    subTitle.innerHTML = "A galáxia está cheia de oportunidades"
    bt1.classList.add('active')

})

bt2.addEventListener('click', () => {

    limparBotoes()

    html.setAttribute('data-contexto', 'bg-blue')
    banner.setAttribute('src', '/img/call-of-duty.png')
    titulo.innerHTML = "Call Of Duty Black Opps 6"
    subTitle.innerHTML = "Jogue o beta agora"
    bt2.classList.add('active')

})

bt3.addEventListener('click', () => {

    limparBotoes()
    
    html.setAttribute('data-contexto', 'bg-red')
    banner.setAttribute('src', '/img/assassins-creed.png')
    titulo.innerHTML = `<stron>Power Your Dreams</strong>`
    subTitle.innerHTML = " Assasins Creed Mirage no Xbox Series X|S"
    bt3.classList.add('active')


})

function limparBotoes() {
    botoes.forEach(function(botao){
        botao.classList.remove('active')
    });
}
    



   


        
    





