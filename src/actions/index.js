import { data } from "jquery"

const baseURL = "http://localhost:3001/students"
export const getStudents = async (name) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}?name=${name}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENTS_LIST',
        payload
    }
}




export const getStudentDetails = async (id) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_DETAILS',
        payload
    }

}

export const clearStudentDetails = ()=>{
    return {
        type:'CLEAR_Student_DETAILS',
        payload:null
    }
}


