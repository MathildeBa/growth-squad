import LayoutApp from "../components/LayoutApp";
import fetch from "isomorphic-unfetch";

const Country = ({ name }) => {
	return (
        <li>{name}</li>
    )
}

const Index = ({countries}) => (
    <LayoutApp>
        <div>
            <h1>This is the Index</h1>
            <ul>
                {
                    countries.map(country=> 
                        <Country name={country.name}/>
                    )
                }
            </ul>
        </div>
    </LayoutApp>
);

Index.getInitialProps = async function () {
    //fetching of the API
    const res = await fetch('https://restcountries.eu/rest/v2/all?fields=name');
    // await to map the json
    const countries = await res.json();

    return{
        //countries is all the informations you will find in the API
        countries
    }; 
};

export default Index;

