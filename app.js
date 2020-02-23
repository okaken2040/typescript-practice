"use strict";
var myName = 128;
//関数の戻り値に対する型指定
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//voidは、あらゆる型の戻り値を許可しない。
//ただしconsole.logは実行できる。
function sayHello() {
    console.log("Hello!");
    return myName;
}
sayHello();
