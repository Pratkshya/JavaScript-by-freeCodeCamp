function confirmEnding(check_str, value){
  // let length_of_str = value.length;
  let check_result = check_str.slice(-value.length);
  if (check_result === value){
    return true;
  }else{
    return false;
  }
}

console.log(confirmEnding("Conner", "er"));