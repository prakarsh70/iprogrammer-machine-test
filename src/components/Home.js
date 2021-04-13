import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import Table from "./Table";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [photos, setphotos] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [idData, setIdData] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, [photos]);

  const fetchPhotos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setphotos(response.data.slice(0, 250));
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const saveData = (fromPhoto) => {
    setTableData([...tableData, fromPhoto]);
    setIdData([...idData, fromPhoto.id]);
  };

  const removeData = (id) => {
    setIdData(idData.filter((dataId) => dataId !== id));
    setTableData(tableData.filter((tableId) => tableId.id !== id));
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <h4 className="title">Photos Listing</h4>
          <section className="cards">
            {photos.map((data) => {
              return (
                <Cards
                  key={data.id}
                  saveData={saveData}
                  removeData={removeData}
                  idData={idData}
                  data={data}
                />
              );
            })}
          </section>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} sm={12}>
          <h4 style={{ marginTop: "1rem !important" }} className="title">
            Comparison Table
          </h4>

          {tableData.length > 0 ? (
            <Table tableData={tableData} />
          ) : (
            <h5 style={{ color: "#90cd93" }}>
              Please select photos to compare
            </h5>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
