

module.exports = memoize;
var cache = [];

function memoize(num){

  if(!cache[num]){
    console.log("Computing...");
    result = num*num;
    cache[num] = result;
    cache.push(result);
    console.log(cache);
  }
  return cache[num];
}



