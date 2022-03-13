// CLASS FOR CARS
class Cars {
    constructor(regNum, arrivalTime, departureTime) {
        this._reg = regNum;
        this._arrival = arrivalTime;
        this._departure = departureTime;
        this._amountPaid = 0;
        this._costPerHour = 1.5;
        this._hasPaid = false;
    }
    get reg() {
        return this._reg;
    }
    get charge() {
        return (this._departure - this._arrival) * this._costPerHour;
    }
    moneyInserted(amountInserted) {
        this._amountPaid =+ amountInserted;
    }
    checkIfPaid() {
        if (this._amountPaid === this.charge) {
            this._hasPaid = true;
        }
    }
}

const AA11AAA = new Cars("AA11AAA", 3, 8);
console.log(AA11AAA);
AA11AAA.moneyInserted(7.5);
AA11AAA.checkIfPaid();
console.log(AA11AAA);
// SUB CLASS OF CARS
class Example extends Cars{
    constructor(colour, regNum, arrivalTime, departureTime){
        // super would need to be same parameters of Cars constructor 
        super(regNum, arrivalTime, departureTime);
            this._CarColour = colour;

    }
    exampleFunction(){

    }
}
// new instance created
const thisThing = new Example("red", "AA11AAA", 3, 8);

console.log(thisThing.charge);
thisThing.moneyInserted(7.5)
thisThing.checkIfPaid();
console.log(thisThing)
Another example
class Car{
    constructor(regnum){
    this._regnum = regnum;
    this._hours = 0;
    this._charge = 0.00;
    }
    get regnum(){
    return this._regnum;
    }
    get hours(){
    return this._hours;
    }
    get charge(){
    return this._charge;
    }
    increaseHours(){
    this._hours++;
    this._charge += 1.50;
    }
   }
   const pay = (reg, hr) => {
    const car = new Car(reg);
    for (i = 0; i < hr; i++){
    car.increaseHours();
    }
    return `You need to pay £${car.charge} for ${car.hours} hours.`;
   }
   console.log(pay("M7 CAR", 5)); //Output: You need to pay £7.5 for 5 hours.