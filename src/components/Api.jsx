import { useEffect } from "react";

function Api(setPhotos) {
    useEffect(() => {
        const apiKey = '0zdq1_JRVUltvkRMdAtsXWazRwv2DKzVbUvuw3HGQkw'
        const query = 'nature';
        const baseUrl = 'https://api.unsplash.com/';
        const url = `${baseUrl}search/photos?query=${query}&client_id=${apiKey}`;
      
        fetch(url).then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Not working");
          }
        })
        .then((data) => {
            // Process the data as needed
            setPhotos(data.results);
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
        }, []);
};

export default Api;