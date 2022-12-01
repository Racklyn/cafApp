export default class Flavor{
    title: string
    description: string
    imageURL: string
    //logo: string

    constructor (title: string, description: string, imageURL: string, logo?: string){
        this.title = title
        this.description = description
        this.imageURL = imageURL
        // this.logo = logo
    }
}