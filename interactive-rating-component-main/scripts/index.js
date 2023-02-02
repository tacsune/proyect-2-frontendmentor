var rating;

function modRating(value){
    rating=value;
}

function send(){
    document.getElementById("pag1").style.display="none";
    document.getElementById("pag2").style.display="block";
    document.getElementById("rating-selected").innerHTML="You selected"+" "+rating+" "+"out of 5";
}