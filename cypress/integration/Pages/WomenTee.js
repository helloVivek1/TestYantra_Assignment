import data from "../../fixtures/example.json"
class Tee{
    selectors = {
        url : "https://magento.softwaretestingboard.com/",
        womenText : '[id="ui-id-4"]',
        Tops : '[id="ui-id-9"]',
        Tees : '[id="ui-id-13"]',
        TeesUrl : 'https://magento.softwaretestingboard.com/women/tops-women/tees-women.html',
        serchBox : '[id="search"]',
        clickOnWomenTees : '[id="qs-option-0"]',
        fiveProductList : '[class="products list items product-items"]',
        printProductName : '[class="item product product-item"] div div strong a',

        clickOnProduct : '[class="products list items product-items"] >li',
        singleProductUrl : 'https://magento.softwaretestingboard.com/minerva-lumatech-trade-v-tee.html',
        checkSize : '#option-label-size-143-item-167',
        color_select : '#option-label-color-93-item-50',
        clickOnCartButton : '[title="Add to Cart"]',
        LastMessage : 'You added Desiree Fitness Tee to your '


    }

    visitWebSite(){
        cy.visit(this.selectors.url)
    }

    searchForWomenTess(Product_Name){
        cy.get(this.selectors.womenText).trigger("mouseover")
        cy.get(this.selectors.Tops).trigger("mouseover")
        cy.get(this.selectors.Tees).click()
        cy.get(this.selectors.TeesUrl).should('include','/tops-women/tees-women.html')
        cy.get(this.selectors.serchBox).type(Product_Name)
        cy.get(this.selectors.clickOnWomenTees).click()
        cy.get(this.selectors.fiveProductList).should('have.length',5),
        // cy.get(this.selectors.clickOnProduct).eq(2).click()
        cy.log(this.selectors.printProductName),
        this.selectors.printProductName.each(function(res){
            if(res.contains() == data.current_Product_Name){
                cy.wrap(res).click()
            }
        })
       
        
        cy.get(this.selectors.singleProductUrl).should('include','minerva-lumatech-trade-v-tee.html')
        

    }

    CheckSizeAndColor(){
        
        cy.get(this.selectors.checkSize).click()
        cy.get(this.selectors.color_select).click()

    }

    AddToCart(){
        cy.get(this.selectors.clickOnCartButton).click()
        cy.get(this.selectors.LastMessage).should('be.visible')

    }




}

export default Tee