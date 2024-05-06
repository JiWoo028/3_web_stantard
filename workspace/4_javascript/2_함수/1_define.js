function printTest() {
    console.log('Hello world');
}

const temp1 = function (){
    console.log('Hello javascript');
}

const temp2 = function name(){
    console.log('Hello javascript');
}

const temp3 = (arg) => {
    console.log(arg);
}

printTest();
temp1();
// name(); 에러!
temp2();
temp3('이거 출력해');







