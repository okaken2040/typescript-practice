let hobbies: any[] = ["読書", "スポーツ"];
hobbies[0] = "100";
hobbies.push(true);
// 要素に対しては何を入れてもいいが、配列型そのものに異なる型を入れることはできない。
hobbies = 100;