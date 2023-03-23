describe('Login', () => {
	it('should login user', () => {
		cy.intercept('POST', '/v1/auth/login', {
			statusCode: 200,
			body: {
				resourceType: 'AuthJWT',
				accessToken: 'XXX',
				tokenType: 'bearer',
			},
		}).as('loginReq');

		cy.visit('/');

		cy.get('[data-cy="loginForm"]').within(() => {
			cy.get('input[type=email]').type('arnaud.steiner@etu.unistra.fr');
			cy.get('input[type=password]').type('DWEB2023');

			cy.root().submit();
		});

		cy.get('loginReq').its('response.statusCode').should('eq', 200);
	});
});

export default {};
