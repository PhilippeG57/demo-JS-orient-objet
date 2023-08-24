let utilisateur={
    nom: ['Philippe', 'Garcia'],
    age: 28,
    mail: 'philippe.garcia@externe.afpa.fr',

    bonjour: function(){
        alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age +' ans');
    }
};

document.getElementById('p1').innerHTML = 'Nom : '+utilisateur.nom;
document.getElementById('p2').innerHTML = 'Age : '+utilisateur.age;



utilisateur.age=30;

utilisateur.taille=190;
document.getElementById('p3').innerHTML = 'Prénom : '+utilisateur['nom'][0];

utilisateur.presentation=function(){
    alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age +' ans et je mesure '+
    this.taille + 'cm');
}

utilisateur.presentation();