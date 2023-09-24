import { useState } from 'react';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Here I need my functions to do things

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
            <button>Create Guest</button>
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
