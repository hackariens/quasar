describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://quasar.traefik.me');
    cy.screenshot('first-page');
  })
})