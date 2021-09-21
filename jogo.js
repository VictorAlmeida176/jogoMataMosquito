let altura=0 
let largura=0
let vidas= 1
let tempo = 15
let nivel = window.location.search
nivel= nivel.replace("?","")
let criaMosquitoTempo=1500

if(nivel==="facil"){
    criaMosquitoTempo=1500
    }else if(nivel==-"medio"){
        criaMosquitoTempo=1000
        }else if(nivel==="dificil"){
            criaMosquitoTempo=700
        }

function ajustaTamanhoPalcoJogo() {
     altura= window.innerHeight
     largura = window.innerWidth

     console.log(largura,altura)
    
}
let cronometro = setInterval(function(){
    tempo-=1
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href="vitoria.html"
    }else{
        document.getElementById("cronometro").innerHTML = tempo

    }
},1000)


ajustaTamanhoPalcoJogo()

function posicaoRandomica(){

    // Remover mosquito anterior caso exista
    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()
        if(vidas>3){

            window.location.href="fim_de_jogo.html"
        }else{
        document.getElementById("v"+ vidas).src="imagens/imagens/coracao_vazio.png"

        vidas++
        }
    }

let posicaoX= Math.floor(Math.random() * largura) -90
let posicaoY= Math.floor(Math.random() * altura) -90

posicaoX=posicaoX <0 ? 0: posicaoX
posicaoY=posicaoY <0 ? 0: posicaoY

console.log(posicaoX,posicaoY)

// criar elemento html

let mosquito =document.createElement("img")
mosquito.src="imagens/imagens/mosca.png"
mosquito.className=TamanhoAleatorio() +" "+ ladoAleatorio()
mosquito.style.left= posicaoX +"px"
mosquito.style.top= posicaoY +"px"
mosquito.style.position="Absolute"
mosquito.id="mosquito"
document.body.appendChild(mosquito)
mosquito.addEventListener("click",function(){
    this.remove()
})

    console.log(ladoAleatorio())
}
// Fim function pos random

document.getElementById("cronometro").innerHTML = tempo


let criaMosquito=setInterval(function(){
    posicaoRandomica()
},criaMosquitoTempo) 

function TamanhoAleatorio() {
    let classe =Math.floor(Math.random()*3)

    switch (classe){
        case 0: 
            return 'mosquito1'
        case 1:
            return "mosquito2"
        case 2: 
            return "mosquito3"
        }
        
}

function ladoAleatorio(){
    let classe =Math.floor(Math.random()*2)

    switch (classe){
        case 0: 
            return 'ladoA'
        case 1:
            return "ladoB"
    }       
}