import { useState, useEffect } from "react";

function App() {

  const API = "http://localhost:3000/employees";
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch(API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      response.json().then((data) => {
        setAllData(data);
      });
    })

  }, []);

  const [perPages, setPerPages] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allData.length / perPages);

  let lastIndex = currentPage * perPages;
  let firstIndex = lastIndex - perPages;

  const pagesData = allData.slice(firstIndex,lastIndex);

  return (
    <>
      <div className="container mt-4">
        <div className="card shadow border-0">
          <div className="p-2 bg-dark text-white rounded-top">
            <h4 className="mb-0">Employee Details</h4>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle text-center mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee Email</th>
                    <th>Employee Phone</th>
                    <th>Employee Department</th>
                    <th>Employee Position</th>
                    <th>Employee Salary</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    pagesData.map((element, index) => {
                      return (
                        <tr key={index}>
                          <td>{element.id}</td>
                          <td style={{fontWeight : 600}}>{element.name}</td>
                          <td>{element.email}</td>
                          <td>{element.phone}</td>
                          <td>
                            <span  className=" bg-light text-dark border rounded-1 px-1 py-1" style={{fontSize: "11px",fontWeight : 700 }}>
                              {element.department}
                            </span>
                          </td>
                          <td>{element.position}</td>
                          <td className="fw-bold text-dark">
                            ₹{element.salary}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="7">
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                        {/* Per Page */}
                        <div className="d-flex align-items-center gap-2">
                          <span style={{fontWeight : 600}}>Per Page Rows</span>

                          <select className=" form-select-sm w-auto" onChange={(e)=>{setPerPages(e.target.value); } }>
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>75</option>
                            <option>100</option>
                          </select>
                        </div>

                        <div className="text-muted">
                          Page <span className="fw-bold text-dark">{currentPage}</span> of <span className="fw-bold text-dark">{totalPages}</span>
                          (total {allData.length} entries)
                        </div>

                        <div className="d-flex gap-2">
                          <button className="btn btn-outline-dark btn-sm"  onClick={()=>{setCurrentPage(currentPage-1)}} disabled={currentPage==1}>
                            Pre
                          </button>

                          <button className="btn btn-dark btn-sm" onClick={()=>{setCurrentPage(currentPage+1)}} disabled={currentPage==totalPages}>
                            Next
                          </button>
                        </div>

                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>

    
  )
}

export default App