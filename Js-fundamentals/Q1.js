function outerFunction(parameter) {
    let a = "outer variable";

    function innerFunction() {
        console.log(a);
        console.log(parameter);
    }
    return innerFunction;
}
const b = outerFunction("outer parameter");
return b();