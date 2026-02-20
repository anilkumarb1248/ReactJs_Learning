import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { fetchUserlaces, updateUserPlaces } from "./http.js";
import ErrorPage from "./components/ErrorPage.jsx";

function App() {
  const selectedPlace = useRef();

  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState(null);
  const [userPlaces, setUserPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isUserPlacesFetching, setIsUserPlacesFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserPlaces() {
      setIsUserPlacesFetching(true);
      try {
        const places = await fetchUserlaces();
        setUserPlaces(places);
      } catch (error) {
        console.error(error);
        setError({
          message:
            error.message ||
            "Could not fetch user places. Please try again later.",
        });
      }
      setIsUserPlacesFetching(false);
    }
    fetchUserPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      const response = await updateUserPlaces([selectedPlace, ...userPlaces]);
      console.log(response);
    } catch (error) {
      console.error(error);
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces(
        error.message ||
          "Failed to update user places. Please try again later.",
      );
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id,
        ),
      );

      try {
        const response = await updateUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id),
        );
        console.log(response);
      } catch (error) {
        console.error(error);
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces(
          error.message ||
            "Failed to update user places. Please try again later.",
        );
      }

      setModalIsOpen(false);
    },
    [userPlaces],
  );

  function handleErrorUpdatingPlacesModalClose() {
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      <Modal
        open={errorUpdatingPlaces}
        onClose={handleErrorUpdatingPlacesModalClose}
      >
        <ErrorPage
          title="An error occurred!"
          message={
            errorUpdatingPlaces ||
            "Failed to update user places. Please try again later."
          }
          onConfirm={handleErrorUpdatingPlacesModalClose}
        />
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && (
          <ErrorPage
            title="An error occurred!"
            message={error.message}
            onConfirm={() => setError(null)}
          />
        )}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isUserPlacesFetching}
            loadingText="Loading user places data..."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
