import { useState } from 'react';
import AppName from './AppName';
import CalButton from './CalButton';
import styles from './Calculater.module.css'
import Display from './Display';

function Calculater() {
    let [displayVal, setDisplayVal] = useState('');


    function updateVal(val: any) {
        console.log(val);
        if (val == 'C')
            displayVal = '';
        else if (val == '=') {
            const result = eval(displayVal);
            displayVal = result;
        }
        else
            displayVal += val
        setDisplayVal(displayVal);
    }


    return <>
        <div className={styles.title}>
            <AppName></AppName>
        </div>
        <div className={styles.container}>
            <Display val={displayVal}></Display>
            <CalButton onButtonClick={updateVal}>  </CalButton>
        </div>
    </>


}

export default Calculater;
