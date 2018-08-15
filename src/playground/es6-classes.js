class Person{
    constructor(name='Anonimous',age=0){
        this.name = name
        this.age = age
    }
    getGreetings(){
        return `Hi I am ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}


class Student extends Person{
    constructor(name,age,major){
        super(name,age) //Calling parent constructor function
        this.major = major
    }
    hasMajor(){
        return !!this.major // this will return boolean true or false 

    }
    getDescription(){
        let description = super.getDescription()
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description
    }
}


class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age)
        this.homeLocation = homeLocation
    }
    getGreetings(){
        let greatings = super.getGreetings()
        if(this.homeLocation){
            greatings+=` I am visiting from ${this.homeLocation}`
        }
        return greatings
    }
}

const me = new Student('Alex', 23,'Computer Science')
const other = new Student('Alex',22)
console.log(me.getDescription())
console.log(other.getDescription())