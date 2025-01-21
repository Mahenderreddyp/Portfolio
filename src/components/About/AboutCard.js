import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahender Reddy Pokala </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently pursuing Master's in <span className="purple">Applied Data Science </span>  at <span className="purple">University of Chicago.</span>
            <br />
            I have 4 years of professional experience working as AI developer specializing in 
            <span className="purple"> Deep Learning</span> and 
            <span className="purple"> Computer  Vision</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball 🏀
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding motorcycle 🏍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech blogs 💻
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do what you love or love what you do"{" "}
          </p>
          <footer className="blockquote-footer">Mahender</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
