import { ProductCard } from "../product-card/ProductCard"
import { ShopSidebar } from "./ShopSidebar"

export const Shop = () => {

    const products = [

    ]
    for (let i = 0; i <= 8; i++) {
        products.push({
            title: 'Product Name Goes Here',
            Description: '',
            image: '../../assets/img/product-' + (i + 1) + '.jpg',
            price: '$123',
            previousPrice: '$123'
        })
    }

    return (
        <>
            {/* <!-- Breadcrumb Start --> */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <a className="breadcrumb-item text-dark" href="#">Home</a>
                            <a className="breadcrumb-item text-dark" href="#">Shop</a>
                            <span className="breadcrumb-item active">Shop List</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Breadcrumb End --> */}


            {/* <!-- Shop Start --> */}
            <div className="container-fluid">
                <div className="row px-xl-5">

                    <ShopSidebar></ShopSidebar>
                    {/* <!-- Shop Product Start --> */}
                    <div className="col-lg-9 col-md-8">
                        <div className="row pb-3">
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div>
                                        <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                        <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                                    </div>
                                    <div className="ml-2">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Latest</a>
                                                <a className="dropdown-item" href="#">Popularity</a>
                                                <a className="dropdown-item" href="#">Best Rating</a>
                                            </div>
                                        </div>
                                        <div className="btn-group ml-2">
                                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">10</a>
                                                <a className="dropdown-item" href="#">20</a>
                                                <a className="dropdown-item" href="#">30</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {products && products.map((product: any, index: any) =>
                                <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={index}>
                                    <ProductCard product={product}></ProductCard>
                                </div>
                            )}
                        </div>

                        <div className="col-12">
                            <nav>
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled"><a className="page-link" href="#"><span>Previous</span></a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- Shop Product End --> */}
            </div>

            {/* <!-- Shop End --> */}

        </>
    )
}