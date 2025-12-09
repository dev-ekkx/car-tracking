import * as Location from 'expo-location'
import { useEffect, useState } from 'react'

 const useLocation = () => {

    const [errorMsg, setErrorMsg] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")

    const getUserLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            const {coords} = await Location.getCurrentPositionAsync();
            if (coords) {
                setLongitude(coords.longitude.toString());
                setLatitude(coords.latitude.toString());

                const res = await Location.reverseGeocodeAsync({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                });

                if (res) {
                    console.log("User location is: ", res)
                }
            }
        } catch (error) {
            console.error("An error occurred while getting user location: ", error);
        }
    }

    useEffect(() => {
      getUserLocation()
    }, [])
    

    return {
        errorMsg,
        longitude,
        latitude,
    }
}

export default useLocation