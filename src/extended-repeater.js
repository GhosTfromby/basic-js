module.exports = function repeater( str, options ) {
  const {
      repeatTimes = 1,
      separator = '+',
      addition = '',
      additionRepeatTimes = 0,
      additionSeparator = ''
  } = options;

  const multiplyAdditional = repeatStr(addition + additionSeparator, additionRepeatTimes, additionSeparator);

  const additionExpr = ( additionRepeatTimes < 2 ) ? addition : multiplyAdditional;

  return repeatStr(str + additionExpr + separator, repeatTimes, separator)
};

function repeatStr (str, repeatTimes, separator) {
  return str.repeat(repeatTimes).slice(0, -separator.length)
}