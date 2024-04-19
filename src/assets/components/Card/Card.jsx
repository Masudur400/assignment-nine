import { Link } from "react-router-dom";
 
import PropTypes from 'prop-types';

 
const Card = ({ card }) => {

    const { estate_title, image, price, description, area ,status,id} = card;

    return (
        <div className="flex flex-col">
            <img className="w-96 h-60" src={image} alt="" />
            <div className="flex flex-col gap-2 mt-5 flex-grow">
                <h3 className="text-2xl text-start font-bold text-red-500">{price}</h3>
                <h3 className="text-2xl text-start font-bold">{estate_title}</h3>
                <p className="text-start">{description}</p>
                <p className="text-start font-bold"><span className="font-bold text-xl">Area : </span>{area}</p>
            </div>

            <div className="divider"></div>

            <div className="flex justify-between items-center"> 
                <p className="font-bold">{status }</p>

                <Link to={`/card/${id}`}><button className="px-4 py-2 rounded-md bg-red-500 font-bold text-white">More Details</button></Link>
            </div>


        </div>
    );
};

Card.propTypes ={
    card: PropTypes.object
}

export default Card;