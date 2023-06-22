function addNum(){
    var Celcius = parseFloat(document.getElementById("value1").value);
    var Fahreinheit = document.getElementById("answer");
    Fahreinheit.value = (Celcius * 1.8) + 32;
}
