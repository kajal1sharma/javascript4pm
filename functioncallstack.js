function doSomethingMore(){
    console.log("i do something more");
}
function doSomething(){
    console.log("it does something");
    doSomethingMore();
}
function abc(){
    console.log("hi iam abc");
    doSomething();
}

abc();