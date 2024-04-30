import { ShopSideBarPrice } from "./ShopSideBarPrice"
import { ShopSideBarSize } from "./ShopSideBarSize"

export const ShopSidebar = () => {
    return (
        <>
            {/* <!-- Shop Sidebar Start --> */}
            <div className="col-lg-3 col-md-4">
                {/* <!-- Price Start --> */}
                <ShopSideBarPrice />
                {/* <!-- Price End --> */}

                {/* <!-- Color Start --> */}
                <ShopSideBarPrice />
                {/* <!-- Color End --> */}

                {/* <!-- Size Start --> */}
                <ShopSideBarSize />
                {/* <!-- Size End --> */}
            </div>
            {/* <!-- Shop Sidebar End --> */}

        </>
    )
}