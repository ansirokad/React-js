{
  /* Rest */
}

// function Home({ lname, ...props }){
//     console.log(props);
//     console.log(lname);
//     return;
// }

{
  /* Spread */
}

// function Home(props){
//   const newItem = {...props}
//   console.log(newItem);
//     return;
// }

{
  /* Spread data modify */
};

function About(props) {
  const newItem = { ...props };

  newItem.fname = "Nisha";

  console.log("Original Name:", props.fname);
  console.log("Copy Name:", newItem.fname);
}

export default About;
