/// <reference types="cypress" />

export class newArticlePage {

    elements = {
        title_field:() => cy.get('#title'),
        description_field:() => cy.get('#description'),
        body:() => cy.get('#body'),
        tags_field:() => cy.get('#tags'),
        publish_button:() => cy.get('#submit')
    }

    //Set Methods
    enter_title(title) {
        this.elements.title_field().clear().type(title)
    }

    enter_description(description) {
        this.elements.description_field().clear().type(description)
    }

    enter_body(body) {
        this.elements.body().clear().type(body)
    }

    enter_tags(tags) {
        this.elements.tags_field().clear().type(tags)
    }

    click_publish() {
        this.elements.publish_button().click()
    }

    //Test Methods
    publish_article(title, description, body, tags) {
        this.enter_title(title)
        this.enter_description(description)
        this.enter_body(body)
        this.enter_tags(tags)
        this.click_publish()
    }

}

export const onNewArticlePage = new newArticlePage() 