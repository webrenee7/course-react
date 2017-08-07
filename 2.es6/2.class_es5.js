'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*function Person() {}*/
//new原理
/*在内存中创建一个空对象
 让函数运行，并让函数中的this指向这个空对象
 返回此对象*/
//ES6的类
var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        //给类的私有属性赋值
        this.name = name;
    }

    _createClass(Person, [{
        key: 'getName',
        value: function getName() {
            console.log(this.name);
        }
    }], [{
        key: 'say',
        value: function say() {
            console.log('hello');
        }
    }]);

    return Person;
}();

var p = new Person('zfpx');
console.log(p.name);

//继承

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this));

        _this.age = age;
        return _this;
    }

    _createClass(Student, [{
        key: 'getAge',
        value: function getAge() {
            console.log(this.age);
        }
    }]);

    return Student;
}(Person());

