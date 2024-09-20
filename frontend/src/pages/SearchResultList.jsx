import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";

import CommonSection from "./../shared/CommonSection";
import TourCard from "./../shared/TourCard";
import NewsLetter from "./../shared/NewsLetter";

const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={"Tour search result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default SearchResultList;
