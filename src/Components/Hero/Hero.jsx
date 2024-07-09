import { useEffect, useState } from "react";
import { getThreeItems } from "../../API/helperFunctions";


export const Hero = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let products = await getThreeItems();
                setData(products);
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, [])

    return (
        <>
        <section className="hero">
            <div className="hero-content">Testing</div>
            <div className="hero-media"><img src={data[0].image} alt={`image of the ${data[0].title}`} /></div>
        </section>
        </>
    )
}