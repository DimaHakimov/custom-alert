function showCustomAlert(message, callBack){
 /*document.getElementById('mes1').innerText = message;*/
 document.getElementById('alertId').style.display = 'block';

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
