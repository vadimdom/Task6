function MethodCaller() {
    this.func = null;
}


MethodCaller.prototype.registerMethod = function(func) {
    if (this.func !== null) {
        throw new Error("Method is registered");
    } else {
        this.func = func;
    }
};

MethodCaller.prototype.unregisterMethod = function() {
    this.func = null;
};

MethodCaller.prototype.callMethod = function() {
    if (this.func === null) {
        throw new Error("Method is not registred");
    } else {
        this.func();
    }
};

var  func_1 = function() {
    alert("Test function");
}

var caller = new MethodCaller();
caller.registerMethod(func_1);
console.log("Register! Okay!");
caller.unregisterMethod();
console.log("Unregister! Okay!");
caller.registerMethod(func_1);
console.log("Register! Okay!");
caller.callMethod();
