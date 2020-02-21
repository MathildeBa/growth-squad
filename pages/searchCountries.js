import LayoutApp from "../components/LayoutApp";
import fetch from "isomorphic-unfetch";

//I would have add a filter 

const Country = ({ name , capital , alpha2Code}) => {
	return (
    <li>{name} , { capital } , { alpha2Code }</li>
    )
}

const allCountries = ({countries}) => (
    <LayoutApp>
        <div>
            <h1>All countries of the World</h1>
            <output>Search</output>
            <ul>
                {
                    countries.map(country=> 
                        <Country name={country.name} capital={country.capital} alpha2Code={country.alpha2Code}/>
                    )
                }
            </ul>
        </div>
    </LayoutApp>
);

allCountries.getInitialProps = async function () {
    //fetching of the API
    const res = await fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;alpha2Code');
    // await to map the json
    const countries = await res.json();

    console.log('showing the data: ', countries);

    return{
        //countries is all the informations you will find in the API
        countries
    }; 
};

export default allCountries;

