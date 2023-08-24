function Utilisateur(n, a, m, r){
    this.nom = n;
    this.age = a;
    this.mail = m;
    this.role = r;

    this.bonjour=function(){
        alert('Bonjour, je suis '+this.nom[0]+', j\'ai '+ this.age +' ans et je suis ' + this.role);
    }
}

let philippe = new Utilisateur(["Philippe", "Garcia"], 28, 'philippe.garcia@externe.afpa.fr', 'formateur');
let christopher = new Utilisateur(["Christopher", "Lumene"], 25, 'christopher.lumene@afpa.fr', 'stagiaire');
let jimmy = new Utilisateur(["Jimmy", "Boulc'h"], 29, 'jimmy.boulch@afpa.fr', 'stagiaire');

christopher.taille=195;

document.getElementById('p1').innerHTML = "Prénom de philippe : "+philippe['nom'][0];
document.getElementById('p2').innerHTML = "Taille de Christopher : "+christopher['taille'];
document.getElementById('p3').innerHTML = "Mail de Jimmy : "+jimmy['mail'];

console.log(philippe);


