'use strict';

var slider = document.getElementById("rangeA");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("lapse");
/*Valores requeridos*/
var check = document.getElementById("check1");

var x=0;
var y=0;

check.oninput = function(){
    if (check.checked == false){
        output3.innerHTML = " month";
    }
    if (check.checked == true){
        output3.innerHTML = " year";
    }
    if (slider.value == 0){
        if (check.checked == false){x='8';}
        if (check.checked == true){x='72'}
        y="10K";
    }
    if (slider.value == 25){
        if (check.checked == false){x='12';}
        if (check.checked == true){x='108'}
        y="50K";
    }
    if (slider.value == 50){
        if (check.checked == false){x='16';}
        if (check.checked == true){x='144'}
        y="100K";
    }
    if (slider.value == 75){
        if (check.checked == false){x='24';}
        if (check.checked == true){x='216'}
        y="500K";
    }
    if (slider.value == 100){
        if (check.checked == false){x='36';}
        if (check.checked == true){x='324'}
        y="1M";
    }
    output.innerHTML = x;
}



if (slider.value == 0){
    if (check.checked == false){x='8';}
    if (check.checked == true){x='72'}
    y="10K";
}
if (slider.value == 25){
    if (check.checked == false){x='12';}
    if (check.checked == true){x='108'}
    y="50K";
}
if (slider.value == 50){
    if (check.checked == false){x='16';}
    if (check.checked == true){x='144'}
    y="100K";
}
if (slider.value == 75){
    if (check.checked == false){x='24';}
    if (check.checked == true){x='216'}
    y="500K";
}
if (slider.value == 100){
    if (check.checked == false){x='36';}
    if (check.checked == true){x='324'}
    y="1M";
}

output.innerHTML = x;
output2.innerHTML = y;

slider.oninput = function(){
    if (slider.value == 0){
        if (check.checked == false){x='8';}
        if (check.checked == true){x='72'}
        y="10K";
    }
    if (slider.value == 25){
        if (check.checked == false){x='12';}
        if (check.checked == true){x='108'}
        y="50K";
    }
    if (slider.value == 50){
        if (check.checked == false){x='16';}
        if (check.checked == true){x='144'}
        y="100K";
    }
    if (slider.value == 75){
        if (check.checked == false){x='24';}
        if (check.checked == true){x='216'}
        y="500K";
    }
    if (slider.value == 100){
        if (check.checked == false){x='36';}
        if (check.checked == true){x='324'}
        y="1M";
    }
    output.innerHTML = x;
    output2.innerHTML = y;
}

/*output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}*/

slider.addEventListener("mousemove",function(){
    var x = slider.value;
    /*var color = 'linear-gradient(90deg, rgb(117,252,117)'+x+'%, rgb(214,214,214)'+x+'%)';*/
    var color = 'linear-gradient(90deg, rgb(165,243,235)'+x+'%, rgb(214,214,214)'+x+'%)';
    slider.style.background = color;
})
