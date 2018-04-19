import config from 'config';
import { Selector } from 'testcafe';

export default class Accounts {
    constructor() {


      }
      async createUser(t, username, password) {
        return await t
          .typeText(this.usernameInput, username)
          .typeText(this.passwordInput, password)
          .click(this.submitButton)
      }

}