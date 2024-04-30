import { ProductCard } from "../product-card/ProductCard"

export const FeaturedProducts = () => {

    const products = [

    ]
    for (let i = 0; i < 8; i++) {
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

            {/* <!-- Products Start --> */}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
                <div className="row px-xl-5">
                    {products && products.map((product: any, index: any) =>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                            <ProductCard product={product}></ProductCard>
                        </div>
                    )}

                </div>
            </div>
            {/* <!-- Products End --> */}

        </>
    )
}