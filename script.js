
//fonction pour Afficher le Prénom & Nom et le Pays://
function display()  
{
    var x;
    var y;
    var z;

    x=document.getElementById("f_name").value;  
    document.getElementById("F").innerHTML= "Your First Name is : " + " " +x;

    y=document.getElementById("l_name").value;  
    document.getElementById("L").innerHTML="Your last Name is : "+" "+y;

    z=document.getElementById("_country").value;  
    document.getElementById("C").innerHTML="Your Country is : "+" " +z;
}

