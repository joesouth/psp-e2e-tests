# Install: Setting Up End-to-End Testing with Test Cafe

Edge to edge frontend testing using automated browser scripting to test website functionality. As of April 2018, Perspectives has chosen Test Cafe as the e2e scripting platform of choice, and a GIT repository has been created to integrate and store relevant tests. The following steps detail the installation of the Perspectives e2e setup for use on a local machine (Windows or Linux). Once installed, developers can use the local implementation to write test scripts for evaluating bug fixes and feature enhancements. Separate branches may be maintained for each relevant Redmine ticket.

## Steps

### 1. Download and Install Node JS (v. 9+)
Link: https://github.com/creationix/nvm

### 2. Install the latest version of Node JS
```
nvm install node
nvm use node
```
### 3. Create system environment variables

#### *Windows*
```
set PSP_TEST_USERNAME=[your username]
set PSP_TEST_PASSWORD=[your password]
set PSP_TEST_EMAIL=[your email]
```
#### *Linux*
```
PSP_TEST_USERNAME='[your username]'; export PSP_TEST_USERNAME;
PSP_TEST_PASSWORD='[your username]'; export PSP_TEST_PASSWORD;
PSP_TEST_EMAIL='[your username]'; export PSP_TEST_EMAIL;
```
### 4. Create the Local Fork
Link: https://github.com/psplabs/psp-e2e-tests

1. Login and go to https://github.com/psplabs/psp-e2e-tests
2. Choose the "fork" button in the top right corner
3. Download the newly created fork to the local machine

### 5. Install the Fork
1. Open command prompt in folder of downloaded fork
2. Install the fork… `npm i`
3. Test the fork install… `npm start`
4. Confirm that test properly opens browser testing script

### 6. Create new branch for Redmine ticket
1. Create branch… `git checkout -b [ticket number]`
2. Install the fork… `npm i`
3. Test the fork install… `npm start`
4. Confirm that test properly opens browser testing script

### 7. Add master branch as upstream
Upload branch to github...`git remote add upstream git@github.com:psplabs/psp-e2e-tests.git`


## Built With

* [Node Js](https://nodejs.org/en/) - Javascript Engine
* [Test Cafe](https://testcafe.devexpress.com/) - Browser Testing Framework

## Contributing

Please read contact support@perspectives.org in regard to contributing.

## Versioning


## Authors

* **Daniel Bodnar** - *Initial configuration*

## License

Any open source engines or frameworks included in this project have been configured for Perspectives.org.

## Acknowledgments

* Hat tip to anyone who's code was used
