"use strict";
//列挙型(enum)
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue"; //1ずつインクリメント(加算)されていく
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log(Colors.Gray);
console.log(myColor);
console.log(Colors.Blue);
