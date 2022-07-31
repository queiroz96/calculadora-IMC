var peso;  /* declaração de variáveis */
var altura;
var imc;
var resultado;



function calcular(event){ /* criação de função */
    event.preventDefault(); /* não apagar os dados no submmit */

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    resultado = document.getElementById('resultado')

    imc = peso / (altura * altura);

    if(imc < 17){
        resultado.innerHTML ='</br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado, você está muito abaixo do peso'
    }else if(imc > 17 && imc < 18.49){
        resultado.innerHTML ='</br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado, você está abaixo do peso'
    }else if(imc >= 18.5 && imc <= 24.99){
        resultado.innerHTML ='</br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Parabéns, você está em seu peso normal'
    }else if(imc > 25 &&  imc <= 29.99){
        resultado.innerHTML ='</br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado, você está acima do peso'
    }else if(imc > 29.99){
        resultado.innerHTML ='</br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado!! Você está com obesidade'
    }

    
   document.getElementById('peso').value =''
   document.getElementById('altura').value =''
 

}
    



