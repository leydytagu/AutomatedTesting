const LoginPage = require('../pageobjects/login.page');
const { validUsernameCredentials, validPassword } = require("../data/users");
const logger = require('@wdio/logger').default;
const log = logger('loginTest');

describe('Login Tests', () => {
    it('UC-1 Test Login form with empty credentials', async () => {
        log.warn('UC-1 Test Login form with empty credentials');

        await LoginPage.open()

        await LoginPage.inputUsername.setValue('')
        await LoginPage.inputPassword.setValue('')

        await LoginPage.inputUsername.clearValue()
        await LoginPage.inputPassword.clearValue()

        await LoginPage.loginSubmit.click()

        const errorText = await LoginPage.errorPanel.getText();

        log.info(`Error message received: ${errorText}`);

        expect(errorText).toContain('Username is required')
    })

    it('UC-2 Test Login form with credentials by passing Username', async () => {
        log.info('UC-2 Test Login form with credentials by passing Username');
        await LoginPage.open()

        await LoginPage.inputUsername.setValue('testUsername')
        await LoginPage.inputPassword.setValue('')

        await LoginPage.inputPassword.clearValue()

        await LoginPage.loginSubmit.click()

        const errorText = await LoginPage.errorPanel.getText();

        log.info(`Error message received: ${errorText}`);

        expect(errorText).toContain('Password is required')
    })

    it('UC-3 Test Login form with credentials by passing Username & Password', async () => {
        log.info('UC-3 Test Login form with credentials by passing Username & Password');
        await LoginPage.open()

        const randomIndex = Math.floor(Math.random() * validUsernameCredentials.length);
        const randomUsername = validUsernameCredentials[randomIndex];

        await LoginPage.inputUsername.setValue(randomUsername)
        await LoginPage.inputPassword.setValue(validPassword)

        await LoginPage.loginSubmit.click()

        log.info('Success login with username and password');

        expect(await browser.getTitle()).toEqual('Swag Labs')
    })
});
