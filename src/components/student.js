const Student = ({ studentInfo,history }) => {
    const goToDetails = ()=>{
        history.push(`/students/${studentInfo.id}`)
    }

    if (studentInfo) {
        return <div className="alert alert-dark d-flex justify-content-between" onClick={goToDetails}>
            <h4 className="align-self-center">
                {studentInfo.name}
            </h4>
            <h4 className="align-self-center">
                {studentInfo.email}
            </h4>
        </div>
    }
}
export default Student
