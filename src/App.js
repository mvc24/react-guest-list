import { useEffect, useState } from 'react';
import {
  createNewGuestInApi,
  getAllGuestsFromApi,
  updateGuestInApi,
} from './api';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAttending, setIsAttending] = useState(false);
  const [guestList, setGuestList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = 'http://localhost:4000';

  // this function gets all my guests from the API

  // this does something

  useEffect(() => {
    async function firstRenderFetch() {
      const response = await fetch(`${baseUrl}/guests`);

      const data = await response.json();

      setGuestList(data);

      setIsLoading(false);
    }

    firstRenderFetch().catch((error) => {
      console.log(error);
    });
  }, []);

  // This function to create a new guest creates an object with the values first & last name, and then it creates a constant awaiting the creation of a new guest within the api. Then it updates the guest list.

  async function createNewGuest() {
    const newGuest = {
      firstName,
      lastName,
    };
    const createdGuest = await createNewGuestInApi(newGuest);
    setGuestList([...guestList, createdGuest]);
  }

  // this changes the attendance status of the guest by clicking a checkbox. The attendance status needs to communicate with the API

  async function updateGuest(id, attending) {
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: attending }),
    });
    const updatedGuest = await response.json();
    console.log(updatedGuest);

    // finde den gast im gesamtarray, veränder den status lokal
    //
    /*  const updateGuests = guestList.map((g) => {
      if (g.id === guest.id) {
        return { ...g, attending: !g.attending };
      }
      return g;
    });
    setGuestList(updateGuests); */

    const updateGuestList = guestList.filter((guest) => {
      return guest.id !== updatedGuest.id;
    });
    setGuestList([...guestList], updateGuestList);
    console.log(updatedGuest);
  }

  async function deleteGuest(id) {
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
    setGuestList(guestList.filter((guest) => guest.id !== deletedGuest.id));
  }

  /*  const guestListAfterDelete = console.log(deletedGuest); */

  return (
    <>
      <header>
        <h1>guest list</h1>
      </header>
      <section>
        <h2>Add a guest</h2>
        <div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="First name">
              First name
              <br />
              <input
                value={firstName}
                onChange={(event) => setFirstName(event.currentTarget.value)}
              />
            </label>
            <br />
            <label htmlFor="Last name">
              Last name
              <br />
              <input
                value={lastName}
                onChange={(event) => setLastName(event.currentTarget.value)}
              />
            </label>
            <br />
            <button
              onClick={async () => {
                await createNewGuest();
                setFirstName('');
                setLastName('');
                console.log('guest list', guestList);
              }}
            >
              Create Guest
            </button>
          </form>
        </div>
      </section>
      <section>
        <h2>My Guests</h2>
        <div>show my guests</div>
        <ul>
          {guestList.map((guest) => {
            return (
              <li key={`guest-id-${guest.id}`}>
                <div data-test-id="guest">
                  {guest.firstName} {guest.lastName}
                  <input
                    type="checkbox"
                    checked={guest.isAttending}
                    onChange={(event) =>
                      updateGuest(guest.id, event.currentTarget.checked)
                    }
                  />
                  <button onClick={async () => await deleteGuest(guest.id)}>
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
