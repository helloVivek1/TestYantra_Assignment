import {WomenTee} from '../integration/pages/page1.js'
describe("Task for Today",function(){

    Cypress.on("uncaught:exception",function(err,runnable){
        return false
    })
    it("Task-1",function(){
        visitWebSite()
        searchForWomenTess()
        CheckSizeAndColor()
        AddToCart()
    })
})