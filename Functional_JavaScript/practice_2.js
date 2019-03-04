function outer(){
   function inner(){
        console.log("I am inner function");
    }
    console.log("I am outer function");
}
outer();