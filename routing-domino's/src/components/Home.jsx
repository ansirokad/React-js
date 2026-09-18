import pizza from "../assets/pizza.png"
function Homepage() {
  return (
    <div className="home-page">

      <div className="home-text">
        <p className="welcome">WELCOME TO DOMINO'S</p>

        <h1>
          Great Pizza.
          <br />
          <span>Better Together.</span>
        </h1>

        <p className="intro">
          Freshly made with quality ingredients, delicious toppings
          and the iconic taste you love — only at Domino's.
        </p>

        <button>Explore Menu →</button>
      </div>

      <div className="home-image">
        <img src={pizza} alt="Pizza" />
      </div>

      <div className="home-features">

        <div>
          <h3>Fresh Ingredients</h3>
          <p>Always fresh, always tasty.</p>
        </div>

        <div>
          <h3>Delicious Taste</h3>
          <p>Pizza made with love.</p>
        </div>

        <div>
          <h3>Fast Delivery</h3>
          <p>Right to your doorstep.</p>
        </div>

      </div>

    </div>
  );
}

export default Homepage;