// evel() fucntion ta screen er modde je value gula takbe segolu ke evaluate kore print korbe...
// evel() function dia addition, subtrancion, multiplication, divition kora jai.
// slice() function dia akta akta kore digit gula screen teke remove kora jai...
// Math.sqrt() function dia borgo mul ber kora jai....
// HTML 18 number line (0, -1) = (0, result.length -1) // I mean display te akn je value ta ace se value tar length teke ak ak kore katbe...
// negation (+/-  or -/+) akta positive value ke negative kore...



var screen = document.getElementById("scr")



function percentage(){
    num = screen.value
    per = eval(num/100);
    screen.value = per
}

// square function ta aivabe o create kora jai...
// function square(){
//     num = screen.value
//     sqr =eval(num*num)
//     screen.value = sqr
// }

function factorial(){
    var i, num, f 
    f=1
    num = screen.value;
    for(i=1; i<=num; i++){
        f=f*i;         // aikan e 'f' er value always 1 and 'i' er value 1,2,3,4...aivabe barte takbe...
    }

    // i=i-1; not necessary...
    screen.value=f

}


function negate(){
    num = screen.value
    neg = -parseFloat(num)
    screen.value = neg
}

function equal(){
    try{
        screen.value = eval(screen.value)
    } catch{
        screen.value = 'Error!'
    }
}

// ON OFF function with jQuery...
function s_off(){
    $('#scr').empty();
    document.getElementById("scr").style.background="#636361";
    document.getElementById("scr").style.border="1px solid #636361";
    $('.button').prop('disabled', true);
}

function s_on(){
    $('#scr').empty(); // with jQuery
    document.getElementById("scr").style.background="rgb(241, 241, 241)"; // with js not jQuery
    document.getElementById("scr").style.border="2px solid #c0c0c0"; // with js not jQuery
    $('.button').prop('disabled', false); // with jQuery
}
console.log('calon');