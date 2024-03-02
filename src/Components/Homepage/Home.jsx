import React from "react";
import "./Home.css";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="content">
          <h2>Welcome to Our Website!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vestibulum mauris arcu, vel luctus est ultrices quis. Vestibulum id
            dui quis erat bibendum vulputate ac sit amet neque. Nunc ligula
            mauris, eleifend sed justo eget, scelerisque facilisis justo. Morbi
            mattis pretium ex, et imperdiet metus sodales vulputate. Sed
            molestie ex in libero commodo fermentum. Nullam laoreet convallis
            risus nec volutpat. Nulla consequat pellentesque diam elementum
            facilisis. Phasellus a malesuada arcu. Ut odio metus, maximus eu
            nisi eget, ornare sollicitudin nisl. Vivamus facilisis et arcu vel
            euismod. Donec ipsum libero, pharetra id fermentum eu, ultricies sit
            amet ante. Nunc egestas ante et dolor suscipit dignissim.
          </p>
        </div>
        <div>
          <div className="card-container">
            <Card
              imageUrl="https://placekitten.com/300/200"
              title="Card 1"
              description="This is the description for Card 1."
            />
            <Card
              imageUrl="https://placekitten.com/301/200"
              title="Card 2"
              description="This is the description for Card 2."
            />
            <Card
              imageUrl="https://placekitten.com/302/200"
              title="Card 3"
              description="This is the description for Card 3."
            />
            <Card
              imageUrl="https://placekitten.com/303/200"
              title="Card 4"
              description="This is the description for Card 4."
            />
             <Card
              imageUrl="https://placekitten.com/303/200"
              title="Card 4"
              description="This is the description for Card 4."
            />
          </div>
        </div>

      </div>
        <footer className="footer">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default Home;
