var name='zfpx',age=8;
let desc="${name}今年${age}岁了";
//模板字符串原理
function trans(str) {
    var reg=/\$\{(\w+)\}/g;
    return str.replace(reg,function () {
        return eval(arguments[1]);
    });
}
console.log(trans(desc));