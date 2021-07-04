import React, { useEffect, useState } from "react";

import "../styles/Update.scss";

function Update() {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch(`http://localhost/api/reorder.php`)
      .then((e) => e.json())
      .then((deta) => {
        setdata(deta);
        console.log(deta);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="update">
      <h2>Update</h2>
      <form action="">
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
      </form>
      {data !== 0 && (
        <>
          {data.map((d) => (
            <div className="show">
              <div className="name"></div>
              <div className="id"></div>
            </div>
          ))}
        </>
      )}
    </main>
  );
}

export default Update;
