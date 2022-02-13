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
  const { id, first_name, last_name, email, avatar } = props;

  return (
    <Card color="dark" outline className="my-3">
      <CardImg
        alt="Card image cap"
        src={avatar}
        top
        // style={{
        //   width: "20%",
        //   height: "20%",
        // }}
      />
      <CardBody>
        <CardTitle tag="h5">
          {/* {id} */}
          {first_name} {last_name}
        </CardTitle>
        {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
        </CardSubtitle>
        <CardText>{email}</CardText> */}
        {/* <Button>Button</Button> */}
      </CardBody>
    </Card>
  );

  // const { url, title, desc } = props;
  // return (
  //   <Card>
  //     <CardImg
  //       alt="Card image cap"
  //       src={url}
  //       top
  //       style={{
  //         width: "50%",
  //         height: "50%",
  //       }}
  //     />
  //     <CardBody>
  //       <CardTitle tag="h5">{title}</CardTitle>
  //       <CardSubtitle className="mb-2 text-muted" tag="h6">
  //         Card subtitle
  //       </CardSubtitle>
  //       <CardText>{desc}</CardText>
  //       <Button>Button</Button>
  //     </CardBody>
  //   </Card>
  // );
};

export default ProjectCard;
