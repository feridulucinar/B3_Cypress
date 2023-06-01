/** Variables naming rules: same like java
 * Primitives Data Types;
 * number: 123, 12.5, (int, double, long vs.vs.)
 * String: 'dont give up'
 * Boolean: true - false
 * Undefined: variables does not have avalue
 * null
 */

/**
 * There are 3 different types of varables
 * var: variable abbreviation
 * let: so Let is equaş to ..
 * const: short for constant, which means constant
*/

var a;
var name = "Mike"
console.log(a)
a = name;
console.log(a);
a=1;
console.log(a);
a=true;
console.log(a);

var age = 36;
var name_object = {firstname:"Jake", lastname:"Masters"};
var truth = false;
var skills =["HTML","CSS","JS"]
var a=null;
console.log(a);

//object
var student={
    firstname: "Kate",
    lastname:"Masters",
    age:22,
    height:167,

    fullName:function(){
        return this.firstname+ " " +this.lastname
    }
}

const ageValue = student.age;
//to run in console
console.log(ageValue);
console.log(student.fullName());
