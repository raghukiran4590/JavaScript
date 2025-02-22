let Nm = "Raghu Kiran";
let course = "Science";

let obj1 = {
    name : Nm
};

// New ES6 way

let obj2 = {
    Nm,
    course
}; 

let n = "name";

let obj3 = {
    [n] : "Gmail Mail",
    course: "Btech"
};

let n2 = "Student";

let obj4 = {
    [n2 + " name "] : "Navaneetha",
    course: "Mtech",
    detail : function() {
        return `${this.Studentname} is a student of ${this.course}`;
    } 
};

console.log(obj4.detail());

function studentFunc(name, course) {
    return {name, course};
}

console.log(studentFunc('Vriha', 'Maths'));
