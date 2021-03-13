/**
 * conts,letの変数宣言
 */

//  var val1 = "var変数";
//  console.log(val1);

//  // var変数は上書き可能

//  val1 = "var変数を上書き";
//  console.log(val1);

//  // var変数は再宣言可能
//  var val1 = "var変数を再宣言";
//  console.log(val1);

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトでも、プロパティの変更は可能
// const val4 = {
//   name: "りく",
//   age: 25,
// };

// val4.name = "しんじょう";
// val4.adress = "Kanagawa";
// console.log(val4);

// // constで定義した配列でも、プロパティの変更は可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "りく";
// const age = 25;

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
//  */

// // 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => str + "by りく";
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// // thisの扱いについては自分で調べる

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "りく",
//   age: 25,
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;

const myProfile = ["りく", 25];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);
