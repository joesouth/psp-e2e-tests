import config from 'config';
import { Selector } from 'testcafe';

export default class Page {
  constructor() {
    this.loginButton = Selector('#ctl00_lnkSign');
    this.usernameInput = Selector('input[name="ctl00$ContentPlaceHolder1$userLoginControl$txtUserName"]');
    this.passwordInput = Selector('input[name="ctl00$ContentPlaceHolder1$userLoginControl$txtPassword"]');
    this.submitButton = Selector('input[name="ctl00$ContentPlaceHolder1$userLoginControl$btnSubmit"]');
    this.securityDialogExit = Selector('div[aria-labelledby="ui-dialog-title-EnableSecurity"] .ui-dialog-titlebar a');
    this.myToolsMenu = Selector('a[title="Advanced Tools"][class*="MyTools-Nav-Level1"]');

    MyTools-Nav-Level1 
    
  }
  async login(t, username, password) {
    return await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.submitButton)
      .click(this.securityDialogExit)
      .hover(this.myToolsMenu)
      .wait(10000);
  }

  async closeSecurityDialog(t, securityDialogExit){
    return await t
      .click(this.securityDialogExit);
  }
}

