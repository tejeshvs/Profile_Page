function myfunc(){
    let height=document.getElementById('height').value;
    let weight=document.getElementById('weight').value;
    let bmi= weight/(height*height);
    document.getElementById('bmi').innerHTML= 'Your BMI is ' + bmi.toFixed(2);
}