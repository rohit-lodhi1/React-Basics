import { CategoryCard } from "../category-card/CategoryCard";

export const Categories = () => {


    const category = [];
    let j = 1;
    for (let i = 0; i < 8; i++) {
        category.push({
            title: 'Category Name',
            stock: '120',
            image: '../assets/img/cat-' + (j++) + '.jpg'
        })
        if (j == 5)
            j = 1;
    }

    return (
        <>
            {/* <!-- Categories Start --> */}
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
                <div className="row px-xl-5 pb-3">
                    {category &&
                        category.map((category: any, index: any) =>
                            <CategoryCard category={category} key={index}></CategoryCard>
                        )}
                </div>
            </div>
            {/* <!-- Categories End --> */}

        </>
    )
}