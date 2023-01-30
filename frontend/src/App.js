import './App.css';
import CreateAccount from "./components/CreateAccount";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AccountDetails from "./components/AccountDetails";
import {Component, } from "react";
import userService from "./service/userService";

class App extends Component{

    constructor() {
        super();
        this.state = {
            user: [],
        }
    }

    setUsername = async (username) => {

        const user = await userService.getUser(username);
        this.setState({
            user: user.data,
        });
    }


    render(){
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/create_account' exaxt element={<CreateAccount setUsername={this.setUsername}/>}/>
                        <Route path='/' element={<Navigate to='/create_account'/>}/>
                        <Route path='/account_details' exact element={<AccountDetails user={this.state.user}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;
