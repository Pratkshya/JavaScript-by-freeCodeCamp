let lunches = [];

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

function getRandomLunch(arr){
  let randomIndex = Math.floor(Math.random() * arr.length);
  if (arr.length){
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`)
  }else{
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr){
  if (arr.length > 0){
    let menuItems = arr.join(", ");
    console.log(`Menu items: ${menuItems}`);
  }else{
    console.log("The menu is empty.")
  }
}

console.log(addLunchToEnd(["pizza", "tacoos","coke"], "burger"));
console.log(removeLastLunch([]));