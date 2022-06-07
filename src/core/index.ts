
enum NumberSystems {
    Decimal = 'Decimal',
    Binary = 'Binary',
    Octal = 'Octal',
    Hexadecimal = 'Hexadecimal',

}

enum NumberSystemsBase {
    Decimal = 10,
    Binary = 2,
    Octal = 8,
    Hexadecimal = 16,
}


type NumberSystemsType = keyof typeof NumberSystems;
export function conversionOfNumbers(from:NumberSystemsType,to:NumberSystemsType,num:number) {
    if(from === to){
        return num;
    }
    const base = from === NumberSystems.Decimal ? num : conversionDecimal(from,num);
    if(to === NumberSystems.Decimal){
        return base;
    }
    return decimalConversion(to,base);
}
/**
 * 任何进制转为10进制
 * @param from 
 * @param num 
 */
function conversionDecimal(from:NumberSystemsType,num:number) {
    let nums = num.toString().split('.');
    let n = nums[0].length;
    let b = NumberSystemsBase[from];
    let s = 0;
    let p = 0;
    while(p < n){
        s = s + Number(nums[0][p]) * Math.pow(b,(n - p));
        p++;
    }
    // point 
    if(nums.length > 1){
        n = nums[1].length;
        p = 0;
        let i = -1;
        while(p < n){
            s = s + Number(nums[1][p]) * Math.pow(b,i);
            p++;
            i--;
        }
    }
    return s;
}
/**
 * 10进制转为任何进制
 * @param to 
 * @param num 
 */
function decimalConversion(to:NumberSystemsType,num:number) {
    let b = NumberSystemsBase[to];
    let nums = num.toString().split('.');
    let s = '';
    let n = 0; // 余数
    let d = Number(nums[0]);
    let i = 0;
    do {
       i++;
       n = d % b;
       d = Math.floor(d / b);
       s = n.toString() + s;
    }
    while(d !== 0 && i < 32);
    if(nums.length > 1){
        d = Number(`0.${nums[1]}`);
        s += '.';
        i = 0;

        while (d !== 0 && i <= 32) {
            d = d * b;
            let v = d.toString().split('.');
            s += v[0];
            if(v[1]){
                d = Number(`0.${v[1]}`);
            } else {
                d = 0;
            }
            i++;
        }
    }
    return Number(s);
}

export default conversionOfNumbers;