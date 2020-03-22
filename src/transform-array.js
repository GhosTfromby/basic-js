module.exports = function transform(array) {
    if(!Array.isArray(array)) throw 'Error';

    for(let index = 0;index <= array.length; index++){
           switch(array[index]){
               case '--double-next':
                   index+1 < array.length ? (array[index] = array[index+1]) : array.splice(index,1);
                       index = -1;
                   break;
               case '--double-prev':
                   index-1 >= 0 ? (array[index] = array[index-1]) : array.splice(index,1)
                       index = -1;
                   break;
           }
        }
               
   
    for(let index = 0;index <= array.length; index++){
        switch(array[index]){
            case '--discard-prev':
                    index-1 >= 0 ? array.splice(index-1,2) :  array.splice(index,1)
                   index = -1;
                break;  
            case '--discard-next':
                index+1 < array.length ? array.splice(index,2): array.splice(index,1);
                    index = -1;
            break;
        }
        
    }
    return array; 
};