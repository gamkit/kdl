export default class Helper {
    constructor() {
        this.super();
    }

    elementExists(element) {
        if (document.body.contains(element)) {
            return true
        }
        return false
    }
}