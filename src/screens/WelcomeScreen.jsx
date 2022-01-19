import Image from "../assets/images/Ikea shopping-pinterest.jpg";

export default function WelcomeScreen() {
  return (
    <div id="welcome-page">
      <h3> Welcome to EIKA’s shopping list</h3>
      <img src={Image} alt="Couple Shopping" />
      <p>
        Create your todo list for the products you want to
        buy.
      </p>
      <p>
        Let's get started by pressing the blue Add button at the bottom. 
        Then a popup will appear where you can enter 
        name and price of the item you want to add.You can
        also upload an image for it by pressing on the camera icon.
      </p>
    </div>
  );
}
