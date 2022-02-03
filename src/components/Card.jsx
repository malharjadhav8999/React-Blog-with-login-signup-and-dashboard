import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const ProjectCard = (props) => {
  const { url, title, desc } = props;
  return (
    <Card>
      <CardImg
        alt="Card image cap"
        src={url}
        top
        style={{
          width: "50%",
          height: "50%",
        }}
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
        </CardSubtitle>
        <CardText>{desc}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
