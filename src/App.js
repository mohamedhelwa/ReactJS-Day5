import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import StudentDetails from './containers/student-details'
import NotFound from './components/not-found'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise';
const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/students/:id" component={StudentDetails} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}
export default App

// function x(){
//     return function y(){

//         return function z(){

//         }
//     }
// }

// let fn = x()()
// fn()
