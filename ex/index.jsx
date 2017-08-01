import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro, {Segundo} from './component'
import Family from './family';
import Member from './member';

ReactDOM.render(
    <div>
        {/* <Primeiro value="show!"/>
        <Segundo value="bah!"/> */}
        <Family lastName='Down'>
            <Member name='Jhon' />
            <Member name='Jane' />
            <Member name='Ja' />
        </Family>
    </div>, 
document.getElementById('app'));

