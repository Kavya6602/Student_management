class Student {
    constructor(name,roll_no,age,address){
        this.name = name;
        this.roll_no = roll_no;
        this.age = age;
        this.address= address;
        this.isActive = 1;
        this.marks = 65;
        this.attendance = false;
    }

    addAttendance= () => {
        this.attendance = true
    }

    updateAddress = () => {
        this.address = "Virar"
    }

    addMarks = () => {
        this.marks = 80
    }


}

const kavya = new Student('Kavya', 908, 23,"bhayander")
console.log(kavya)

kavya.addAttendance()
console.log(kavya)

kavya.updateAddress()
console.log(kavya)

kavya.addMarks();
console.log(kavya)