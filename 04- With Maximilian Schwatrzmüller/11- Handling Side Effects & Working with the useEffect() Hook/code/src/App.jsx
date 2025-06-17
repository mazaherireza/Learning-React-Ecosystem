import { useRef, useState, useEffect, useCallback } from "react";
import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

const KEY = "Selected-IDs";

const selectedIDs = JSON.parse(localStorage.getItem(KEY)) || [];
const storedPlaces = selectedIDs.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

const App = () => {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const sortedPlaces = sortPlacesByDistance(
          AVAILABLE_PLACES,
          latitude,
          longitude
        );
        setAvailablePlaces(sortedPlaces);
      }
    );
  }, []);

  const handleStartRemovePlace = (id) => {
    setModalIsOpen(true);
    selectedPlace.current = id;
  };

  const handleStopRemovePlace = () => {
    setModalIsOpen(false);
  };

  const handleSelectPlace = (id) => {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      const selectedIDs = JSON.parse(localStorage.getItem(KEY)) || [];
      if (selectedIDs.indexOf(id) === -1)
        localStorage.setItem(KEY, JSON.stringify([id, ...selectedIDs]));
      return [place, ...prevPickedPlaces];
    });
  };

  const handleRemovePlace = useCallback(() => {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);
    const selectedIDs = JSON.parse(localStorage.getItem(KEY)) || [];
    localStorage.setItem(
      KEY,
      JSON.stringify(selectedIDs.filter((id) => id !== selectedPlace.current))
    );
  }, []);

  return (
    <>
      <Modal open={modalIsOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized Globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting Places By Distance ..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
};

export default App;
