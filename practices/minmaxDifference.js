function minMaxDifference(num) {
  let str = num + "";
  console.log(str);
  let i = 0;
  while (i < str.length && str[i] === "9") i++;
    console.log(str.length ,i);
  let max = (i === str.length) ? str : str.replaceAll(str[i], "9");
  let min = str.replaceAll(str[0], "0");
  console.log(max ,"-", min , " ?");
  return parseInt(max) - parseInt(min);
}
console.log(minMaxDifference(11902));
console.log(minMaxDifference(99009));
