// utils functions are the functions that we'll be reusing across our code base

// this is where we're going to make a connection with Rapid API

export const exerciseOptions = {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	headers: {
		// 'x-rapidapi-key': 'ecc33b3d6fmsh94762df87e69720p1e4b43jsncc37fe9c7a38',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		'x-rapidapi-key': '136ef610f1msh4031ed784fe8df1p118e0ajsn165284c279b6',
		
	}
};

export const youtubeOptions = {
	method: 'GET',     
	
	headers: {
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
		'x-rapidapi-key': '136ef610f1msh4031ed784fe8df1p118e0ajsn165284c279b6'

	}
};


export const fetchData = async (url, options) =>{
  try {	
    const response = await fetch(url, options);  // fetch is build-in api
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    const data = await response.json(); // extract data 

    return data;  // this is an abstraction of a function  thats going to actuallly fetch the data bcz we have url and options
}
   catch (error) {
        console.error('Error fetching data:', error);
        throw error; // re-throw the error after logging it
    }

};