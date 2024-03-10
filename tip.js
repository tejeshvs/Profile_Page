function myfunc(){
    let amount= document.getElementById('amount').value;
    let percent= document.getElementById('percent').value;
    let people= document.getElementById('people').value;
    let tip= (percent*amount)/(100*people);
    document.getElementById('tip').innerHTML= "Each person should pay ₹ " + tip.toFixed(2);
}