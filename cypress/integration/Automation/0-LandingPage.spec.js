/// <reference types="cypress" />

const { contains } = require("cypress/types/jquery")

describe("Landing Page", ()=> {
    beforeEach(() => { 
        cy.visit("https://8wc5wa.capedia.work/")
    })

     it("Applying the Courses", () => {
        cy.get(".pb-4").click()
        cy.url().should("include", "/bookings/courses/")
        cy.get("input[placeholder='Search Course']").type("Room Design Interier")
        cy.get("input[placeholder='Search Course']").type("{enter}")
        cy.contains("Room Design Interier").click()
        cy.contains("Enquire Now").click()
        cy.get("#id_enquirer").type("Abu bin ali")
        cy.get("#id_email").type("smeadmin@redsquare.software")
        cy.get("#id_phone_number").type("0123456789")
        cy.get("#id_organization").type("Redsquare Software")
        cy.get("#id_number_of_participant").type("27")
        cy.get("#id_date_training").type("2022-12-12")
        cy.get("#id_course_delivery_method").select("1")

        //comments
     })
})
     