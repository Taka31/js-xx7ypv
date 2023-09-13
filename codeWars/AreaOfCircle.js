function circleArea(radius) {
  if(radius<=0){
    throw new Error("negative result");
  }else{
    return Math.round((Math.PI*radius*radius*100))/100;
  }  
}

console.log(circleArea(43.2673));