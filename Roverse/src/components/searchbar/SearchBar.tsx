import { useState } from "react"


export const SearchBar = () => {


    const searchData = [{
        name: "Fashion",
        image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600'
    }]

    let filterSearchData: any[] = [];

    const [search, setSearch] = useState("");
    filterSearchData = searchData.filter((f: any) => f.name.toLowerCase().includes(search.toLowerCase())).slice(0, 8);

    return (
        <>
            <div className="input flex justicy-center">
                <input type="text" placeholder="Search here"
                    onChange={(e) => setSearch(e.target.value)}
                    className="br-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-non text-black" />
            </div>

            {/* Search drop down */}

            {search && <div className="flex justify-end drop-down-parent">
                <div className="block drop-down absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
                    {filterSearchData.length > 0 ? <>
                        {filterSearchData.map((item: any, index: any) => {
                            return (
                                <div className="py-2 px-2" key={index}>
                                    <div className="flex items-center gap-2 text-black">
                                        <img src={item.image} alt="" className="w-10" />{item.name}
                                    </div>

                                </div>
                            )
                        })}
                    </>


                        :
                        <div className="flex justify-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPKsLAFTpwvSJ7HLj_OhIR2-EPGQoH7sU8g&s" alt="" />

                        </div>
                    }
                </div>
            </div>}
        </>
    )
}