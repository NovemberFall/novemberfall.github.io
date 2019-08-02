const key = 'gntDLaihe6vyifm5t6RMlFedA7gNsPj0';

//get weather info
const getWeather = async (locationKey) => {
    const URL = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationKey}?apikey=${key}`;

    const response = await fetch(URL + query);
    const data = await response.json();

    return data[0];
};

//get city info
const getCity = async (city) => {
    const URL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(URL + query);
    const data = await response.json();
    return data[0]; //remember: we return a promise
};









