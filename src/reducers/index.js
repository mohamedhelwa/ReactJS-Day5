import {combineReducers } from 'redux'
import { studentDetails } from './student-details'
import { studentsList } from './students-list'
import {students} from './students' 
export default combineReducers({
    students
    
})
// export default combineReducers({
//     list:carsList,
//     details:carDetails,
// })
//State
// {
//     cars:{
//         list:[],
//         details:{}
//     },
//     drivers:{
//         list:[],
//         details:[],
//     },
//     customers  
// }