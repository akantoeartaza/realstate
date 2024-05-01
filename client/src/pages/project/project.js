import './project.css';

function project() {
  const details = {
    category: "Building",
    location: "Tejgaon, Dhaka",
    client: "Roads & Highway Department",
    description: "Construction of 2 Basement + 13 Storied DTCA Headquarter Building at Tejgaon, Dhaka.",
    period: "May 2017 - December 2022",
    valueBDT: "1750",
    valueUSD: "20"
  };

  return (

    <>
    <div className="building">
      <h1>DTCA Headquarter Building</h1>
      <img src="assets/img/building.jpg" alt="DTCA Headquarter Building" className="building-image"/>
      <table className="details-table">
        <tr>
          <td>Category</td>
          <td>{details.category}</td>
        </tr>
        <tr>
          <td>Location</td>
          <td>{details.location}</td>
        </tr>
        <tr>
          <td>Client</td>
          <td>{details.client}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{details.description}</td>
        </tr>
        <tr>
          <td>Period of Performance</td>
          <td>{details.period}</td>
        </tr>
        <tr>
          <td>Value (BDT) in Million</td>
          <td>{details.valueBDT}</td>
        </tr>
        <tr>
          <td>Value (USD) in Million</td>
          <td>{details.valueUSD}</td>
        </tr>
      </table>
    </div>

<div className="building">
<h1>DTCA Headquarter Building</h1>
<img src="assets/img/building2.png" alt="DTCA Headquarter Building" className="building-image"/>
<table className="details-table">
  <tr>
    <td>Category</td>
    <td>{details.category}</td>
  </tr>
  <tr>
    <td>Location</td>
    <td>{details.location}</td>
  </tr>
  <tr>
    <td>Client</td>
    <td>{details.client}</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>{details.description}</td>
  </tr>
  <tr>
    <td>Period of Performance</td>
    <td>{details.period}</td>
  </tr>
  <tr>
    <td>Value (BDT) in Million</td>
    <td>{details.valueBDT}</td>
  </tr>
  <tr>
    <td>Value (USD) in Million</td>
    <td>{details.valueUSD}</td>
  </tr>
</table>
</div>

</>
  );
}

export default project;