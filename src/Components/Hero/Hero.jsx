import { useEffect, useState } from "react";
import { getThreeItems } from "../../API/helperFunctions";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Pagination  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './hero.css';
import { Link } from "react-router-dom";


export const Hero = () => {
    const [data, setData] = useState([]);
    const [currentId, setCurrentId] = useState(0)
    const [isLoading, setIsLoading] = useState(true);

    const handleChildData = (id) => {
        setCurrentId(id);
    };

    const testId = () => {
        console.log(currentId);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let products = await getThreeItems();
                setData(products);
                setIsLoading(!isLoading);
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, []);


    if (isLoading) {
        return <div>is loading...</div>
    }

    return (
        <>
        <section className="hero">
            <div className="hero-content">
                <div className="hero-content-top">
                    <h1 className="hero-title">Starting school with the right equipement</h1>
                    <h2 className="hero-subtitle">Get your child ready for the upcoming school year with these limited discounts.</h2>
                    </div>
                <div className="hero-content-bottom">
                    <h2 className="hero-bottom-price"><span>99.99$</span>69.99$</h2>
                    <button type="button" className="hero-button">Add to Cart</button>
                    <Link to={`/product/${currentId}`}>See The Items</Link>
                </div>
            </div>
            <div className="hero-media"><Carrousel products={data} sendIdParent={handleChildData} /></div>
        </section>
        </>
    )
}

const Carrousel = ({products, sendIdParent}) => {
    const [prodId, setProdId] = useState();

    const onHandleChange = (e) => {
        sendIdParent(products[e.activeIndex].id);
    }

    if (products.length == 0) {
        console.log('Nothing in the Carrousel');
        return <div>loading...</div>
    }

    return (
        <>
        <Swiper className="mySwiper" slidesPerView={1} modules={[Pagination, Autoplay]} pagination={{clickable: true}} onSlideChange={onHandleChange} onSwiper={swiper => sendIdParent(products[swiper.activeIndex].id)}>
            {products.map(product => {
                return <SwiperSlide key={product.id} id={product.id}>
                            <img src={product.image} alt="hello" className="swiper-img" />
                    </SwiperSlide>
            })}
        </Swiper>
        </>
    )
}