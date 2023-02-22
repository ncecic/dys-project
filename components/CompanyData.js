import classes from './CompanyData.module.css';
import Card from './ui/Card';

function CompanyData(props) {
  return (
    <Card>
      <section className={classes.detail}>
        <h1>{props.company.name}</h1>
        <ul>
          <li>
            <label htmlFor="email">Email:</label>
            <p>{props.company.email}</p>
          </li>
          <li>
            <label htmlFor="oib">OIB:</label>
            <p>{props.company.oib}</p>
          </li>
          <li>
            <label htmlFor="phone">Phone:</label>
            <p>{props.company.phone}</p>
          </li>
          <li>
            <label htmlFor="address">Address:</label>
            <p>{props.company.address}</p>
          </li>
          <li>
            <label htmlFor="zip">ZIP:</label>
            <p>{props.company.zip}</p>
          </li>
          <li>
            <label htmlFor="country">Country:</label>
            <p>{props.company.country}</p>
          </li>
          <li>
            <label htmlFor="city">City:</label>
            <p>{props.company.city}</p>
          </li>
        </ul>
      </section>
    </Card>
  );
}

export default CompanyData;
