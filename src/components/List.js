import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

function List({ researchPapers }) { // Ensure props are correctly destructured
  return (
    <>
      {researchPapers.map((paper, index) => (
        <Card key={index} style={{ marginBottom: '1rem' }}>
          <CardImg  top />
          <CardBody>
            <CardTitle tag="h5">{paper.title}</CardTitle>
            <CardText>
              {paper.description}
            </CardText>
            <Button
              color="primary"
              href={paper.link || "#"}
              onClick={e => e.preventDefault()}
            >
              Read More
            </Button>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default List;
