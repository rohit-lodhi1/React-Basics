
import style from './Item.module.css';

function Item({ subject, purchaseSubject }: { subject: any, purchaseSubject: any }) {




    // let { subject } = props;
    return (
        <>

            <li className={`${style.heading} list-group-item d-flex justify-content-between align-items-start`}>
                <div className="ms-2 me-auto">
                    <div className="fw-bold ">{subject.heading}</div>
                    {subject.description}
                </div>
                <button className={`${style.item_btn} btn btn-info ${subject.stock <= 0 ? style.no_click : ''}`} onClick={() => purchaseSubject(subject.heading)}>{subject.stock > 0 ? 'Buy' : 'Out Of stock'}</button>
                <span className="badge text-bg-primary rounded-pill">{subject.stock}</span>
            </li>
        </>
    )
}



export default Item;