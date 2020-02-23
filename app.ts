let myName = 128;

//関数の戻り値に対する型指定
function returnMyName(): number {
  return myName;
}

console.log(returnMyName());

//voidは、あらゆる型の戻り値を許可しない。
//ただしconsole.logは実行できる。

function sayHello(): void {
  console.log("Hello!");
  return myName;
}

sayHello();