//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn,thisValue,arg){
  //Call the function ON thisValue, with this arg
  return fn.call(thisValue,arg);
}

