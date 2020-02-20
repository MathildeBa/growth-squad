import fetch from "isomorphic-unfetch";

const isUE = (country) =>{
    return country.name
}

const euCountries = ({countries}) => {
    return (
        <div>

        </div>
    )
    
}

euCountries.getInitialProps = async function () {
    //fetching of the API
    const res = await fetch('https://restcountries.eu/rest/v2/all?fields=name');
    // await to map the json
    const countries = await res.json();

    console.log('showing the data: ', countries);

    return{
        countries
    }; 
};

export default euCountries ;