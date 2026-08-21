function Student({studentInformation}) {
return(
      <section>
    {
    studentInformation.map((data) => {
      return (
        <>
          <h1>Student Name : {data.studentName}</h1>
          <h2>College Name : {data.clgName}</h2>
          <h3>Age : {data.age}</h3>
          <h4>Gender : {data.gender}</h4>
        </>
      );
    })}
  </section>
)
}

export default Student;
