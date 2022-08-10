/// <reference types="cypress" />

describe("Register", ()=> {
    beforeEach(() => { 
        cy.visit("https://8wc5wa.capedia.work/")
    })

     it("Register As SME Admins", () => {
         cy.contains("Sign In").click()
         cy.contains("Register").click()
         cy.contains("Create your Capedia account").should("be.visible")
         cy.get("#id_first_name").type("sesamee")
         cy.get("#id_last_name").type("opens")
         cy.get("#id_email").type("opensesame@redsqure.software")
         cy.get("#id_password1").type("Reds123!")
         cy.get("#id_password2").type("Reds123!")
     })

     it("Register As Coach", () => {
        cy.get("#sign-up-link").click()
        cy.contains("Create your Capedia account").should("be.visible")
        cy.get("#id_first_name").type("sesamee")
        cy.get("#id_last_name").type("opens")
        cy.get("#id_email").type("opensesame@redsqure.software")
        cy.get("#id_password1").type("Reds123!")
        cy.get("#id_password2").type("Reds123!")
    })
})
     