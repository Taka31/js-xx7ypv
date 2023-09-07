var finalDestination = function(currentPos, directions) {
  var locales = [
    ["Deepwood Motte", "Shadow Tower", "Castle Black", "Eastwatch", "Bay of Seals"],
    [ "The Stony Shore", "Torrhen's Square", "Winterfell", "The Dreadfort", "Karhold"],
    [ "Flint's Finger", "Barrowtown", "Moat Cailin", "White Harbour", "Widow's Wat"],
    [ "Pyke", "Seagard", "The Twins", "Sisterton", "The Fingers"],
    [ "The Crag", "Riverrun", "Darry", "The Eyrie", "Gulltown"],
    [ "Castamere", "Acorn Hall", "Harrenhal", "Maidenpool", "Dragonstone"],
    [ "Lannisport", "Stoney Sept", "King's Landing", "Blackwater Bay", "Sharp Point"],
    [ "High Garden", "Bitterbridge", "King's Wood", "Storm's End", "Evenfall"],
    [ "Old Town", "Horn Hill", "Prince's Pass", "Planky Town", "Sunspear"]
  ];
  
  // variables
  let [cpt,x,y]=[0,0,0];

  let tabDirections=directions.split(" ");

  // find actual position
  locales.find(tab=>{
    if(tab.indexOf(currentPos)>=0){
      y=tab.indexOf(currentPos);
      x=cpt;
    }
    cpt++;
  })

  console.log("ma position de base est "+x +" et "+y + " soit "+locales[x][y])

  // combinations
  const combi={
    "S":(d)=>{x+= d},
    "N":(d)=>{x-= d},
    "W":(d)=>{y-= d},
    "E":(d)=>{y+= d},
  }

  for (let go of directions.split` `) {
    const[dist,dir]=go.split``;

    console.log(dist +" "+dir)

    const combi={
      "S":(d)=>{x+= +d},
      "N":(d)=>{x-= +d},
      "W":(d)=>{y-= +d},
      "E":(d)=>{y+= +d},
    }[dist](dir)

    console.log("ma position de base est "+x +" et "+y + " soit ")

    if(x<0){
      return "The Wall blocks your way";
    }else if((x>locales.length-1) || y<0 || y>4){
      return "You do not have a ship to cross this sea.";
    }
  }
  return locales[x][y];
}

console.log(finalDestination("Bitterbridge", "N1 N1 S2"));
