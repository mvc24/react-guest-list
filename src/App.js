import { useState } from 'react';
import { createNewGuestInApi } from './api';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAttending, setIsAttending] = useState(false);
  const [guestList, setGuestList] = useState([]);

  const baseUrl = 'http://localhost:4000';

  // this function creates a new guest

  /*  function createGuest() {
    const newGuestId = guestList.length + 1;
    const guest = {
      id: newGuestId,
      firstName: firstName,
      lastName: lastName,
      attending: isAttending,
    };
    setGuestList([...guestList, guest]);
  } */

  async function createNewGuest() {
    const newGuest = {
      firstName,
      lastName,
    };
    const createdGuest = await createNewGuestInApi(newGuest);
    setGuestList([...guestList, createdGuest]);
  }

  // this function could maybe one day change the attendance status

  /*   function attendingStatus(id) {
    const guestObject = guestList.filter((guest) => guest.id === id);
    if (isAttending === true) {
      setIsAttending(true);
    } else {
      setIsAttending(false);
    }
    guestObject.attending([]);

    console.log(
      'status',
      guestList.filter((guest) => guest.id === id),
    );
  } */

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
              onClick={() => {
                createNewGuest();
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
                    onChange={(event) => {
                      attendingStatus(guest.id);
                      setIsAttending(event.currentTarget.checked);
                      console.log(event.currentTarget.checked);
                    }}
                  />
                  <button /* onClick={() => } */>X</button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
