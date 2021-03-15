module.exports = function check(str, bracketsConfig) {
  let i = 0;
  while (i < str.length) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if ((str[i] === bracketsConfig[j][1]) && (bracketsConfig[j][0] != bracketsConfig[j][1])) {
        return false;
      } else if ((str[i] === bracketsConfig[j][0]) && (str[i + 1] === bracketsConfig[j][1])) {
        str = str.replace(str.slice(i, i + 2), '');
        i = 0;
        break;
      } else if (j + 1 === bracketsConfig.length) {
        i++;
      }
    }
  }
  return (str.length === 0) ? true : false;
}