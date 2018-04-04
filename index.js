import config from 'config';
import { Selector } from 'testcafe';
import LoginPage from './login';

const Login = new LoginPage();

fixture(`Home Page`).page(config.baseUrl);

const LoginButton = Selector('#ctl00_lnkSign');

test('Login button should exist', async t => {
  await t.expect(LoginButton);
});

test('Login button should redirect to /Login.aspx', async t => {
  await t.click(LoginButton);

  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).eql('/Login.aspx');
});

test.page(`${config.baseUrl}/Login.aspx`)('Login using DanielBodnar', async t => {
  await Login.login(t);
});
