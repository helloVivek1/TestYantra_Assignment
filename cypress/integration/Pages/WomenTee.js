class Tee{
    selectors = {
        url : "https://magento.softwaretestingboard.com/",
        womenText : '[id="ui-id-4"]',
        Tops : '[id="ui-id-9"]',
        Tees : '[id="ui-id-13"]',
        TeesUrl : 'https://magento.softwaretestingboard.com/women/tops-women/tees-women.html',
        clickOnProduct : '[alt="Desiree Fitness Tee"]',
        singleProductUrl : 'https://magento.softwaretestingboard.com/desiree-fitness-tee.html',
        checkSize : '#option-label-size-143-item-167',
        color_select : '#option-label-color-93-item-56',
        clickOnCartButton : '[title="Add to Cart"]',
        LastMessage : 'You added Desiree Fitness Tee to your '


    }

    visitWebSite(){
        cy.visit(this.selectors.url)
    }

    searchForWomenTess(){
        cy.get(this.selectors.womenText).trigger("mouseover")
        cy.get(this.selectors.Tops).trigger("mouseover")
        cy.get(this.selectors.Tees).click()
        cy.get(this.selectors.TeesUrl).should('include','/tops-women/tees-women.html')
    }

    CheckSizeAndColor(){
        cy.get(this.selectors.clickOnProduct).click()
        cy.get(this.selectors.singleProductUrl).should('include','/desiree-fitness-tee.html')
        cy.get(this.selectors.checkSize).click()
        cy.get(this.selectors.color_select).click()

    }

    AddToCart(){
        cy.get(this.selectors.clickOnCartButton).click()
        cy.get(this.selectors.LastMessage).should('be.visible')

    }




}

export default Tee