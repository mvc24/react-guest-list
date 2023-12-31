const baseUrl = 'http://localhost:4000';

// This fetches all the guests from the database

export async function getAllGuestsFromApi() {
  const response = await fetch(`${baseUrl}/guests`);
  const allGuests = await response.json();

  return allGuests;
}

// This fetches one guest, I guess with their ID
export async function getOneGuest() {
  const response = await fetch(`${baseUrl}/guests/:id`);
  const guest = await response.json();
  return guest;
}

// This uses the POST method to create a new guest (no 1)

export async function createNewGuestInApi(newGuest) {
  const response = await fetch(`${baseUrl}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: newGuest.firstName,
      lastName: newGuest.lastName,
    }),
  });
  const createdGuest = await response.json();
  return createdGuest;
}

/* // This uses the PUT method to update a guest according to their ID

export async function updateGuestInApi(id) {
  const response = await fetch(`${baseUrl}/guests/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: true }),
  });
  const updatedGuest = await response.json();

  return updatedGuest;
} */

// This uses the DELETE function to delete a guest

export async function deleteGuest(id) {
  const response = await fetch(`${baseUrl}/guests/${id}`, { method: 'DELETE' });
  const deletedGuest = await response.json();
  return deletedGuest;
}
