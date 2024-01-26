import { useEffect, useState } from "react"
import Box from "../../components/box/box"
import LayoutCategory from "../../components/layoutCategory/layoutCategory"

export default function AllCategories() {

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
        <LayoutCategory>
            <div className="Home">
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
        </LayoutCategory>

    )
}