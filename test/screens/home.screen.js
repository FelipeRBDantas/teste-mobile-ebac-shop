class HomeScreen {
    get #form() {
        return $('//android.widget.Button[@content-desc="Forms"]');
    }

    get #inputField() {
        return $('//android.widget.EditText[@content-desc="text-input"]');
    }

    get #inputDropdown() {
        return $('id:text1');
    }

    get #buttonActive() {
        return $('//android.view.ViewGroup[@content-desc="button-Active"]');
    }

    get #alertTitle() {
        return $('id:alertTitle');
    }

    async goToForm() {
        await this.#form.click();
    }

    async insertInputField() {
        await this.#inputField.click();
        await this.#inputField.setValue('teste');
    }

    async insertInputDropdown() {
        await this.#inputDropdown.click();
        await this.#inputDropdown.setValue('1');
    }

    async clickButtonActive() {
        await this.#buttonActive.click();
    }

    async getAlertTitle() {
        return await this.#alertTitle.getText();
    }
}

module.exports = new HomeScreen();
