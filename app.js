"use strict";
function unDefined() {
    // throw new Error("エラーです①"); ←テスト1:chromeのコンソールで見るとエラーが出てる
    return undefined; // ←テスト2:chromeのコンソールで見るとundefinedが出てる
}
console.log(unDefined());
function noReturn() {
    // throw new Error("エラーです②"); ←テスト1:chromeのコンソールで見るとエラーが出ていない
    retrun;
    undefined; // ←テスト2:chromeのコンソールで見るとundefinedが出ずにエラーが返される
}
console.log(noReturn());
// voidはundefinedは返すが、neverはundefinedさえも返さない
var somethingA;
somethingA = 0;
console.log(somethingA);
var somethingB;
somethingB = 0;
console.log(somethingB);
// if文case文のいずれの条件に引っかからなかった場合にnever型になるらしい。
