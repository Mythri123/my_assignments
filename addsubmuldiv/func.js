/**
 * Created by PHANIUKESH on 3/31/2016.
 */
function addSub(){
var add1 = document.getElementById("ad1").value;
var add2 = document.getElementById("ad2").value;
var sub1 = document.getElementById("su1").value;
var sub2 = document.getElementById("su2").value;
var mul1 = document.getElementById("mu1").value;
var mul2 = document.getElementById("mu2").value;
var div1 = document.getElementById("di1").value;
var div2 = document.getElementById("di2").value;
    /*if(add1 == "" || add2){
        return alert("Please enter First value for adding");
    }*/

    if(add1 && add2){
        function addIng(add1,add2){
            var sol = parseInt(add1)+parseInt(add2);
            document.getElementById("val1").innerHTML = sol;
        };
        addIng(add1,add2);
    };
    if(sub1 && sub2){
        function subIng(sub1,sub2){
            var sol = parseInt(sub1) - parseInt(sub2);
            document.getElementById("val2").innerHTML = sol;
        };
        subIng(sub1,sub2)
    }
    if(mul1 && mul2){
        function mulIng(mul1,mul2){
            var sol = parseInt(mul1) * parseInt(mul2);
            document.getElementById("val3").innerHTML = sol;
        };
        mulIng(mul1,mul2)
    };
    if(div1 && div2){
        function divIng(div1,div2){
            var sol = parseInt(div1) / parseInt(div2);
            document.getElementById("val4").innerHTML = sol;
        };
        divIng(div1,div2)
    };

};

function rev1() {
    var stri = document.getElementById("in").value;


    function rev(stri) {
        console.log(stri);
        var stri1 = stri.split(" ");
    var stri2 = stri1.reverse()
        var stri3 = stri2.join();
        document.getElementById("val5").innerHTML = stri3;
        console.log(stri);
    }

    rev(stri)
}
