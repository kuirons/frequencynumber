/**
 * Created by Admin on 2017/4/17.
 */
function fn(testString) {
    var result="";
    if(testString===""){
        result=""
    }
    else if((typeof testString)!=="string"){
        result="输入的类型不是字符串"
    }
    else {
        testString=testString.toLowerCase()
        var testArray=testString.split(" ")
        var resultArray=new Map()
        var resultFlag=true
        for(var i=0;i<testArray.length;i++) {
            var reg = /^[a-z]/
            if (testArray[i].indexOf("'") !== -1) {
                result = "请不要输入缩写"
                resultFlag=false
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
                resultFlag=false
                break
            }
        }
        if(resultFlag===true){
            var changeArraykey=new Array()
            var changeArrayValue=new Array()
            resultArray.forEach(function splitString(item, key, mapObj) {
                changeArraykey.push(key)
                changeArrayValue.push(item)
            })
            for(var i=0;i<changeArrayValue.length;i++){
                flag=changeArrayValue[i]
                for (var j=i;j<changeArrayValue.length;j++){
                    if(flag<changeArrayValue[j]){
                        var ch=changeArrayValue[i]
                        changeArrayValue[i]=changeArrayValue[j]
                        changeArrayValue[j]=ch
                        var ch=changeArraykey[i]
                        changeArraykey[i]=changeArraykey[j]
                        changeArraykey[j]=ch
                    }
                }
            }
            for(var i=0;i<changeArrayValue.length;i++){
                result=result+changeArraykey[i]+" "+changeArrayValue[i]+"\n"
            }
        }
    }
    return result
}
