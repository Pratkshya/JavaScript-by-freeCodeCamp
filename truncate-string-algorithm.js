function truncateString(str, num){
  if (str.length > num){
    let str_truncated = str.slice(0,num);
    let str_append = '.'.repeat(3);
    return `${str_truncated}${str_append}`;
  }
  else if( str.length <= num){
    return str;
  }
}
console.log(truncateString("it's me", 4));