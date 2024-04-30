import { Banner } from "../banners/Banner"
import { Categories } from "../catergories/Categories"
import { Collaborators } from "../collaborators/Collaborators"
import { FeaturedProducts } from "../featured-products/FeaturedProducts"
import { Offers } from "../offers/Offers"
import { RecentProducts } from "../recent-products/RecentProducts"
import { Services } from "../services/Services"

export const HeroSection = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Categories></Categories>
            <FeaturedProducts></FeaturedProducts>
            <Offers></Offers>
            <RecentProducts></RecentProducts>
            <Collaborators></Collaborators>
        </>
    )
}