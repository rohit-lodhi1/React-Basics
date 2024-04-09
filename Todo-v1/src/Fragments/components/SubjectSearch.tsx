import styles from './SubjectSearch.module.css'

function SubjectSearch({ search }: { search: any }) {


    return (
        <>
            <input onChange={(event) => search(event)} className={styles.subject_search} type='text' placeholder="Search Here" />
            {/* <button className={`${styles.search_btn} btn btn-info `} onClick={(event) => search(event)}>Search</button> */}
        </>
    )
}
export default SubjectSearch;