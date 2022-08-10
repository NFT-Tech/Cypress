/// <reference types="cypress" />

describe("SME Admins", ()=> {
    beforeEach(() => { 
        cy.visit("https://8wc5wa.capedia.work/")
    })

     it("Add Participant", () => {
         cy.contains("Sign In").click()
         cy.get("#id_login").type("smeeeeeacc@gmail.com")
         cy.get("#id_password").type("Reds123!")
         cy.contains("Login").click()
         cy.contains("smeadmins01").should("be.visible")
         cy.get("a[href='/smeadmins/dashboard/session/34/']").click({force:true})
         cy.contains("Add Participant").click()
         cy.get("#id_participant_email").type("cheewoei+participant1@redsquare.software", {force:true})
     })

     it("Bulk Mark Attended", () => {
        cy.contains("Sign In").click()
        cy.get("#id_login").type("smeeeeeacc@gmail.com")
        cy.get("#id_password").type("Reds123!")
        cy.contains("Login").click()
        cy.contains("smeadmins01").should("be.visible")
        cy.get("a[href='/smeadmins/dashboard/session/34/']").click({force:true})
        cy.get("#bulkSelection").check()
        cy.get("#markAttendanceButton").click()
    })

    it("Bulk Send Invitation", () => {
        cy.contains("Sign In").click()
        cy.get("#id_login").type("smeeeeeacc@gmail.com")
        cy.get("#id_password").type("Reds123!")
        cy.contains("Login").click()
        cy.contains("smeadmins01").should("be.visible")
        cy.get("a[href='/smeadmins/dashboard/session/34/']").click({force:true})
        cy.get("#bulkSelection").check()
        cy.get("#sendInvitationButton").click()
        cy.get("[placeholder='Write your message here']").type("this is from automation process",{force:true})
        cy.get("#invitationCheckbox").check()
        cy.get("#invitationFormPrimaryButton").click()
    })
})
     