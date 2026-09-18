function BigPizzaPage() {
  return (
    <div className="pizza-page">

      <h1>Big Big Pizza</h1>

      <div className="pizza-cards">

        <div className="pizza-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/A_Double_Cheese_Vegetable_Pizza.jpg"
            alt="Margherita"
          />

          <div className="pizza-info">
            <h2>Margherita</h2>
            <p>Classic delight with 100% real mozzarella cheese</p>

            <div className="pizza-bottom">
              <h3>₹399</h3>
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="pizza-card">
          <img
              src="https://www.lamilano.pizza/image/Double%20Cheese%20margherita%20pizza.webp"
            alt="Double Cheese Margherita"
          />

          <div className="pizza-info">
            <h2>Double Cheese Margherita</h2>
            <p>Classic pizza loaded with extra mozzarella cheese</p>

            <div className="pizza-bottom">
              <h3>₹449</h3>
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="pizza-card">
          <img
              src="https://image.cdn.shpy.in/99675/SKU-0024_0-1714357442506.webp?format=webp"
            alt="Farmhouse"
          />

          <div className="pizza-info">
            <h2>Farmhouse</h2>
            <p>Onion, capsicum, tomato and grilled mushroom</p>

            <div className="pizza-bottom">
              <h3>₹469</h3>
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="pizza-card">
          <img
              src="https://www.dominos.co.in/files/items/Mexican-Green-Wave.png"
            alt="Mexican Green Wave"
          />

          <div className="pizza-info">
            <h2>Mexican Green Wave</h2>
            <p>Onion, capsicum, tomato and jalapeno</p>

            <div className="pizza-bottom">
              <h3>₹479</h3>
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="pizza-card">
          <img
              src="https://files.idyllic.app/files/static/4553065"
            alt="Deluxe Veggie"
          />

          <div className="pizza-info">
            <h2>Deluxe Veggie</h2>
            <p>Onion, capsicum, mushroom, corn and paneer</p>

            <div className="pizza-bottom">
              <h3>₹499</h3>
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="pizza-card">
          <img
            src="IMAGE-LINK"
            alt="Veg Extravaganza"
          />

          <div className="pizza-info">
            <h2>Veg Extravaganza</h2>
            <p>Olives, capsicum, onion, mushroom, corn and tomato</p>

            <div className="pizza-bottom">
              <h3>₹529</h3>
              <button>Order</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BigPizzaPage;