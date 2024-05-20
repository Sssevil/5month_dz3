import './App.css'
import { useDispatch, useSelector } from 'react-redux'

const CounterComponent = () => {
    const counter = useSelector((state) => state.counter)
    return <span>{counter}</span>
}

const ButtonComponent = ({ sign }) => {
    const dispatch = useDispatch()
    return (
        <button
            onClick={() => {
                if (sign === '-') {
                    dispatch({ type: 'DECREMENT' })
                } else {
                    dispatch({ type: 'INCREMENT' })
                }
            }}
        >
            {sign}
        </button>
    )
}

const ContainerComponent = () => {
    return (
        <div>
            <CounterComponent />
        </div>
    )
}

const App = () => {
    return (
        <div>
            <ButtonComponent sign="-" />
            <ContainerComponent />
            <ButtonComponent sign="+" />
        </div>
    )
}

export default App
