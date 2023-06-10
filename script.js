function compute(){
var principal= parseFloat(document.getElementById("principal").value);
var rate= parseFloat (document.getElementById("rate").value);
var years= parseInt( document.getElementById("year").value);
var interest= (principal*rate*years)/100;
var amount= principal + interest;
var currentYear= new Date().getFullYear();
var futureYear = currentYear + years;
var result= document.getElementById('result');
result.innerHTML="If you deposit " + principal + " at interest rate of "+ rate+"%, you will receive an amount of "+ amount +" in the year "+ futureYear+".";

}

function updateRate(){
    var rateVal= document.getElementById('rate').value;
    document.getElementById('rate_val').innerHTML=rateVal;
}

