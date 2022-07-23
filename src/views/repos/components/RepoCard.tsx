import React from "react";
import { Card, CardBody, CardHeader, CardLink, CardText } from "reactstrap";

interface RepoProps {
  name: string;
  url: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
  clone_url: string;
  hasDownloads?: boolean;
  visibility?: string;
  description?: string;
  avatar: string;
}

const RepoCard = ({
  name,
  url,
  language,
  createdAt,
  updatedAt,
  hasDownloads,
  visibility,
  description,
  avatar,
  clone_url,
}: RepoProps) => {
  return (
    <Card className="col-4 m-3">
      <CardHeader className="text-uppercase card-header">
        <img src={avatar} alt="avatar" />
        {name.split("-").join(" ")}
      </CardHeader>
      <CardBody>
        <CardText>{description}</CardText>
        <CardText>
          Main Language:{" "}
          <span
            className={`${
              language === "JavaScript"
                ? "text-warning"
                : language === "TypeScript"
                ? "text-info"
                : language === "HTML"
                ? "text-primary"
                : language === "SCSS" && "text-danger"
            }`}
          >
            {language}
          </span>
        </CardText>

        <CardText>Created at: {createdAt} </CardText>
        <CardText>Updated at: {updatedAt.toLocaleDateString()} </CardText>
        <CardText>Clone Link: {clone_url}</CardText>
        <CardLink href={url} target="_blank">
          Visit repo
        </CardLink>
      </CardBody>
    </Card>
  );
};

export default RepoCard;
