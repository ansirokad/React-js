import { useState } from "react";
import "./App.css"

function App() {
  const [mylist, setMylist] = useState([]);
  const API = "http://localhost:3000/blogs";
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [id, setID] = useState(null);

  fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
    response.json().then((data) => {
      setMylist(data);
    });
  })

  const handleClick = () => {
    const blog = { title, image, author, description, date };

    if (!id) {
      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
      })
    } else {
      fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
      })
    }
  }

  const handleDelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
  }

  const handleEdit = (blog) => {
    setID(blog.id);
    setTitle(blog.title);
    setImage(blog.image);
    setAuthor(blog.author);
    setDescription(blog.description);
    setDate(blog.date)

  }



  return (
    <>
      <div className="container  px-3 mt-5">
        <div className="row g-4 ">

          <div className="col-lg-4 col-md-5 col-12">
            <div className="form-box text-center">
              <form>
                <h2 className="form-title">Create Your Blog</h2>
                <p className="form-subtitle">Share your thoughts with the world</p>


                <input type="text" placeholder="Enter blog title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <br />
                <br />
                <input type="text" placeholder="Enter image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <br />
                <br />
                <input type="text" placeholder="Enter author name" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                <br />
                <br />
                <textarea type="text" placeholder="description" value={description} onChange={(e) => { setDescription(e.target.value) }} ></textarea>
                <br />
                <br />
                <input type="text" placeholder="Enter date" value={date} onChange={(e) => { setDate(e.target.value) }} />
                <br />
                <br />
                <button className="border-0 px-2 py-2 rounded" onClick={handleClick}>{id ? "EDIT" : "ADD"}</button>
              </form>
            </div>
          </div>

          <div className="col-lg-8 col-md-7 col-12">
            <div className="row g-4">
              {
                mylist.map((element, index) => {
                  return (
                    <div className="col-lg-6 col-md-6 col-12" key={index}>
                      <div className="card h-100 shadow p-3">
                        <div className="card-body">
                          <h6 className="text-muted">Blog : {index + 1}</h6>

                          <h3 className="card-title">
                            {element.title}
                          </h3>

                          <img className="blog-image mb-3" src={element.image} alt={element.title} />

                          <h6 style={{fontWeight : "600" , fontSize : "18px"}}>{element.author}</h6>
                          <p className="card-text">
                            {element.description}
                          </p>

                          <p className="text-muted mb-0">
                            <strong>Date</strong> : {element.date}
                          </p>
                        </div>
                        <div className="button d-flex justify-content-evenly">
                          <button onClick={() => { handleDelete(element.id) }} className="delete-btn border-0 fw-bold text-white rounded py-1 px-3 ">DELETE</button>
                          <button onClick={() => { handleEdit(element) }} className="edit-btn border-0  rounded py-2 px-3 fw-bold">EDIT</button>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
