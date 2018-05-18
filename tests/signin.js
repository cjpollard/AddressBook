module.exports = {
  'Sign in' : function (browser) {
    browser
      .url('http://www.getyourmobi.co.uk/admin')
      .waitForElementVisible('form#login', 5000)
      .setValue('input[type=text]', 'colin.pollard')
      .setValue('input[type=password]', 'polkadot')
      .click('input[type=submit]')
      .waitForElementVisible('a[class="time_button"]', 5000)
      .click('a[href*="signin-log.php?action=signin"]')
      .pause(1000)
      .assert.containsText('body', 'Action complete, thank you for signing in.')
      .end();
  }
};