/// <reference types="cypress" />
const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true, verbose: true }); // options can be passed, e.g. {allErrors: true}

export const validatePOSTSigninSchema = (jsonSchema, body) => {
  cy.fixture(jsonSchema).then((SChema) => {
    const validate = ajv.compile(SChema);
    const valid = validate(body);
    if (!valid){
        cy.log(validate.errors).then(() => {
            throw new Error("Falha no Contrato. Ver log acima");
          });
    } else {
        Cypress.log({
            name: 'jsonSchema',

            displayName: 'schema',

            message: `${jsonSchema} validado!`,

        })
    }
     
  });
};
