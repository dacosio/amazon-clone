import React from 'react'
import '../styles/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id= "1"
                    title="Unlisted by Kenneth Cole Men's Dress Shirt Slim Fit Checks and Stripes"
                    price={39.92}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/91Y2IOHgprL._AC_UY741_.jpg"
                />
                <Product
                    id= "2"
                    title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                    price={200.59}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id= "3"
                    title="AmazonBasics Steel, Security Safe Lock Box, Black - 0.5 Cubic Feet"
                    price={288.89}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/718l03qCcJL._AC_UL320_.jpg"
                />
                 <Product
                    id= "4"
                    title="AmazonBasics Matte Black Wired Keyboard"
                    price={19.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81cg9myC9kL._AC_UY218_.jpg"
                />
                 <Product
                    id= "5"
                    title="AMD Ryzen 7 3700X 8-Core, 16-Thread"
                    price={289.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL._AC_US160_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id= "6"
                    title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                    price={109.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
                />
            </div>
           
        </div>
    )
}

export default Home;