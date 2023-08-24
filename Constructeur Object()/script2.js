function Ligne(longueur){
    this.longueur = longueur;
}

Ligne.prototype.taille = function(){
    document.getElementById('p1').innerHTML = 'Longueur : '+this.longueur
};

/*Je vais créer un constructeur rectangle avec la propriété longueur (héréditaire du constructeur Ligne) et largeur */
function Rectangle(longueur, largeur){
    Ligne.call(this, longueur);
    this.largeur = largeur;
}

Rectangle.prototype = Object.create(Ligne.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.aire = function(){
    document.getElementById('p2').innerHTML = 'Aire : '+this.longueur*this.largeur
};

function Parallelepipede(longueur, largeur, hauteur){
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
}

Parallelepipede.prototype = Object.create(Rectangle.prototype);
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.volume = function(){
    document.getElementById('p3').innerHTML = 'Volume : '+this.longueur*this.largeur*this.hauteur
};

let geo = new Parallelepipede(3, 2, 2);
geo.volume();
geo.aire();
geo.taille();

