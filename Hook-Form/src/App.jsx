import "./App.css";
import { MdTitle, MdEmail } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LuStickyNote } from "react-icons/lu";
import { useEffect, useState } from "react";

function App() {

  const [fullname,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [pnumber,setPnumber] = useState(0);
  const [notes,setNotes] = useState("");
  const [cv,setCv] = useState("");
  const [dataStore,setDataStore] =useState (null);
  const dataSubmit=()=>{
      setDataStore({
        fullname : fullname,
        email : email,
        pnumber : pnumber,
        notes:notes,
        cv:cv
      });
  };

  useEffect(()=>{
    if(dataStore!=null){
      localStorage.setItem("dataStore",JSON.stringify(dataStore));
    }
  },[dataStore])
  return (
    <>
      <section>
        <form>
          <div>
            <h1>LOGO</h1>
          </div>
          <div>
            <h3>Vacancy Application</h3>
          </div>
          <div>
            <p>Enter Web Form Description</p>
          </div>
          <div className="detail ">
            <main>
              <MdTitle style={{ position: "absolute", top: "14px", left:"10px" }}
                size={"22px"} color="grey" />
              <input type="text" placeholder="Full Name" onChange={(event)=>{setFullName(event.target.value)}}/>
            </main>
            <main>
              <MdEmail style={{ position: "absolute", top: "14px", left:"10px" }}
                size={"22px"} color="grey" />
              <input type="email" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}}/>
            </main>
            <main>
              <MdTitle style={{ position: "absolute", top: "14px", left:"10px" }}
                size={"22px"} color="grey" />
              <input type="number" placeholder="Phone Number" onChange={(event)=>{setPnumber(event.target.value)}}/>
            </main>
            <main>
              <LuStickyNote style={{ position: "absolute", top: "14px", left:"10px" }}
                size={"22px"} color="grey" />
              <input type="text" placeholder="Notes" onChange={(event)=>{setNotes(event.target.value)}}/>
            </main>
            <main>
              <FaCloudUploadAlt
                style={{ position: "absolute", top: "14px", left:"10px" }}
                size={"22px"} color="grey"
              />
              <input type="text" placeholder="(CV)" onChange={(event)=>{setCv(event.target.value)}}/>
            </main>
            <main className="d-flex gap-3">
              <button onClick={dataSubmit}>Add Field</button>
              <button>Add Field Section</button>
            </main>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
