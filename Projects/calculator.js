let mark;
function getgrade(mark){
    if(mark<200){
        return 'F'
    }
    if((mark<=500) && (mark >450)){
        return 'A+'
    }
    if((mark<=450) && (mark >400)){
        return 'A';
    }
    if((mark<=400) && (mark >350)){
        return 'B+';
    }
    if((mark<=350) && (mark >300)){
        return 'B';
    }
    if((mark<=300) && (mark >250)){
        return 'C';
    }
    if((mark<=250) && (mark >200)){
        return 'D';
    }
}
function myfunc(){
    
    let phy =document.getElementById('phy').value;
    let chem =document.getElementById('chem').value;
    let math =document.getElementById('math').value;
    let eng =document.getElementById('eng').value;
    let comp =document.getElementById('comp').value;
    
    let marks= parseInt(phy)+parseInt(chem)+parseInt(math)+parseInt(comp)+parseInt(eng);
    document.getElementById('grade').innerHTML= 'Your marks are '+ marks+' and your grade is '+ getgrade(marks); 
    
   
}