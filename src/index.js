module.exports = function check(str, bracketsConfig) {
  const openBreackets = ['(', '{', '[','1', '3', '5']
  const otherValues = ['7', '8', '|']
  const dictionary = {
    ')':'(',
    ']':'[',
    '}':'{',
    '2':'1',
    '4':'3',
    '6':'5',
    '7':'7',
    '8':'8',
    '|':'|',
  }
  
  function isOpenBreacket (str){
    let stack = []
    let count = 0
      for(i = 0; i < str.length; i++){
        let curr = str[i]
       
        if(openBreackets.includes(curr)){
          stack.push(curr)
        } 
        else if(otherValues.includes(curr)){
         //]] stack.push(curr)
          count += 1
        } 
        else {
          if(stack.length === 0){
            return false
          }
          let topElem = stack[stack.length - 1]
          if(dictionary[curr] === topElem){
            stack.pop()
          } else {
            return false
          }
        }
      }

      if(count % 2 === 0 && count > 0){
        return true
      } else if(stack.length === 0 && count % 2 === 0){
        return true
      } else {
        return false
      }
     
  }
 return isOpenBreacket(str)
}
