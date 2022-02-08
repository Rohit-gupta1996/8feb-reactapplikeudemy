import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./form.js";

function Card(props) {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    document.write(
      "Select payment method:-" +
        "<br/>" +
        "Netbaking" +
        "<br/>" +
        "Debit Card" +
        "<br/>" +
        "Credit Card" +
        "<br/>" +
        "UPI" +
        "<br/>" +
        "PAYTM"
    );
  };
  const clickHandler2 = async (e) => {
    console.log(e);
    console.log(e.target);
    document.write(
      "EDUAPP course details:- " +
        "<br/>" +
        "Cousre Name:-Node.js Developer " +
        "<br/>" +
        "Cousre mode:-Online" +
        "<br/>" +
        "Course price:-900"
    );
  };
  return (
    <div className="booklist">
      <div className="book">
        <img className="image" src={props.image} alt="image" width="150px" />
        <div className="block">
          <p className="show">Domain</p>
          <h4>
            <b />
            {props.head}
          </h4>
          <p className="clearBtn">{props.description}</p>
          <p className="cost">{props.price}</p>
          {/* <a className="sxprova" href={props.link}>Find more detail here...</a><br></br> */}
          <button type="button" className="btn" onClick={clickHandler}>
            Click here to buy
          </button>
          <button type="button" className="btn2" onClick={clickHandler2}>
            Find more detail here..
          </button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <>
    <h1 className="heading_style">EduApp</h1>
    <div className="container">
      <Card
        image="https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1"
        head="The Complete Node.js Developer Course (3rd Edition)"
        description="Build enterprise level Node applications and deploy to the cloud (AWS).
                     Create Express web servers and APIs,Use cutting-edge ES6/ES7 JavaScript
                     Build, test, and launch Node apps , Deploy your Node apps to production."
        link="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
        price="₹900"
      />

      <Card
        image="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
        head="Complete NodeJS Developer in 2022 (GraphQL, MongoDB)"
        description="Lead NodeJS projects by making good architecture decisions and
                    helping others on your team Using NodeJS, build production grade
                   apps including REST APIs and GraphQL APIs."
        link="https://www.udemy.com/course/nodejs-the-complete-guide/"
        price="₹800"
      />

      <Card
        image="https://miro.medium.com/max/1400/0*m1VOQP0FtcQufLgw.png"
        head="Node.js, Express, MongoDB and More: The Complete Bootcamp 2022"
        description="Master the entire modern back-end stack: Node, Express, MongoDB
                    and Mongoose (MongoDB JS driver).Build a fast, scalable, feature-rich
                     RESTful API (includes filters, sorts, pagination, and much more)."
        link="https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/"
        price="₹950"
      />
    </div>
  </>,
  document.getElementById("root")
);
