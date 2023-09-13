function presses(phrase) {

  const tab=["1adgjmptw ","behknqux0", "cfilorvy","23456s8z","79"];
  let count=0;

  phrase.split('').forEach($value=>{
    let index=tab.findIndex(x=>x.search($value.toLowerCase())>-1)
    count+=(index+1);    
  })

  return count;
  
  
}

console.log(presses("HOW R U"))