
function oddAverage(numbers){
    let oddNumber = []
    for (const number of numbers){
      if (number % 2 === 1) {
        oddNumber.push(number);
      }
    } 
    let sum = 0;
    for (number of oddNumber){
      sum = sum + number;
    }
    const count = oddNumber.length;
    const avg = sum / count;
    console.log("Bejor Songkha gulor Jogfol= " + sum)
    console.log("Mot Bejor Songkha acy= " + count)
    return avg;
    
  }
  
  const numbers = [22, 55, 66, 52, 2 , 1, 97, 85, 54,669,87,48,49,31,];
  
  console.log("Average= "+oddAverage(numbers))
  