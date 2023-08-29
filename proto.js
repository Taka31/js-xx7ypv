export function Band(bandName = 'Inconnu') {
  var bandName = bandName;

  this.getBandName = () => {
    return bandName;
  };
}

export function Orchestre(bandName = 'Inconnu', members = 0) {
  var members = members;

  Band.call(this, bandName);

  this.getMembers = () => {
    return this.members;
  };
}

//Band.prototype.MembersCount = 5;

//let groupe = new Band('Dyouk');
//document.write(groupe.getBandName() + '<br>');
//document.write(groupe.MembersCount);

/*
//Orchestre.prototype = Object.create(Band.prototype); // clonage deux objets distincts
Orchestre.prototype = Band.prototype; // liaison d'un prototype a un autre
Orchestre.prototype.age = 12;

let toulouse = new Orchestre('toulouse', 12);
document.write(
  'le nom de mon groupe est ' +
    toulouse.getBandName() +
    ' il se compose de ' +
    toulouse.getMembers() +
    ' membre(s) <br />'
);

let dyouk = new Band('Dyouk');
document.write('le nom de mon groupe est ' + dyouk.getBandName());

console.log(dyouk.prototype);
console.log(Orchestre.prototype);*/