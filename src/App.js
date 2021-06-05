import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function App() {
    const [{}, dispatch] = useStateValue()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log('The user is ', user)
            if (user) {
                // login
                dispatch({
                    type: 'SET_USER',
                    user,
                })
            } else {
                // the user logout
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
