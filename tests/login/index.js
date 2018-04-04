import config from 'config';
import { Selector } from 'testcafe';
import Page from './page';

fixture(`Login tests`).page(config.baseUrl);

const page = new Page();

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
  await page.login(t);
});
