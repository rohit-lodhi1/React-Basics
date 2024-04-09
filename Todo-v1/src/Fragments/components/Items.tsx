import Item from "./Item";

function Items(props: any) {
    let { subjectList } = props;
    let { updateStock } = props;
    return (
        <>

            <ol className="list-group list-group-numbered">
                {subjectList.map((item: any) => (
                    <Item key={item.heading} subject={item} purchaseSubject={purchaseSubject

                    }></Item>
                ))}

            </ol >
        </>
    )


    function purchaseSubject(subject: any) {
        updateStock(subject);

    }
}



export default Items;