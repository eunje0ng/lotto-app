// 1게임 생성

var make5num = document.querySelector("#make_num5")
make5num.addEventListener("click", show5num);
function show5num(){
    var num_one = [];
    for(var i=1; i<46; i++){
        num_one.push(i);
    }
    num_one.sort(function(){
        return Math.random() - 0.5
    })
    //console.log(num_one);
    var start = Math.ceil(Math.random() * 40);
    var new_num_one=num_one.slice(start, start+6);
    console.log(new_num_one.sort(function(a,b){
        return a-b;
    }));
}