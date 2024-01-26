import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Box from "../../components/box/box"
import LayoutCategory from "../../components/layoutCategory/layoutCategory"

export default function Category() {

    const params = useParams()

    const [products, setProducts] = useState()


    useEffect(() => {
        try {
            fetch(`https://dummyjson.com/products/category/${params.categoryTitle}`)
                .then((res) => res.json())
                .then((data) => setProducts(data.products))
        } catch (err) {
            console.log(err)
        }
    }, [params])

    return (
        <LayoutCategory>
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
        </LayoutCategory>

    )
}