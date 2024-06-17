import "./index.css";

const Services = () => {
  return (
    <>
    <h3 className="intro">SERVICES</h3>
      <div className="services">
        
        <div className="savings">
          <div className="saving-section">
            We will have mobile app for farmers and a dashboard for VSLA. By
            providing a web app and dashboard that integrates with VSLA,
            EconTrust will give farmers complete access to their records,
            savings, loans, and finiacial literacy.
          </div>
          <img
            src="https://sfginc.com/wp-content/uploads/2020/08/AdobeStock_80529584-scaled.jpeg"
            className="savings-img"
          />
        </div>
        <div className="loans">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWt1gBr5-xkKt66db-BfKdvcmW2JndVzURFg&s"
            className="loan-img"
          />
          <div className="loan-section">
            Farmers can apply for loans a dashboard for VSLA. By providing a web
            app and dashboard that integrates with VSLA, Econtrust will give
            farmers complete access to their records, savings, loans, and
            finiacial literacy.
          </div>
        </div>
        <div className="record-keeping">
          <div className="records-section">
            We will have mobile app for farmers and a dashboard for VSLA. By
            providing a web app and dashboard that integrates with VSLA,
            EconTrust will give farmers complete access to their records,
            savings, loans, and finiacial literacy.
          </div>
          <img
            src="https://pbs.twimg.com/media/EtSfjhqXAAEQdXe.jpg"
            className="records-img"
          />
        </div>
      </div>
    </>
  );
};
export default Services;
