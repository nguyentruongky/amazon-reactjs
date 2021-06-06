import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import Payment from './Payment'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_Pmqmfh85BPHgAAmMTj5NfYy300m6DtWZFX')

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
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
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
