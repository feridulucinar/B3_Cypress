class Car{

constructor(carname,model,year){
    this.carname=carname;
    this.model=model;
    this.year=year;
}

carAge(){
    let date = new Date(); // comes from JS
    return date.getFullYear()-this.getFullYear
}

}

var myCar = new Car("Seat","Leon","2005");
console.log(myCar.carname,myCar.model);
console.log("The car age is ",myCar.carAge());