import React, { useEffect, useState } from "react";

import { Draggable } from "react-drag-reorder";

// icon import
import { BiSearchAlt } from "react-icons/bi";

// styles import
import "../styles/Home.scss";

function Home() {
  const [header, setheader] = useState();

  const [row, setrow] = useState();

  const [search, setsearch] = useState("");
  const [searchResult, setsearchResult] = useState([]);

  // const [sort, setsort] = useState(false);
  // const [sorted, setsorted] = useState(row);

  useEffect(() => {
    fetch(`https://localhost/api/list.php`)
      .then((e) => e.json())
      .then((deta) => {
        setheader(deta.data.headers);
        setrow(deta.data.rows);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    row &&
      setsearchResult(
        row.filter((d) => {
          return d.name.toLowerCase().includes(search.toLowerCase());
        })
      );
  }, [search, row]);

  // useEffect(() => {
  //   function byName(a, b) {
  //     if (a.name > b.name) {
  //       return 1
  //     } else if (b.name > a.name) {
  //       return -1
  //     } else {
  //       return 0
  //     }
  //   }
  //   function byID(a, b) {
  //     if (a.id > b.id) {
  //       return 1
  //     } else if (b.id > a.id) {
  //       return -1
  //     } else {
  //       return 0
  //     }
  //   }
  //   row && setsorted(
  //     sort ? row.sort(byName) : row.sort(byID)
  //   )
  // }, [row, sort])

  // console.log(sort)
  // console.log(sorted)
  // console.log(cow)

  return (
    <main className="home">
      <h2>Table List</h2>
      <div className="search">
        <input
          type="text"
          placeholder="Search here by Name"
          onChange={(e) => setsearch(e.target.value)}
        />
        <BiSearchAlt className="icon" />
      </div>
      <div className="over">
        {search && (
          <div className="table">
            <p>
              Showing results for {`'${search}'`}
              {searchResult.length !== 0
                ? `, ${searchResult.length} ${
                    searchResult.length === 1 ? `result` : `results`
                  } found`
                : null}
            </p>
            {searchResult.length !== 0 ? (
              <div className="table-col">
                {header[0].id && (
                  <div className="table-header">{header[0].id.title}</div>
                )}
                {header[0].name && (
                  <div className="table-header">{header[0].name.title}</div>
                )}
                {header[0].message && (
                  <div className="table-header">{header[0].message.title}</div>
                )}
                {header[0].created_at && (
                  <div className="table-header">
                    {header[0].created_at.title}
                  </div>
                )}
              </div>
            ) : null}
            {searchResult.length !== 0 ? (
              <>
                {" "}
                {searchResult.map((d) => (
                  <div key={d.id} className="table-col">
                    {header[0].id && <div className="table-row">{d.id}</div>}
                    {header[0].name && (
                      <div className="table-row">{d.name}</div>
                    )}
                    {header[0].message && (
                      <div className="table-row">{d.message}</div>
                    )}
                    {header[0].created_at && (
                      <div className="table-row">{d.created_at}</div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <p>no result found for {`'${search}'`}</p>
            )}
          </div>
        )}
        {search === "" && (
          <div className="table">
            {header && (
              <div className="table-col">
                {header[0].id && (
                  <div className="table-header">{header[0].id.title}</div>
                )}
                {header[0].name && (
                  <div className="table-header">{header[0].name.title}</div>
                )}
                {header[0].message && (
                  <div className="table-header">{header[0].message.title}</div>
                )}
                {header[0].created_at && (
                  <div className="table-header">
                    {header[0].created_at.title}
                  </div>
                )}
              </div>
            )}
            {row && (
              <Draggable>
                {row.map((d) => (
                  <div key={d.id} className="table-col">
                    {header[0].id.hidden ? null : (
                      <div className="table-row">{d.id}</div>
                    )}
                    {header[0].name.hidden ? null : (
                      <div className="table-row">{d.name}</div>
                    )}
                    {header[0].message.hidden ? null : (
                      <div className="table-row">{d.message}</div>
                    )}
                    {header[0].created_at.hidden ? null : (
                      <div className="table-row">{d.created_at}</div>
                    )}
                  </div>
                ))}
              </Draggable>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
