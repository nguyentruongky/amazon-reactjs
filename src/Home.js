import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={3}
                    />
                    <Product
                        title="HP Chromebook 11-inch Laptop - Up to 15 Hour Battery Life - MediaTek - MT8183 - 4 GB RAM - 32 GB eMMC Storage - 11.6-inch HD Display - with Chrome OS - (11a-na0021nr, 2020 Model, Snow White)"
                        image="https://m.media-amazon.com/images/I/81EY2GIfktL._AC_UY436_FMwebp_QL65_.jpg"
                        price={539}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={3}
                    />
                    <Product
                        title="HP Chromebook 11-inch Laptop - Up to 15 Hour Battery Life - MediaTek - MT8183 - 4 GB RAM - 32 GB eMMC Storage - 11.6-inch HD Display - with Chrome OS - (11a-na0021nr, 2020 Model, Snow White)"
                        image="https://m.media-amazon.com/images/I/81EY2GIfktL._AC_UY436_FMwebp_QL65_.jpg"
                        price={539}
                        rating={4}
                    />
                    <Product
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        title="HP Chromebook 11-inch Laptop - Up to 15 Hour Battery Life - MediaTek - MT8183 - 4 GB RAM - 32 GB eMMC Storage - 11.6-inch HD Display - with Chrome OS - (11a-na0021nr, 2020 Model, Snow White)"
                        image="https://m.media-amazon.com/images/I/81EY2GIfktL._AC_UY436_FMwebp_QL65_.jpg"
                        price={539}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
