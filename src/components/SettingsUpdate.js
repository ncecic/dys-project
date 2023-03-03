import { useRef } from 'react';
import classes from './SettingsUpdate.module.css';

function SettingsUpdate(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const oibInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();
  const zipInputRef = useRef();
  const countryInputRef = useRef();
  const cityInputRef = useRef();

  const userProfile = props.getUser.profile;

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredOib = oibInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredZip = zipInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const userData = {
      name: enteredName,
      email: enteredEmail,
      oib: enteredOib,
      phone: enteredPhone,
      address: enteredAddress,
      zip: enteredZip,
      country: enteredCountry,
      city: enteredCity,
    };

    props.onUpdateSettings(userData);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          required
          id="name"
          ref={nameInputRef}
          defaultValue={userProfile.name}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          required
          id="email"
          ref={emailInputRef}
          defaultValue={props.getUser.email}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="number">OIB</label>
        <input
          type="number"
          required
          id="oib"
          ref={oibInputRef}
          defaultValue={userProfile.oib}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          required
          id="phone"
          ref={phoneInputRef}
          defaultValue={userProfile.phone}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          required
          id="address"
          ref={addressInputRef}
          defaultValue={userProfile.address}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="zip">ZIP</label>
        <input
          type="number"
          required
          id="zip"
          ref={zipInputRef}
          defaultValue={userProfile.zip}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          required
          id="country"
          ref={countryInputRef}
          defaultValue={userProfile.country}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          required
          id="city"
          ref={cityInputRef}
          defaultValue={userProfile.city}
        />
      </div>
      <div className={classes.actions}>
        <button>Update</button>
      </div>
    </form>
  );
}

export default SettingsUpdate;
