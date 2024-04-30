
export const BannerImage = ({ image, height }: { image: any, height: any }) => {
    return <>
        <div className="product-offer mb-30" style={{ height: height }}>
            <img className="img-fluid" src={image} alt="" />
            <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-primary">Shop Now</a>
            </div>
        </div >
    </>
}