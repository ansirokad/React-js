// function Home(props){
//     console.log(props);
//     return;
// }

{
  /* Rest default lname (modify) */
}
function Home({ lname = "lastName", ...props }) {
  console.log(props);
  console.log(lname);
  return;
}

export default Home;
