function loneliest(str) {
  // clean spaces before and after
  str=str.trim();
  console.log(str.length)

  let tab= str.match(/[a-z]/g);
  let tabResult=[];
  let tabEnd=[];
  let cpt=0;

  tab.forEach(valeur=>{
    let regex = new RegExp(`\\s*${valeur}\\s*`);
    let match = str.match(regex);
    tabResult.push({"name":valeur,"long":match[0].length});
  })

  tabResult.find(obj=>{
    if(obj.long>cpt){
      cpt=obj.long;
    }
  });

  tabResult.find(valeur=>{
    if(valeur.long===cpt){
      tabEnd.push(valeur.name);
    }
  });
  return tabEnd;
}

console.log(loneliest("abc d   ef  g   h i j      "));

function loneliest(str) {
  return str.trim() // enlever caracteres
  .split('') // mettre tout les caracteres dans un tableau
  .map((char,i)=>str.trim().slice(i,str.length).match(/[ ]*.[ ]*/g)[0])
  .sort((a,b)=>b.length-a.length)
  .filter((s,i,arr)=>s.length===arr[0].length)
  .map(s=>s.trim());
}

console.log(loneliest("abc d   ef  g   h i j      "));