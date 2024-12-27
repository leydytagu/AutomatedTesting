class LoginPage {
    get inputUsername () {
        return $('input[data-test="username"]');
    }

    get inputPassword () {
        return $('input[data-test="password"]');
    }

    get loginSubmit () {
        return $('[data-test="login-button"]');
    }

    get errorPanel () {
        return $('[data-test="error"]');
    }

    async open () {
        return browser.url('https://www.saucedemo.com')
    }
}

module.exports = new LoginPage();
