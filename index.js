function receivesAFunction (callback) {
    console.log(callback());
  }
  
    receivesAFunction(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});
function returnsANamedFunction(){
    return function hi(){
    }
}
function returnsAnAnonymousFunction(){
     return function(){

    }
}