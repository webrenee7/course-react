/*function Person() {}*/
//new原理
/*在内存中创建一个空对象
 让函数运行，并让函数中的this指向这个空对象
 返回此对象*/
//ES6的类
class Person{
    constructor(name){//给类的私有属性赋值
        this.name=name;
    }
    getName(){
        console.log(this.name);
    }
    static say(){
        console.log('hello');
    }
}
var p=new Person('zfpx');
console.log(p.name);

//继承
class Student extends Person{
    constructor(name,age){
        super();
        this.age=age;
    }
    getAge(){
        console.log(this.age)
    }
}
var s=new Student('XY',23);
console.log(s.getAge());



