//列挙型(enum)
enum Colors {
  Gray, //0
  Green = 100,
  Blue //1ずつインクリメント(加算)されていく
}
let myColor: Colors = Colors.Green;
console.log(Colors.Gray)
console.log(myColor);
console.log(Colors.Blue)