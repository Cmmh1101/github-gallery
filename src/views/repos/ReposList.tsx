import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardLink,
  CardText,
} from "reactstrap";
import SubHeader from "../../utils/SubHeader";

interface RepoProps {
  id: number;
  name: string;
  svn_url: string;
  language: string;
  created_at: Date;
  updated_at: Date;
  clone_url: string;
  hasDownloads: boolean;
  visibility?: string;
  description?: string;
}

const ReposList = () => {
  const [result, setResult] = useState<RepoProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    // const result = async () => {

    // }
    setLoading(true);
    fetch("https://api.github.com/users/CMMH1101/repos")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.log("error fetching data:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(result);

  if (loading) return <h1>Loading...</h1>;
  if (error) return error;

  return (
    <Container
      id="contact"
      className=""
      //   style={{ height: "auto", minHeight: "100vh" }}
    >
      <Row xs={12} className="pb-5">
        <Col tag="main" xs={12}>
          <SubHeader
            enTitle="GitHub Repositories"
            spTitle="Repositorios en GitHub"
          />

          <h3>
            Public Repos Total: <span>{result.length - 1}</span>
          </h3>
          <Col xs={12} className="d-flex flex-wrap justify-content-evenly">
            {result?.map((repo) => {
              let createdAt = new Date(repo.created_at);
              let updatedAt = new Date(repo.updated_at);
              return (
                <Card className="col-4 m-3" key={repo.id}>
                  <CardHeader className="text-uppercase">
                    {repo.name.split("-").join(" ")}
                  </CardHeader>
                  <CardBody>
                    {/* <CardText>{repo.description}</CardText> */}
                    <CardText>Main Language: {repo.language}</CardText>

                    <CardText>
                      Created at: {createdAt.toLocaleDateString()}{" "}
                    </CardText>
                    <CardText>
                      Updated at: {updatedAt.toLocaleDateString()}{" "}
                    </CardText>
                    <CardLink href={repo.svn_url} target="_blank">
                      Visit repo
                    </CardLink>
                  </CardBody>
                </Card>
              );
            })}
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ReposList;
