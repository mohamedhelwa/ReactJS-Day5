import StudentList from '../containers/students-list'
import Search from '../containers/search'
const Home = ({history})=>{
    return <div>
        <h1 className="text-white bg-dark text-center">Students</h1>
        <Search/>
        <StudentList history={history}/>
    </div>

}

export default Home