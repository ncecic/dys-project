import {useRef, useState } from 'react';
import classes from './SettingsUpdate.module.css';

function SettingsUpdate(props) {
  // const [isPasswordSame, setIsPasswordSame] = useState(true);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  // const password1InputRef = useRef();
  // const password2InputRef = useRef();
  const oibInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();
  const zipInputRef = useRef();
  const countryInputRef = useRef();
  const cityInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    // const enteredPass1 = password1InputRef.current.value;
    const enteredOib = oibInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredZip = zipInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const userData = {
      name: enteredName,
      email: enteredEmail,
      // password: enteredPass1,
      oib: enteredOib,
      phone: enteredPhone,
      address: enteredAddress,
      zip: enteredZip,
      country: enteredCountry,
      city: enteredCity,
    };

    props.onUpdateSettings(userData);
  }

  // function passwordChangeHandler() {
  //   if (password1InputRef.current.value !== password2InputRef.current.value) {
  //     setIsPasswordSame(false);
  //   } else {
  //     setIsPasswordSame(true);
  //   }
  // }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          required
          id="name"
          ref={nameInputRef}
          defaultValue={props.getUser.name}
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
      {/* <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          id="password1"
          ref={password1InputRef}
          onChange={passwordChangeHandler}
        />
      </div>
      {isPasswordSame ? (
        <div className={classes.control}>
          <label htmlFor="password">Repeat password</label>
          <input
            type="password"
            required
            id="password2"
            ref={password2InputRef}
            onChange={passwordChangeHandler}
          />
        </div>
      ) : (
        <div className={classes.control}>
          <label htmlFor="password">Repeat password</label>
          <input
            className={classes.passwordNotMatch}
            type="password"
            required
            id="password2"
            ref={password2InputRef}
            onChange={passwordChangeHandler}
          />
        </div>
      )} */}
      <div className={classes.control}>
        <label htmlFor="number">OIB</label>
        <input
          type="number"
          required
          id="oib"
          ref={oibInputRef}
          defaultValue={props.getUser.oib}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          required
          id="phone"
          ref={phoneInputRef}
          defaultValue={props.getUser.phone}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          required
          id="address"
          ref={addressInputRef}
          defaultValue={props.getUser.address}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="zip">ZIP</label>
        <input
          type="number"
          required
          id="zip"
          ref={zipInputRef}
          defaultValue={props.getUser.zip}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          required
          id="country"
          ref={countryInputRef}
          defaultValue={props.getUser.country}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          required
          id="city"
          ref={cityInputRef}
          defaultValue={props.getUser.city}
        />
      </div>
      <div className={classes.actions}>
        <button>Update</button>
      </div>
    </form>
  );
}

export default SettingsUpdate;
