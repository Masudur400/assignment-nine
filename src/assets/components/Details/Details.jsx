import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { saveSelectCard } from "../utility/SavedCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const [cardDetails, setCardDetails] = useState([]);

    const details = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)

    useEffect(() => {
        const singleCard = details?.find(singleCard => singleCard.id === idInt)
        setCardDetails(singleCard)
    }, [details, idInt])


    const { estate_title, image, segment_name, info, price, area, location, status, facilities } = cardDetails;

    const handleAdd = () => {
        saveSelectCard(idInt); 
    }

    return (
        <div className="md:flex gap-4 md:px-6 md:mt-5 min-h-screen">
            <div className="md:w-2/5">
                <img className="w-full h-96" src={image} alt="" />
            </div>

            <div className=" md:w-3/5">
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold">{estate_title}</h2>
                    <p className="font-bold text-xl text-red-500">{segment_name}</p>
                    <p>{info}</p>
                    <div className="flex gap-8">
                        <p className="text-xl font-bold">{status} : </p>
                        <p className="text-xl font-bold text-red-500">{price}</p>
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <p className="bg-red-500 px-4 py-2 rounded-full text-bold font-bold text-white">{area}</p>
                    <p className="bg-red-500 px-4 py-2 rounded-full text-bold font-bold text-white flex justify-center items-center gap-2"><MdLocationPin className="text-xl"></MdLocationPin>{location}</p>
                </div>
                <p className="text-lg font-bold mt-2">Facilities : </p>
                <div className="flex flex-wrap mt-3 gap-2">
                    {
                        facilities?.map((item, i) => <p className="bg-red-200 mb-2 px-3 py-2 rounded-full   font-bold"
                            key={i}
                        >{item}</p>)
                    }
                </div>

                <div className="flex justify-between">
                    <Link to='/'> <button className="bg-green-500 px-4 py-2 rounded-lg font-bold text-white">Back</button></Link>

                    <button onClick={handleAdd} className="bg-green-500 px-4 py-2 rounded-lg font-bold text-white">Select Now</button>
                </div>

            </div>

            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Details;