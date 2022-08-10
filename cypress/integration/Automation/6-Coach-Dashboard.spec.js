/// <reference types="cypress" />

describe("Coach Dashboard", ()=> {
    beforeEach(() => { 
        cy.visit("https://8wc5wa.capedia.work/")
    })

     it("Create A session", () => {
        cy.contains("Sign In").click()
        cy.get("#id_login").type("coachaccc@gmail.com")
        cy.get("#id_password").type("Reds123!")
        cy.contains("Login").click()
        cy.contains("Coach01").should("be.visible")
        cy.contains("Dashboard").click({force:true})
        cy.contains("Create Session").click()
        cy.get("#id_sme_profile").select("smeeeeeacc@gmail.com")
        cy.get("#id_course").select("Youtube channel tutorial")
        cy.get("#id_final_price").type("10000")
        cy.get('[type="radio"]').check("In-person")
        cy.get("#id_link").type("https://meet.google.com/nqc-ugth-mcg")
        cy.get("#id_session_date").type("2022-10-08")
        cy.get("#id_start_time").type("08:00")
        cy.get("#id_end_time").type("17:00")
        cy.contains("Save As Draft").click()
     })

     
})
     