import config from 'config';
import { Selector } from 'testcafe';
import LoginPage from '../../models/login';

fixture(`Login tests`).page(`${config.baseUrl}/Login.aspx`);

const page = new LoginPage();
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
  await t.expect(location.pathname).eql('/FindAClass.aspx');
});
