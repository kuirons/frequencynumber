/**
 * Created by Admin on 2017/4/17.
 */
function fn(testString) {
    var result
    if(testString===""){
        result=""
    }
    else if((typeof testString)!=="string"){
        result="输入的类型不是字符串"
    }
    else {
        testString.toLowerCase()
        var testArray=testString.split("\\s+")
        var resultArray
        for(var i=0;i<testArray.length;i++){
            var reg= /^[A-Za-z]+$/;
            if(reg.test(testArray[i])){
                if(resultArray.has(testArray[i])){
                    resultArray.set(testArray[i],resultArray.get(testArray[i]+1))
                }
                else{
                    resultArray.set(testArray[i],1)
                }
            }
            else if(testArray[i].indexOf("'")!==-1){
                result="请不要输入缩写"
                break
            }
            else{
                result="输入的字符串包含非法字符"
                break
            }
        }
    }
    return result
}