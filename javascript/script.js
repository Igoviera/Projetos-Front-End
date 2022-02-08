function calcular(){
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var caixa = document.getElementById('res')

    let resultado = peso / (altura * altura)

    caixa.innerHTML=(resultado)
    

    if(altura === '' || peso === ''){
        caixa.innerHTML = 'Os dois campos precisam ser preenchidos'
        resultado = null
        caixa.style.color = "black"
    }else if(resultado < 18.5) {
        caixa.innerHTML = `IMC ${resultado.toFixed(2)} MAGREZA`
        caixa.style.color = "red"
    }if (resultado >= 18.5 && resultado <= 24.9){
        caixa.innerHTML = `IMC  ${resultado.toFixed(2)}  NORMAL`
        caixa.style.color = "green"
    }else if(resultado >= 25.0 && resultado <= 24.9){
        caixa.innerHTML = `IMC ${resultado.toFixed(2)} SOBREPESO`
        caixa.style.color = 'red'
    }if(resultado >= 30.0 && resultado <=39.9){
        caixa.innerHTML = `IMC ${resultado.toFixed(2)} OBESIDADE`
        caixa.style.color = 'red'
    }else if(resultado > 40.0){
        caixa.innerHTML = `IMC  ${resultado.toFixed(2)} OBESIDADE GRAVE`
        caixa.style.color = "red"
    }
}

function limpar(){
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
    document.getElementById('res').innerHTML = ''
}