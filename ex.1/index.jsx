import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

// import Primeiro, {Segundo} from './component'
// import Family from './family';
// import Member from './member';
// import ClassComponet from './classComponent'
import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    field : fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>

    <div>
        <Field initialValue='Teste'/>
        {/* <ClassComponet label="Contador" initialValue={10}/> */}
        {/* <Primeiro value="show!"/>
        <Segundo value="bah!"/> 
        <Family lastName='Down'>
            <Member name='Jhon' />
            <Member name='Jane' />
            <Member name='Ja' />
        </Family> */}
    </div>
    </Provider>, 
document.getElementById('app'));

