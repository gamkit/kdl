export default class Helper {
    
    static elementExists(element) {
        if (document.body.contains(element)) {
            return true
        }
        return false
    }
}