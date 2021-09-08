import axios from 'axios'
const url = 'http://localhost:8888/api/'


 export function editQuestions(token, id, data){
    return axios.put(`${url}editQuestion/${id}`,data, {headers: {
        'Authorization': `Bearer ${token}`
    }});
}
export function delteQuestions(token, id){
    return axios.delete(`${url}removeQuestion/${id}`, {headers: {
        'Authorization': `Bearer ${token}`
    }});
}


