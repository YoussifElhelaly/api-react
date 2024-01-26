import { useEffect, useState } from "react";
import Box from "../../components/box/box";
import './home.css'
export default function Home() {

    const [products, setProducts] = useState()

    async function getData() {
        try {
            let res = await fetch("https://dummyjson.com/products")
            let data = await res.json()
            setProducts(data.products)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="Home bg-dark">
            <div className="container">
                {
                    products?.map((product, index) => {
                        console.log(product)
                        return (

                            <Box
                                key={index}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                descreption={product.description}
                                img={product.thumbnail} />
                        )

                    })
                }
            </div>
        </div>
    )
}