// 숫자를 하나 전달하면, 객체를 리턴하도록 만드는데,
// 콜백 1 : 해당 숫자가 '짝수'인지 '홀수'인지
// 콜백 2 : 1 ~ 숫자 까지의 합을 받아오기.
// 객체의 키값은 마음대로 해도 된다.

// 숫자를 하나 전달하면
function test(num, callback1, callback2){
    // 짝홀 여부
    let type = callback1(num);

    // 해당 숫자까지의 총합
    let sum = callback2(num);

    // 객체에 담는다.
    let obj = {
        여부 : type,
        합 : sum
    }
    // 객체를 리턴한다.
    return obj;
}

function checkType(num){
    return num%2==1? '홀수' : '짝수'; 
}

function getSum(num){

    // 전체 합을 담을 변수
    let sum = 0;

    // 문을 돌려 각각 모두 더한다.
    for(let i=0; i<num; i++){
        sum += i+1;
    }

    // 총합을 리턴한다.
    return sum;
}
// 10;
// let obj = {
//     여부 : '홀수',
//     합 : 55
// }
console.log(test(10, checkType, getSum).합);




