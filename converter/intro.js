function convert(){
    let ce = Number(document.getElementById("input").value)
    let fa = (ce*9/5)+32
    let result = document.getElementById("result")
    result.innerHTML = fa;
   }
