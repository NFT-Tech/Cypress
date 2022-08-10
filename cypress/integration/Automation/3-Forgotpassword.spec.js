/// <reference types="cypress" />

describe("Forgot Password", ()=> {
    beforeEach(() => { 
        cy.visit("https://8wc5wa.capedia.work/")
    })

     it("Forgot Password", () => {
         cy.contains("Sign In").click()
         cy.contains("Forgot Password?").click()
         cy.get("#id_email").type("admin.demos@gmail.com")
     })
    })