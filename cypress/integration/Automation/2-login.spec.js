/// <reference types="cypress" />

describe("Logins", ()=> {
     beforeEach(() => { 
         cy.visit("https://8wc5wa.capedia.work/")
     })

      it("Login with Sme Admin credential", () => {
          cy.contains("Sign In").click()
          cy.get("#id_login").type("smeeeeeacc@gmail.com")
          cy.get("#id_password").type("Reds123!")
          cy.contains("Login").click()
          cy.contains("smeadmins01").should("be.visible")
          cy.contains("Sme Admins").click()
          cy.contains("Log Out").click()
          cy.get("button[type=submit]").contains("Sign Out").click()
          cy.url().should('include', '')
          cy.contains("You have signed out.").should("be.visible")
      })

      it("Login with Coach credential", () => {
        cy.contains("Sign In").click()
        cy.get("#id_login").type("coachaccc@gmail.com")
        cy.get("#id_password").type("Reds123!")
        cy.contains("Login").click()
        cy.contains("Coach01").should("be.visible")
        cy.contains("Coach Account").click()
        cy.contains("Sign Out").click()
        cy.get("button[type=submit]").contains("Sign Out").click()
        cy.url().should('include', '')
        cy.contains("You have signed out.").should("be.visible")
    })

      it("Login with Administrator  credential", () => {
        cy.contains("Sign In").click()
        cy.get("#id_login").type("admin.demos@gmail.com")
        cy.get("#id_password").type("abc123ABC@")
        cy.contains("Login").click()
        cy.contains("admindemo").should("be.visible")
        cy.contains("admindemo").click()
        cy.contains("Log Out").click()
        cy.get("button[type=submit]").contains("Sign Out").click()
        cy.url().should('include', '')
        cy.contains("You have signed out.").should("be.visible")
      })

      it("Login with invalid credential", () => {
        cy.contains("Sign In").click()
        cy.get("#id_login").type("admin.demos@gmail.com")
        cy.get("#id_password").type("abc123ABC")
        cy.contains("Login").click()
        cy.contains("The e-mail address and/or password you specified are not correct.").should("be.visible")
      })
})
      