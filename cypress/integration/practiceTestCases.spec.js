/// <reference types="cypress" />
import { onNewArticlePage } from "../support/page_object/newArticlePage.js"
//import { navigateTo } from "../support/page_object/allPages.js"

describe.only('Practice Test Cases',  () => {

    beforeEach ('Login To Application', () => {
        cy.loginToApplication()
    })

    it('Verify Post Articles API', () => {
        cy.visit('/editor')

        const title = 'Sample Article 272'
        const description = 'This is description of Sample Artcile'
        const body = 'This is the body of Sample Artcile'
        const tags = '#sampleArticle'

        cy.intercept ('POST','https://conduit.productionready.io/api/articles').as('postArticles')

        cy.intercept ('POST','https://api.realworld.io/api/articles').as('postArticles_1')

        onNewArticlePage.publish_article(title, description, body, tags)

        cy.wait('@postArticles')
        cy.wait('@postArticles_1')
        cy.get('@postArticles').then( xhr => {
            console.log(xhr)
            expect(xhr.status).to.equal(200)
            expect(xhr.request.body.article.body).to.equal('This is the body of Sample Artcile')
            expect(xhr.response.body.article.description).to.equal('This is description of Sample Artcile')
        })
    })
})