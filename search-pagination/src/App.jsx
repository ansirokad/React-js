import { useEffect, useState } from "react";


function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");



  const API = "http://localhost:3000/blogs";

  fetch(API, {
    method: "GET",
    "Content-Type": "application/json"
  }).then((response) => {
    response.json().then((data) => {
      setData(data);
    })
  });

  useEffect(() => {

  }, [data]);

  const perpagesBlog = 3;
  const totalPages = Math.ceil(data.length / perpagesBlog);
  let [currentPage, setCurrentPage] = useState(1);


  let lastIndex = perpagesBlog * currentPage;  // 3*1 =1   //3*2=6
  let firstIndex = lastIndex - perpagesBlog;  // 3-3 = 0    // 6-3 = 3

  let currentPageData = data.slice(firstIndex, lastIndex);



  return (
    <>
      <div className="container py-5">

        {/* Search */}
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 ms-auto">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search blogs..."
                className="form-control border rounded-start-3 py-2"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />

              <button className="btn btn-dark px-4">
                Search
              </button>
            </div>
          </div>
        </div>


        <div>
          <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==1}>Previous</button>
          {
            Array.from({ length: totalPages }).map((_, index) => {
              return (
                <button key={index} onClick={() => setCurrentPage(index + 1)}>{index + 1}  </button>
              );
            })
          }
          <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage==totalPages}>Next</button>
        </div>


        {/* Blogs */}
        <div className="row g-5">

          {currentPageData
            .filter((element) => {
              return element.title
                .toLowerCase()
                .includes(search.toLowerCase());
            })
            .map((element, index) => {

              return (
                <div className="col-lg-4 col-md-6 col-12" key={index}>

                  <div className="h-100">

                    {/* Image */}
                    <img
                      src={element.image}
                      alt={element.title}
                      className="img-fluid rounded-4 w-100"
                      style={{
                        height: "230px",
                        objectFit: "cover"
                      }}
                    />

                    <div className="pt-3">

                      <div className="d-flex align-items-center gap-2 mb-2">
                        <small className="fw-semibold text-dark">
                          {element.author}
                        </small>

                        <span className="text-muted">•</span>

                        <small className="text-muted">
                          {element.date}
                        </small>
                      </div>

                      <h4 className="fw-bold mb-2">
                        {element.title}
                      </h4>

                      <p className="text-secondary mb-3">
                        {element.description}
                      </p>

                      <button className="btn btn-link text-dark fw-semibold p-0 text-decoration-none">
                        Read More →
                      </button>

                    </div>

                  </div>

                </div>
              );
            })}

        </div>

      </div >
    </>
  )
}

export default App
