import { BsFillSearchHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom"
import "./box.css"
export default function Box({ title, img, descreption, price, id }) {
    return (
        <div className="box" data-aos="fade-up">
            <span className="">

                <BsFillSearchHeartFill />
            </span>
            <div className="img">
                <img src={img} alt="s" />
            </div>
            <h3>product {title}</h3>
            <p>descreption : {descreption}</p>
            <p>price :{price}$</p>
            <Link to={`/productDetails/${id}`}>Details</Link>
        </div>
    )
}