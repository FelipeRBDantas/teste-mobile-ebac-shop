const homeScreen = require("../screens/home.screen");

describe('Access Form Panel', () => {
    it('must fill in the form fields', async () => {
        await homeScreen.goToForm();
        await homeScreen.insertInputField();
        await homeScreen.clickButtonActive();
        expect(await homeScreen.getAlertTitle()).toEqual('This button is');
    });
});