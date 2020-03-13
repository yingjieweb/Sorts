//统计一段话中出现的字符及其个数：推荐用hash表做，但是我用的数组
let str = 'hello world';
let letter = [];
let num = [];
for(let i=0;i<str.length;i++){
  if(i === 0){
    letter[0] = str[0];
    num[0] = 1;
    console.log(`letter:${letter}`);
    console.log(`num:${num}`);
  }else{
    let flag = letter.indexOf(str[i]);
    if(flag >= 0){
      num[flag] += 1;
    }else{
      let length = letter.push(str[i]);
      num[length-1] = 1;
      console.log(`letter:${letter}`);
      console.log(`num:${num}`);
    }
  }
}
for(let i=0;i<letter.length;i++){
  console.log(letter[i] + ':' + num[i]);
}