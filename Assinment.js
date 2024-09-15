function calculateTax(income, expenses) {
  if (income < expenses) {
    const invalid = "Invalid Input";
    return invalid;
  }
  const profit = income - expenses;
  const tax = profit * 0.2;
  return tax;
}



function sendNotification(email) {
  if (email.includes("@") && email.split("@").length === 2) {
    const parts = email.split("@");
    const username = parts[0];
    const domain = parts[1];
    const message = username + " Sent you email from " + domain;
    return message;
  } else {
    return "Invalid Email";
  }
}


function checkDigitsInName(name) {

  if (typeof name !== 'string') {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i])) {
      return true;
    }
  }
  return false;
}


function calculateFinalScore(student) {
  if (
    typeof student !== 'object' ||
    typeof student.name !== 'string' ||
    typeof student.testScore !== 'number' ||
    student.testScore > 50 ||
    typeof student.schoolGrade !== 'number' ||
    student.schoolGrade > 30 ||
    typeof student.isFFamily !== 'boolean'
  ) {
    return "Invalid input";
  }

  let finalScore = student.testScore + student.schoolGrade;
  if (student.isFFamily) {
    finalScore += 20;
  }
  else {
    finalScore = false;
  }
  return finalScore >= 80;
}


function waitingTime(times, serial) {

  if (!Array.isArray(times) || typeof serial !== 'number') {
    return 'Invalid Input';
  }
  let sum = 0;
  for (let time of times) {
    sum += time;
  }
  const timeAverage = sum / times.length;
  const roundAverage = Math.round(timeAverage);

  const peopleBefore = serial - times.length - 1;

  const waitingTime = peopleBefore * roundAverage;

  return waitingTime;
}
