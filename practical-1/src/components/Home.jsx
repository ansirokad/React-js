import "../style/Home.css";

function Home(props) {
  return (
    <section className="home-section">
      <h1>Book Collections</h1>
      <div>
        {props.mydata.map((data,index) => {
          return (
            <main key={index}>
              <h2>{data.bookname}</h2>
              <img src={data.image} alt="" />
              <h3>{data.author}</h3>
              <h4>₹{data.price}</h4>
              <p>{data.description}</p>
            </main>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
