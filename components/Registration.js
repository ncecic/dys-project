import { useRef, useState } from 'react';

import classes from './Registration.module.css';

function Registration(props) {
  const [isPasswordSame, setIsPasswordSame] = useState(true);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const password1InputRef = useRef();
  const password2InputRef = useRef();
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
    const enteredPass1 = password1InputRef.current.value;
    const enteredOib = oibInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredZip = zipInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const userData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPass1,
      oib: enteredOib,
      phone: enteredPhone,
      address: enteredAddress,
      zip: enteredZip,
      country: enteredCountry,
      city: enteredCity,
    };

    props.onRegister(userData);
  }

  function passwordChangeHandler() {
    if (password1InputRef.current.value !== password2InputRef.current.value) {
      setIsPasswordSame(false);
    } else {
      setIsPasswordSame(true);
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Name</label>
        <input type="text" required id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="text" required id="email" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
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
          <input className={classes.passwordNotMatch}
            type="password"
            required
            id="password2"
            ref={password2InputRef}
            onChange={passwordChangeHandler}
          />
        </div>
      )}
      <div className={classes.control}>
        <label htmlFor="number">OIB</label>
        <input type="number" required id="oib" ref={oibInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">Phone number</label>
        <input type="text" required id="phone" ref={phoneInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address" ref={addressInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="zip">ZIP</label>
        <input type="number" required id="zip" ref={zipInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="country">Country</label>
        <input type="text" required id="country" ref={countryInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" required id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button disabled={isPasswordSame ? false : true}>Register</button>
      </div>
    </form>
  );
}

export default Registration;
