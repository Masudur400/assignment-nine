import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSelectCard } from "../utility/SavedCard";
import SingleSelectCard from "../SingleSelectCard/SingleSelectCard"; 

 
 

 
const Select = () => {

    const [selectCard, setSelectCard] = useState([]);
     const selectedCards = useLoaderData();
     
     useEffect(()=>{
         const localCard = getSelectCard();
        if(selectedCards.length > 0){ 
            const single = selectedCards.filter(item =>  localCard.includes(item.id))
            setSelectCard(single)
        }
     },[  selectedCards])  

    return (
        <div className="min-h-screen"> 
             {
                selectCard.map(card => <SingleSelectCard key={card.id} card ={card}></SingleSelectCard>)
             }
        </div>
    );
};

export default Select;