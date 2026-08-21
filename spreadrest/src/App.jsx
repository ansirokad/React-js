import './App.css'

function App({data}) {
  console.log({data});
  return (
    <>
    <h1>{data.companyName}</h1>
    <h2>{data.model}</h2>
    <img src={data.url} alt=""   style={{width: "200px", margin: "0 auto"}}/>
    <h3>{data.price}</h3>
    <p>{data.description}</p>
    </>
  )
}

export default App