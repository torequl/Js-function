function evenAverage(numbers){
    let evenNumber = []
    for (number of numbers)
    if (number % 2 === 0) {
      evenNumber.push(number);
    }
    let sum = 0;
    for (number of evenNumber)
    sum = sum + number;
    
    const count = evenNumber.length;
    
    console.log("Jor Songkha gulor Jogfol= " + sum)
    console.log("Mot Jor Songkha acy= " + count)
    const avg = sum / count;
    return avg;
  }
  
  const numbers = [25,55,64,26,9,8,4,15,34,58,8,2]
  
  console.log("Average= "+evenAverage(numbers));