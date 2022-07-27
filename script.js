var peso;
var altura;
var imc;
var resultado;



function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    if(imc < 17){
        resultado = document.getElementById('resultado')
        resultado.innerHTML ='</br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado, você está muito abaixo do peso'
    }else if(imc > 17 && imc < 18.49){
        resultado = document.getElementById('resultado')
        resultado.innerHTML ='</br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado, você está abaixo do peso'
    }else if(imc >= 18.5 && imc <= 24.99){
        resultado = document.getElementById('resultado')
        resultado.innerHTML ='</br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Parabéns, você está em seu peso normal'
    }else if(imc > 25 &&  imc <= 29.99){
        resultado = document.getElementById('resultado')
        resultado.innerHTML ='</br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado, você está acima do peso'
    }else if(imc > 29.99){
        resultado = document.getElementById('resultado')
        resultado.innerHTML ='</br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado!! Você está com obesidade'
    }

}
    



