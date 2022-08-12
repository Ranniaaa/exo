/* console.log(document.domain);
console.log(document.URL)
var selector= document.querySelector("body")

var elementlist = parentNode.querySelectorAll("h1")
var classsss = document.getElementsByClassName("lunatic")*/
var nom =["lma","perfume","shirt","ball"]
var prix=[ "50da","2000da","3500da","5000da"]
var image=["images/water.jpg","images/perfume.png","images/shirt.jpg","images/ball.jpg"]
var description =[ "bottle","la vie est belle","black","simple ball "]


var produits=[]
for (let index = 0; index < nom.length; index++) {
   var produit={
    asmo:nom[index],
    price:prix[index],
    image:image[index],
    description:description[index],
    
   }
   produits.push(produit);
    
}
console.log(produits);