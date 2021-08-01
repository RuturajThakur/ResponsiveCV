function check(){
    var x = document.getElementById('usr');
    var y = document.getElementById('pwd');
    if(x.value=="admin" && y.value=="admin"){
        location.href="responsivecv.html";
    } 
    else{
        var x = document.getElementById("error");
        if (x.style.display === "none") {
            x.style.display = "block";
        } 
        document.getElementById('usr').setAttribute("placeholder","");
        document.getElementById('pwd').setAttribute("placeholder","");
        document.getElementById('usr').focus();
    }
} 