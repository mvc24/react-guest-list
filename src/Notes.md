# open questions

- figure out how to focus on first name input field after creating a guest
- how do I modify the guest I just created: set attendance & enable the delete button

## open to dos

- connect to API
  - save a new guest to API
  - load guests from API
- create 'loading' state
-

## interesting!

https://medium.com/@rferrandino.tokyo/a-wedding-website-rsvp-form-39a6238556cd
"[We use onSubmit on the entire form rather than onClick on the button so that the form submission works even if the user presses enter instead of clicking on the button.]"

## old code I can't bring myself to delete yet

// this function creates a new guest

/_ function createGuest() {
const newGuestId = guestList.length + 1;
const guest = {
id: newGuestId,
firstName: firstName,
lastName: lastName,
attending: isAttending,
};
setGuestList([...guestList, guest]);
} _/

// this function could maybe one day change the attendance status

function attendingStatus(id) {
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

}
