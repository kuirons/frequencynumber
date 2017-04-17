/**
 * Created by Admin on 2017/4/17.
 */
/*
"use strict"
var _=require("lodash")
var chai=require("chai")
var sinon=require("sinon")
var sinonChai=require("sinon-chai")
var expect=chai.expect
chai.use(sinonChai)

var main=require("./test.js")
*/
describe("fn", function () {
    it("testcase1", function () {
        expect("").toEqual(fn(""));
    });
    it("testcase2", function () {
        expect("输入的类型不是字符串").toEqual(fn(123));
    });
    it("testcase3", function () {
        expect("输入的类型不是字符串").toEqual(fn(12.3));
    });
    it("testcase4", function () {
        var testarry=new Array([1,"2"])
        expect("输入的类型不是字符串").toEqual(fn(testarry));
    });
    it("testcase5", function () {
        expect("请不要输入缩写").toEqual(fn("it's a Pig"));
    });
});