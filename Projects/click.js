let count= 0;
function inccount(){
    count++;
    document.getElementById("count").innerHTML = count;

}
function reset(){
    count =0;
    document.getElementById("count").innerHTML = count;
}