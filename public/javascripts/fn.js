function handleString(testArray, result, resultFlag, resultArray) {
    for (var i = 0; i < testArray.length; i++) {
        var reg = /^[a-z]*$/
        if (testArray[i].indexOf("'") !== -1) {
            result = "请不要输入缩写"
            resultFlag = false
            break
        }
        else if (reg.test(testArray[i])) {
            if (resultArray.has(testArray[i])) {
                resultArray.set(testArray[i], resultArray.get(testArray[i]) + 1)
            }
            else {
                resultArray.set(testArray[i], 1)
            }
        }
        else {
            result += "输入的字符串包含非法字符"
            resultFlag = false
            break
        }
    }
    return {result: result, resultFlag: resultFlag};
}
function sortS(changeArrayValue, i, changeArraykey) {
    flag = changeArrayValue[i]
    for (var j = i; j < changeArrayValue.length; j++) {
        if (flag < changeArrayValue[j]) {
            var ch = changeArrayValue[i]
            changeArrayValue[i] = changeArrayValue[j]
            changeArrayValue[j] = ch
            var ch = changeArraykey[i]
            changeArraykey[i] = changeArraykey[j]
            changeArraykey[j] = ch
        }
    }
    return {j: j, ch: ch, ch: ch};
}
function spliceString(resultArray, result) {
    {
        var changeArraykey = new Array()
        var changeArrayValue = new Array()
        resultArray.forEach(function splitString(item, key, mapObj) {
            changeArraykey.push(key)
            changeArrayValue.push(item)
        })
        for (var i = 0; i < changeArrayValue.length; i++) {
            var __ret = sortS(changeArrayValue, i, changeArraykey);
            var j = __ret.j;
            var ch = __ret.ch;
            var ch = __ret.ch;
        }
        for (var i = 0; i < changeArrayValue.length; i++) {
            result = result + changeArraykey[i] + " " + changeArrayValue[i] + "\n"
        }
    }
    return result;
}
function judge(testString, result) {
    testString = testString.toLowerCase()
    var testArray = testString.split(/[ ]+/)
    var resultArray = new Map()
    var resultFlag = true
    var __ret = handleString(testArray, result, resultFlag, resultArray);
    result = __ret.result;
    resultFlag = __ret.resultFlag;
    if (resultFlag === true) result = spliceString(resultArray, result);
    return {testString: testString, result: result};
}
/**
 * Created by Admin on 2017/4/17.
 */
function fn(testString) {
    var result = "";
    if (testString === "") {
        result = ""
    }
    else if ((typeof testString) !== "string") {
        result = "输入的类型不是字符串"
    }
    else {
        var __ret = judge(testString, result);
        testString = __ret.testString;
        result = __ret.result;
    }
    return result
}
