function sc(arr,n){
  for(let i=0;i<n;i++){
    let result=[];
    for(let j=0;j<arr.length;j++){
      
      if(arr[j]%2===1){
        result.push(arr[j]*3+1+(++j>(arr.length-1)?0:arr[j]));
      }else{
        result.push(arr[j]/2,arr[j]/2)
      }
    }
    arr=result;
  }
  return arr;
}

console.log(sc([3,4,5],6))

//https://www.codewars.com/kata/56fe9d579b7bb6b027000001