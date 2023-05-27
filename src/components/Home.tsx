
export default function Home(props: any) {
  return (
    <div className="StudentContainer">
      <div className="SummeryCards">
        <div className="CardInfo">
          <img className="stundetDB" src="StudentDB.svg" alt="" />
          <br />
          <span className="Tag">Students</span>
          <br />
          <div className="NumberDB">
            <b>{props.studnets.length}</b>
          </div>
        </div>
      </div>
      <div className="SummeryCards2">
        <div className="CardInfo">
          <img className="BMDB" src="bookmarkSum.svg" alt="" />
          <br />
          <span className="Tag">Course</span>
          <br />
          <div className="NumberDB">
            <b>13</b>
          </div>
        </div>
      </div>
      <div className="SummeryCards3">
        <div className="CardInfo">
          <img className="paysDB" src="paysum.svg" alt="" />
          <br />
          <span className="Tag">Payments</span>
          <br />
          <div className="NumberDB">
            <b className="currency">INR </b>
            <b>556,000</b>
          </div>
        </div>
      </div>
      <div className="SummeryCards4">
        <div className="CardInfo">
          <img className="userDB" src="userIcon.svg" alt="" />
          <br />
          <span className="TagUser">Users</span>
          <br />
          <div className="NumberDB">
            <b>3</b>
          </div>
        </div>
      </div>
    </div>
  );
}
