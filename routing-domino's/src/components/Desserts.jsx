function DessertsPage() {
  return (
    <div className="pizza-page">
      <h1>Desserts</h1>

      <div className="pizza-cards">
        <div className="pizza-card">
          <img
            src="https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/20c7afa7-589e-49e8-b485-9e5981c12659_CLCsidejpgFull2x2702.jpg"
            alt="Choco Lava Cake"
          />
          <div className="pizza-info">
            <h2>Choco Lava Cake</h2>
            <p>
              Chocolate lovers delight! Indulgent, gooey molten lava inside
              chocolate cake.
            </p>
            <div className="pizza-bottom">
              <h3>₹199</h3>
              <button>Order Now</button>
            </div>
          </div>
        </div>

        <div className="pizza-card">
          <img
            src="https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/1b972483-7fa0-46db-b89a-207fff0232a2_RVsidejpgFull2x2702.jpg"
            alt="Red Velvet Lava Cake"
          />
          <div className="pizza-info">
            <h2>Red Velvet Lava Cake</h2>
            <p>
              A truly indulgent experience with sweet and rich red velvet cake
              on a creamy cheese flavoured base to give a burst of flavour in
              every bite!.
            </p>
            <div className="pizza-bottom">
              <h3>₹139</h3>
              <button>Order Now</button>
            </div>
          </div>
        </div>

        <div className="pizza-card">
          <img
            src="https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/1f7ddf95-d357-4d61-8ab0-b0bafbeedad1_ChocoLavaCakeHomeProductV1.jpg"
            alt="Choco Lava Cake Gift Hamper"
          />
          <div className="pizza-info">
            <h2>Choco Lava Cake Gift Hamper</h2>
            <p>
              Dive into the ultimate dessert experience with our Lavalicious
              Combo that’s Made to Share. *We don't include a spoon or napkin to
              support sustainability.
            </p>
            <div className="pizza-bottom">
              <h3>₹357</h3>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DessertsPage;
