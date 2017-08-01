import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro, {Segundo} from './component'
import Family from './family';
import Member from './member';
import ClassComponet from './classComponent';

ReactDOM.render(
    <div>
        <ClassComponet label="Contador" initialValue={10}/>
        {/* <Primeiro value="show!"/>
        <Segundo value="bah!"/> 
        <Family lastName='Down'>
            <Member name='Jhon' />
            <Member name='Jane' />
            <Member name='Ja' />
        </Family> */}
    </div>, 
document.getElementById('app'));

