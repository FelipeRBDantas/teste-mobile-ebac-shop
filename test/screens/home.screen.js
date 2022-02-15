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

    async goToForm() {
        this.#form.click();
    }

    async insertInputField() {
        this.#inputField.click();
        this.#inputField.setValue('teste');
    }

    async insertInputDropdown() {
        this.#inputDropdown.click();
        this.#inputDropdown.setValue('1');
    }
}

module.exports = new HomeScreen();
