"use strict";
exports.__esModule = true;
/**
 * 类 class
 */
var Student = /** @class */ (function () {
    //
    // 构造函数的参数上使用public,等价于创建同名的成员变量
    //
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
exports.Student = Student;
var student = new Student("a", "b", "c");
