import styles from './Calculater.module.css'

function Display({ val }: { val: any }) {
    return <>
        <div className={styles.display} >
            <input type="text" value={val} readOnly />
        </div>
    </>
}
export default Display;