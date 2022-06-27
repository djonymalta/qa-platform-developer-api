
const payloadSignIn = require('../payload/POSTSign-in.json')

function loginAuth() {
  return cy.api({
    method: 'POST',
    url: '/auth/public/sign-in',
    body: payloadSignIn,
  }).then((resp)=> {
      // expect(resp.status).to.eq(200)
    Cypress.env('token', resp.body.data.IdToken)
  })       
}
export { loginAuth }