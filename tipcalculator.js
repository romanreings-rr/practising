const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')//number of perople
const perPersonTotalDiv = document.getElementById('perPersonTotal')// amount for per person

//converting the number of peoople into a number and running that into a function
let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill=()=>{

// Getting billamount from the user and converting that into a number
   const billAmount= Number(billInput.value)
   
// Getting tip from the user and converting thst into a percentage
   const TipPercentage = Number(tipInput.value)/100

// getting the tip amount by multiply the up of the two values
  const tipAmount= billAmount*TipPercentage

// calculate the total (tip amount + bill)
  const totalAmount= billAmount + tipAmount

//calculate the per person total (total divided by number of people) and dividing the amount
  const perTotal=  totalAmount / numberOfPeople
  

// it is used to tell the total for the for the aount give by the user
//.tofixed(2) this command is used to allow the value of the limit
//.tolocalString('en-us') is used to keep the us format
  perPersonTotalDiv.innerText=`$${perTotal.toFixed(2)}`

 
}


//increasing the persons
const increasePeople = () => {
  // increment the people
    numberOfPeople +=1
    numberOfPeopleDiv.innerText=numberOfPeople
// calling the value from the up
    calculateBill()

}

//decresing the no of persons
const decreasePeople = () => {

// this is called guard class to stop the person to go in - of the value
   if(numberOfPeople<=1){
        return
    }

   // decrement the people
   numberOfPeople-=1
   numberOfPeopleDiv.innerText=numberOfPeople
   calculateBill()
}

