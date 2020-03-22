module.exports = function transform(arr) {
    if (Array.isArray(arr) === false) {
        throw new Error('Error!'); 
    }
    if (arr == []) return [];

    let res = [];
  
    for (let i = 0; i < arr.length; i++) { 
      if (arr [i] === '--double-prev' && i > 0) {
        res.push(arr[i-1]);
      } else if (arr [i] === '--double-prev' && i == 0) {
        continue;
      } else if (arr[i] === '--double-next' &&  i !== arr.length - 1) { 
          res.push(arr[i+1]);
      } else if (arr[i] === '--double-next' &&  i == arr.length - 1) { 
          continue;
      } else if  (arr[i] == '--discard-next' && arr[i+2] == '--double-prev') {
        i++;  
        continue;
      } 
      else if (arr [i] === '--discard-next' && arr.length > 1) {
        i++;
      } else  if (arr[i] == '--discard-next' &&  arr[i] == arr[arr.length - 1]) {
        continue;
      } else if (arr [i] === '--discard-prev' && arr.length > 1) {
        res.pop();
          
      } else  if (arr[i] == '--discard-prev' &&  arr[i] == arr[arr.length - 1]) {
        continue;
      } else {res.push(arr[i])};
    }
    
      return res;
};
