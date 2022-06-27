/// <reference types="cypress" />
import * as POSTSigin from "../services/sign-in/requests/POSTSign-in.request";
import { validatePOSTSigninSchema } from "../../support/validatePOSTSigninSchema";
describe("POST Sign-in - Validate response attributes", () => {
  it("Should validate the API contract | POST Sign-in", () => {
    POSTSigin.loginAuth().then(({ status, body }) => {
      expect(status).to.equal(200);
      validatePOSTSigninSchema("POSTSign-In-Schema", body);
    });
  });

  // it("Should validate the Json attributes | Type | Visibility | Text | Comparation values | Others", () => {
  //   POSTSigin.loginAuth().then((response) => {
  //     expect(response.body).to.have.property('code')
  //     expect(response.body).to.have.property('code', 200)
  //     expect(response.body).to.have.property('data')
      
  //     // Validação da propriedade AccessToken
  //     expect(response.body.data).to.have.property('AccessToken')
  //     expect(response.body.data.AccessToken).not.to.be.empty
  //     expect(response.body.data.AccessToken).to.be.a('String')

  //     // Validação da propriedade ExpireIn
  //     expect(response.body.data).to.have.property('ExpiresIn')
  //     expect(response.body.data.ExpiresIn).not.to.be.null
  //     expect(response.body.data.ExpiresIn).to.be.a('Number')
  //     expect(response.body.data.ExpiresIn).to.eq(3600)
      
  //     // Validação da propriedade IdToken
  //     expect(response.body.data).to.have.property('IdToken')
  //     expect(response.body.data.IdToken).not.to.be.empty
  //     expect(response.body.data.IdToken).to.be.a('String')
      
  //     // Validação da propriedade RefreshToken
  //     expect(response.body.data).to.have.property('RefreshToken')
  //     expect(response.body.data.IdToken).not.to.be.empty
  //     expect(response.body.data.IdToken).to.be.a('String')


  //     // Validação da propriedade TokenType
  //     expect(response.body.data).to.have.property('TokenType')
  //     expect(response.body.data.TokenType).not.to.be.empty
  //     expect(response.body.data.TokenType).to.be.a('String')
  //     expect(response.body.data.TokenType).to.be.eql('Bearer')

  //     // Validação da propriedade message
  //     expect(response.body).to.have.property('message')
  //     expect(response.body.message).to.be.a('String')
  //     expect(response.body.message).to.be.equal('Usuário(s) logado(s) com sucesso!')
      
  //     // Validação da propriedade message
  //     expect(response.body).to.have.property('success')
  //     expect(response.body.success).to.be.a('Boolean')
  //     expect(response.body.success).to.be.equal(true)
  //   });
  // });
});
