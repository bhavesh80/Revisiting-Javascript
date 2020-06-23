$(document).ready(function() {

makeTimer('timer1',500)
makeTimer('timer2',1000)
makeTimer('timer3',2000)
console.dir(makeTimer)

function makeTimer(eltName,wait){
    var counter = 0;
    setInterval(updateh4,wait)

    function updateh4(){
        $(`#${eltName}`).text(counter)
        counter++;
    }
    console.dir(updateh4)
}


});

// In closure = eltName and Counter
//0: Closure (makeTimer) {eltName: "timer3", counter: 1}
