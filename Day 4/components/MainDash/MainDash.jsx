
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import CustomerReview from "../CustomerReview/CustomerReview";
import Update from "../Update/Update";
// eslint-disable-next-line no-unused-vars
import Updates from "../Updates/Updates";
const MainDash = () => {
  return (
    <div className="MainDash">
    <div className="forbac">
      <h1>Dashboard</h1>
      
      <br/><br/>
      <h2>Graph Values</h2>
      <br/><br/>
      <Cards />
      <br/><br/>
      <h2>Recent Services</h2>
      <br/><br/>
      <Table />
      <br/>
      <br/>
      </div>
      <div className="forback">

      
      <br/><br/>
      <CustomerReview/>
      <br/><br/>
      <h2>Updates</h2>
      <br/>
      <Update/>
      </div>

    </div>
  );
};

export default MainDash;
