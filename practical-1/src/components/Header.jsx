const myStyle = {
  navbar: {
    backgroundColor: "#0f172a",
    color: "#ffffff",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 50px",
  },
  menu: {
    display: "flex",
    gap: "30px",
    cursor: "pointer",
  },
};

function Header() {
  return (
    <section style={myStyle.navbar}>
      <div>
        {/* <h1>Logo</h1> */}
        <img width={180} src="./src/assets/logo.png" alt="" />
      </div>
      <div>
        <ul style={myStyle.menu}>
          <li>Home</li>
          <li>About</li>
          <li>contactUs</li>
          <li>Service</li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
