import axios from 'axios'

export default function contactsListAPI () {
    
    return axios.get('https://randomuser.me/api/?results=200').then(response => response.data)

}
