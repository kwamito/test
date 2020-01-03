
document.getElementById('lo').style.display = 'none'
function add2() {
    var billAmt = document.getElementById('in1').value;
    var numOfPeople = document.getElementById('in2').value;
    var serviceQual = document.getElementById('sele').value;
    if(billAmt == 0 || numOfPeople == 0){
        alert("Input musn't be empty")
    }
    var total = (billAmt * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById('lo').style.display = 'block'
    document.querySelector('#divi').innerHTML = total;
}
