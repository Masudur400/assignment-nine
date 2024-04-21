import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Card from "../Card/Card";
import { Helmet } from "react-helmet";

 
const Home = () => {
    const cards = useLoaderData()

    return (
        <div className='mt-5'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
            <Header></Header>
            </div>

            <div className='mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                 
                {
                    cards.map(card => <Card key={card.id}
                         card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;