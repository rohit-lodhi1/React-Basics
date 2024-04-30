import { BannerImage } from "../banners/BannerImage"

export const Offers = () => {
    let bannerImages = [
        {
            image: '../../assets/img/offer-1.jpg'
        },
        {
            image: '../../assets/img/offer-2.jpg'
        }
    ]

    return (
        <>
            {/* <!-- Offer Start --> */}
            <div className="container-fluid pt-5 pb-3">
                <div className="row px-xl-5">

                    {bannerImages && bannerImages.map((image: any, index: any) =>
                        <div className="col-md-6" key={index}>
                            <BannerImage image={image.image} height={300} />
                        </div>
                    )}

                </div>
            </div>
            {/* <!-- Offer End --> */}

        </>
    )
}