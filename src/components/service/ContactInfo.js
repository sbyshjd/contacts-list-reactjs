import axios from 'axios'

class ContactInfoService {
    constructor() {
        let service = axios.create({
            baseURL:'https://randomuser.me/api'
        })
        this.service = service
    }

    getOne = () => {
        return this.service.get('/').then(response => response.data)
    }

    getMany = () => {
        return this.service.get('/?results=100').then(response => response.data)
    }

}

export default ContactInfoService