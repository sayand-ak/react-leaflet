import { useEffect, useState } from "react"



export const useCurLocation = () => {
    const [ location, setLocation ] = useState({latitude: 0, longitude: 0});
    const [ error, setError ] = useState("");

    useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    latitude: position.coords.latitude, 
                    longitude: position.coords.longitude
                })
            },
            (error) => {
                setError(error);
            }
        )
        }
    }, []);

    console.log("location : ", location);
    

    return { location, error };
}



