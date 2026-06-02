let lunches = [];

//arr and lunches points to the same memory address
function addLunchToEnd(arr, str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
  
}

function addLunchToStart(arr,str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr){
  let poppedStr = arr.pop();
  if(poppedStr){
    console.log(`${poppedStr} removed from the end of the lunch menu.`);
  }else{
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr){
  let poppedStr = arr.shift();
  if(poppedStr){
    console.log(`${poppedStr} removed from the start of the lunch menu.`);
  }else{
    console.log("No lunches to remove.");
  }
  return arr;
}


//test case 1
console.log(addLunchToEnd(["pizza", "tacoos","coke"], "burger"));
//test case 2
console.log(removeLastLunch([]));