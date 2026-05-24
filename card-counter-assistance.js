let count = 0;
function cardCounter(card){
  let result = "";
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count --;
      break;
    default:
      break;

  }
  if (count > 0){
    result = `${count} Bet`;
  }
  else{
    result = `${count} Hold`;
  }
  return result;
}
console.log(cardCounter(8));


