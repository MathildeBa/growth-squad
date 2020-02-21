import fetch from "isomorphic-unfetch";
import LayoutApp from "../components/LayoutApp";

//I would have made a condition : if regionalBloc.acronym === true then display nountry.name.

const Country = ({ name , capital , alpha2Code}) => {
	return (
    <li>{name} , { capital } , { alpha2Code }</li>
    )
}

const euCountries = ({countries}) => (
    <LayoutApp>
        <div>
            <h1>All countries of the World</h1>
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

euCountries.getInitialProps = async function () {
    //fetching of the API
    const res = await fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;alpha2Code;regionalbloc');
    // await to map the json
    const countries = await res.json();

    console.log('showing the data: ', countries);

    return{
        countries
    }; 
};

export default euCountries ;