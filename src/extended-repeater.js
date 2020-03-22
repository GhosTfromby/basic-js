module.exports = function repeater(str, options) {
    throw 'Not implemented';
    function repStr(string, sep, count) {
        let newStr = "";
        for (i = 1; i <= count; i++) {
          newStr += String(string);
          if (i < count) {
            newStr += sep;
          }
        }
        return (string && count === undefined) ? string : newStr;
      }
  
      let addStr = repStr(
        options.addition,
        options.additionSeparator || "|",
        options.additionRepeatTimes
      );
  
      return repStr(str + addStr, options.separator || "+", options.repeatTimes);
};
  