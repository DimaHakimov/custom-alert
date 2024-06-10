function showCustomAlert(message, textOnButton,windowColor,messageColor,buttonColor,textButtonColor,callBack){
 document.getElementById('mes1').innerText = String(message);
 document.getElementById('alertId').style.display = 'block';
 document.getElementById('button1').innerText = String(textOnButton);
 document.getElementById('alertContent').style.backgroundColor = 'green';
 document.getElementById('alertContent').style.color = messageColor;
 document.getElementById('button1').style.backgroundColor = buttonColor;
 document.getElementById('button1').style.color = textButtonColor;
 document.getElementById('button1').onclick = function(){
    if(callBack){
        callBack();
    }
    closeCustomAlert();
 }
}

function closeCustomAlert(){
    document.getElementById('alertId').style.display = 'none';
}


window.onload = function(){
    showCustomAlert('testMessage', 'Test', 'green','white','blue','yellow');
}
