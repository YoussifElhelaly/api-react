import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./productDetails.css"
export default function ProductDetails() {

    const params = useParams()
    const [product, setProduct] = useState()
    const [mainImg, setMainImg] = useState("")
    

    useEffect(() => {
        try {

            fetch(`https://dummyjson.com/products/${params.ProductId}`)
                .then(res => res.json())
                .then(data => {
                    setProduct(data)
                    setMainImg(data.thumbnail)
                }
                );
        } catch (err) {
        }
    }, [params.ProductId])

    console.log(product)

    return (
        <div className="productDetails">
            <div className="container">
                <div className="img">
                    <img src={mainImg} alt="" />
                    <div className="imgs">
                        {
                            product?.images.map((img, index) => {
                                console.log(img)
                                return (
                                    <div key={index} className={`img ${img === mainImg && "active" }`} onClick={() => {
                                        setMainImg(img)
                                    }}>
                                        <img src={img} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="details">
                    <h3>{product?.title}</h3>
                    <p>{product?.description}</p>
                    <p>{product?.price}</p>
                </div>
            </div>
        </div>
    )
}