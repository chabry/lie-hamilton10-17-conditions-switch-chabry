// switchStatements.js

// Function 1
function getDayName(dayNumber) {
  // Implement a function to return the day name based on the day number (1-7). |
  let dayName

  switch(dayNumber){
    case 1:
      dayName = 'Sunday'
      break;
    case 2:
      dayName = 'Monday'
      break;
    case 3:
      dayName = 'Tuesday'
      break;
    case 4:
      dayName = 'Wednesday'
      break;
    case 5:
      dayName = 'Thursday'
      break;
    case 6:
      dayName = 'Friday'
      break;
    case 7:
      dayName = 'Saturday'
      break;
    default:
      dayName = 'Invalid name'
  }

  return dayName
}

// Function 2
function calculateDiscount(itemType) {
  // Implement a function to calculate a discount based on the item type.(electronics -> 20%, clothing -> 15%) |
  let discount = ''
  switch(itemType.toLowerCase()){
    case 'electronics':
      discount = '20% Discount'
      break;
    case 'clothing':
      discount = '15% Discount'
      break;
    default:
      discount = 'No Discount'
  }

  return discount
}

// Function 3
function getSeason(month) {
  // Implement a function to return the season based on the month (1-12). |
  let season = ''

  switch(month){
    case 12:
    case 1:
    case 2:
      season = 'Winter'
      break;
    case 3:
    case 4:
    case 5:
      season = 'Spring'
      break;
    case 6:
    case 7:
    case 8:
      season = 'Summer'
      break;
    case 9:
    case 10:
    case 11:
      season = 'Fall'
      break;
    default:
      season = 'No season'
  }

  return season
}

// Function 4
function convertGrade(grade) {
  // Implement a function to convert a numeric grade into a letter grade. (above 90 = A, above 75 = B, under 75 = F)|
  let letterGrade = ''

  switch(true){
    case (grade >= 90):
      letterGrade = 'A'
      break;
    case (grade < 75):
      letterGrade = 'F'
      break;
    case (grade >= 75):
      letterGrade = 'C'
      break;
    default:
      letterGrade = 'Invalid grade'
  }

  return letterGrade

}


// Function 5
function getShippingCost(weight, type) {
  // Implement a function to calculate shipping cost based on weight and type.
  // (1€ per weight unit + 5€ for 'standard', 15€ for express, 20€ for overnight) |
  let shippingPrice = 0

  switch(type){
    case 'standard':
      shippingPrice += 5
      break;
    case 'express':
      shippingPrice += 15
      break;
    case 'overnight':
      shippingPrice += 20
      break;
  }

  shippingPrice += weight

  return shippingPrice
}

// Function 6
function calculateTax(amount, state) {
  //Implement a function to calculate tax based on the amount and state.      |
  let taxPercentage

  switch(state){
    case 'NY':
      taxPercentage = 8.25
      break;
    case 'CA':
      taxPercentage = 5
      break;
    case 'TX':
      taxPercentage = 0
      break;
  }

  return taxPercentage
}

// Function 8
function getTrafficSignalColor(code) {
  // Implement a function to get the traffic signal color based on the code.   |
  let signalColor = ''

  switch(code){
    case 1:
      signalColor = 'Red'
      break;
    case 2:
      signalColor = 'Yellow'
      break;
    case 3:
      signalColor = 'Green'
      break;
  }

  return signalColor
}

module.exports = {
  getDayName,
  calculateDiscount,
  getSeason,
  convertGrade,
  getShippingCost,
  calculateTax,
  getTrafficSignalColor

};


