import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch("http://localhost:3000/places")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setAvailablePlaces(data.places);
    //   });

    // Using async/await syntax
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        // const response = await fetch("http://localhost:3000/places");
        // // const response = await fetch("http://localhost:3000/places/1");
        // const data = await response.json();
        // if (!response.ok) {
        //   throw new Error("Failed to fetch places.");
        // }
        // Moving the fetch logic to http.js file.
        const places = await fetchAvailablePlaces();
        console.log(places);
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude,
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        // setError(error.message);
        setError({
          message:
            error.message || "Could not fetch places. please try again later.",
        });
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
