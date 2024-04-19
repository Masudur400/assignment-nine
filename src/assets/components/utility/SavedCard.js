import { toast } from "react-toastify";

const getSelectCard = ()=>{
    const storedSelectCard = localStorage.getItem('card');
    if(storedSelectCard){
        return JSON.parse(storedSelectCard);
    }
    return [];
}

// console.log(getSelectCard())

const saveSelectCard = id =>{
    const storedCards = getSelectCard();
    
    const exist = storedCards?.find(cardId =>   id === cardId);

    if(!exist){ 
        storedCards.push(id);
        localStorage.setItem('card',JSON.stringify(storedCards))
        toast.success('Add Successful Read') 
    } else{
        toast.error('already add')
    }

}

export {saveSelectCard,getSelectCard };