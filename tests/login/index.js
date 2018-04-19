import config from 'config';
import { Selector } from 'testcafe';
import LoginPage from '../../models/login';

fixture(`Login tests`).page(`${config.baseUrl}/Login.aspx`);

const page = new LoginPage();
const LoginUserNameLabel = Selector('#ctl00_ContentPlaceHolder1_userLoginControl_lblLoginName');
const LoginButton = Selector('#ctl00_lnkSign');

test.page(config.baseUrl)('Login button should exist and redirect to /Login.aspx when clicked', async t => {
  await t.expect(LoginButton);
  await t.click(LoginButton);

  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).eql('/Login.aspx');
});

// default login method
test('Login with username', async t => {
  await page.login(t, config.username, config.password);

  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).notContains('/Login.aspx');
});

test('Login with email', async t => {
  //Verify username label contains "Username"
  await t.expect(LoginUserNameLabel.textContent).contains('Username');

  //Verify username label contains "Email"
  await t.expect(LoginUserNameLabel.textContent).contains('Email');
  await page.login(t, config.email, config.password);
});