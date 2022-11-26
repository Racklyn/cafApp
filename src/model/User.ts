export default class User {
    name: String
    phone: String
    address: String
    email: String

    constructor(
        name: String,
        phone: String,
        address: String,
        email: String = ""
    ) {
        this.name = name
        this.email = email
        this.phone = phone
        this.address = address
    }
}