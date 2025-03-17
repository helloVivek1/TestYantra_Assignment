import Tee from '../integration/Pages/WomenTee.js'
import data from '../fixtures/example.json'

describe("Task for Today",function(){

    Cypress.on("uncaught:exception",function(err,runnable){
        return false
    })
    
    let WomenTee = new Tee
    it("Task-1",function(){
        WomenTee.visitWebSite()
        WomenTee.searchForWomenTess(data.Product_Name)
        WomenTee.CheckSizeAndColor()
        WomenTee.AddToCart()
    })
})