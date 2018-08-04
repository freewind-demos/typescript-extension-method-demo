interface String {
    sayHello();
}

String.prototype.sayHello = function () {
    console.log(`Hello, ${this}`!)
};

"typescript".sayHello();