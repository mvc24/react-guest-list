import { useState } from 'react';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [attending, setAttending] = useState(false);
  const [guestList, setGuestList] = useState([]);

  // this function creates a new guest

  function createNewGuest() {
    const newGuestId = guestList.length + 1;
    const newGuest = {
      id: newGuestId,
      firstName: firstName,
      lastName: lastName,
    };
    setGuestList([...guestList, newGuest]);
  }

  return (
    <>
      <header>
        <h1>guest list</h1>
      </header>
      <section>
        <h2>Add a guest</h2>
        <div data-test-id="guest">
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
                console.log(guestList);
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
      </section>
    </>
  );
}
