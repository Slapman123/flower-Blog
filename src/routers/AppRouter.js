import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import AddExpense from "../pages/AddExpense"
import EditExpense from "../pages/EditExpense"
import ExpenseDashboard from "../pages/ExpenseDashboard"
import Header from "../pages/Header"
import HelpPage from "../pages/HelpPage"
import NotFound from "../pages/NotFound"

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true}/>
                <Route path="/create" component={AddExpense} />
                <Route path="/edit" component={EditExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter