
export const CartItem = ({ cartItem }: { cartItem: any }) => {

    function handleQuantityChange(event: any) {
        console.log(event.target.value);

    }

    return (
        <>
            <tr>
                <td className="align-middle"><img src="img/product-1.jpg" alt="" style={{ width: "50" }} /> {cartItem.title}</td>
                <td className="align-middle">${cartItem.price}</td>
                <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{ width: "100" }}>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-minus" >
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input onChange={(e) => handleQuantityChange(e)} type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={cartItem.quantity} />
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td className="align-middle">${cartItem.quantity * cartItem.price}</td>
                <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
            </tr>

        </>
    )
}