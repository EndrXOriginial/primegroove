import { useEffect, useState } from "react";
import { getThreeItems } from "../../API/helperFunctions";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Pagination  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './hero.css';


export const Hero = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            <div className="hero-content">Don't forget, mobile first!!!!!!</div>
            <div className="hero-media"><Carrousel products={data} /></div>
        </section>
        </>
    )
}

const Carrousel = ({products}) => {
    if (products.length == 0) {
        console.log('Nothing in the Carrousel');
        return <div>loading...</div>
    } else if (products.length == 3) {
        console.log('we have smt boys');
    }

    return (
        <>
        <Swiper slidesPerView={1} modules={[Pagination, Autoplay]} pagination={{clickable: true}}>
            {products.map(product => {
                return <SwiperSlide key={product.id}><img src={product.image} alt="hello" className="swiper-img" /></SwiperSlide>
            })}
        </Swiper>
        </>
    )
}