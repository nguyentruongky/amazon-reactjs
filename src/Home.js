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
                        id="1"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={3}
                    />
                    <Product
                        id="2"
                        title="HP Chromebook 11-inch Laptop - Up to 15 Hour Battery Life - MediaTek - MT8183 - 4 GB RAM - 32 GB eMMC Storage - 11.6-inch HD Display - with Chrome OS - (11a-na0021nr, 2020 Model, Snow White)"
                        image="https://m.media-amazon.com/images/I/81EY2GIfktL._AC_UY436_FMwebp_QL65_.jpg"
                        price={539}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="3"
                        title="Hisense 40-Inch 40H5500F Class H55 Series Android Smart TV with Voice Remote (2020 Model)"
                        price={248.0}
                        image="https://images-na.ssl-images-amazon.com/images/I/61lJa-K8CqL._AC_SL1001_.jpg"
                        rating={5}
                    />
                    <Product
                        id="4"
                        title="SanDisk 1TB Extreme Portable SSD - Up to 1050MB/s - USB-C, USB 3.2 Gen 2 - External Solid State Drive - SDSSDE61-1T00-G25"
                        image="https://images-na.ssl-images-amazon.com/images/I/712%2Bjjz3lyL._AC_SL1500_.jpg"
                        price={154.38}
                        rating={4}
                    />
                    <Product
                        id="5"
                        title="Apple iPhone 11 Pro, 64GB, Space Gray - Unlocked (Renewed Premium)"
                        price={720.0}
                        image="https://images-na.ssl-images-amazon.com/images/I/81LmL94PUvS._AC_SL1500_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="6"
                        title="Apple MacBook Pro with Apple M1 Chip (13-inch, 16GB RAM, 256GB SSD Storage) - Space Gray (Latest Model) Z11B000E3"
                        image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg"
                        price={1449.99}
                        rating={5}
                    />
                    <Product
                        id="7"
                        title="LG Gram 16Z90P - 16 WGXGA (2560x1600) Ultra-Lightweight Laptop, Intel evo with 11th gen CORE i7 1165G7 CPU , 16GB RAM, 256GB SSD, Alexa Built-in, 19.5 Hours Battery, Thunderbolt 4, Black - 2021"
                        image="https://images-na.ssl-images-amazon.com/images/I/81pKId7SSYS._AC_SL1500_.jpg"
                        price={1349.99}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
