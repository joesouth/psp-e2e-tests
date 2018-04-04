import config from 'config';
import { Selector } from 'testcafe'; // first import testcafe selectors

//test`LoginPage`.page`https://class.perspectives.org/Login.aspx`; // declare the fixture // specify the start page
//
// //then create a test and place your code there
// test('Clicking login button', async t => {
//   await t.click('#ctl00_lnkSign');
//
//   const location = await t.eval(() => window.location);
//
//   await t.expect(location.pathname).eql('/Login.aspx');
// });

export default class Page {
  constructor() {
    this.loginButton = Selector('#ctl00_lnkSign');
    this.usernameInput = Selector('input[name="ctl00$ContentPlaceHolder1$userLoginControl$txtUserName"]');
    this.passwordInput = Selector('input[name="ctl00$ContentPlaceHolder1$userLoginControl$txtPassword"]');
    this.submitButton = Selector('input[name="ctl00$ContentPlaceHolder1$userLoginControl$btnSubmit"]');
  }
  async login(t) {
    await t
      .typeText(this.usernameInput, config.username)
      .typeText(this.passwordInput, config.password)
      .click(this.submitButton);

    const location = await t.eval(() => window.location);
    await t.expect(location.pathname).eql('/FindAClass.aspx');
  }
}
