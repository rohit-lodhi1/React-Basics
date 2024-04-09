import styles from './Calculater.module.css'
function CalButton({ onButtonClick }: { onButtonClick: any }) {
    let buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0', '.', '=']
    return (<>
        <div className={styles.calculater_button}>

            {buttons.map((b: any) => (
                <button key={b} className={styles.cal_btn} onClick={() => onButtonClick(b)}>{b}</button>
            ))}
        </div>
    </>)
}

export default CalButton;