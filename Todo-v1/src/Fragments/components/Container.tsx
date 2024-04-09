import styles from './Container.module.css'


export const Container = (props: any) => {
    return <>
        <div className={styles.container}>{props.children}</div>
    </>
}