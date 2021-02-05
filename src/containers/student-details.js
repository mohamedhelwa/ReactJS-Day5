import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails,clearStudentDetails } from '../actions'

const StudentDetails = ({ getStudentDetails,clearStudentDetails, details, match }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        getStudentDetails(id)

        return ()=>{
            console.log('cleanup (unmount)')
            clearStudentDetails()
        }
    },[])

    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div className="justify-content-between">
                        <h1>Name: {details.name}</h1>
                        <h2>Email: {details.email}</h2>
                        <h2>Age: {details.age}</h2>
                </div>
            )
        }
        return ''
    }
    return (<div className="alert alert-light">
        {renderStudentDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails ,clearStudentDetails}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)

