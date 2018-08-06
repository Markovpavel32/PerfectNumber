const isPerfect = num => {
  let sum = 1;
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      sum += i;
    }
  }
  return sum === num ? true : false;
}

export default isPerfect;
