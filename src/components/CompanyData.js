import classes from './CompanyData.module.css';
import Card from './ui/Card';

function CompanyData(props) {
  const userEmail = props.company.email;
  const userProfile = props.company.profile;

  return (
    <Card>
      <section className={classes.detail}>
        <h1>{userProfile.name}</h1>
        <ul>
          <li>
            <label htmlFor="email">Email:</label>
            <p>{userEmail}</p>
          </li>
          <li>
            <label htmlFor="oib">OIB:</label>
            <p>{userProfile.oib}</p>
          </li>
          <li>
            <label htmlFor="phone">Phone:</label>
            <p>{userProfile.phone}</p>
          </li>
          <li>
            <label htmlFor="address">Address:</label>
            <p>{userProfile.address}</p>
          </li>
          <li>
            <label htmlFor="zip">ZIP:</label>
            <p>{userProfile.zip}</p>
          </li>
          <li>
            <label htmlFor="country">Country:</label>
            <p>{userProfile.country}</p>
          </li>
          <li>
            <label htmlFor="city">City:</label>
            <p>{userProfile.city}</p>
          </li>
        </ul>
      </section>
    </Card>
  );
}

export default CompanyData;
