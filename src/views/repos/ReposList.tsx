import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SubHeader from "../../utils/SubHeader";

interface RepoProps {
  id: number;
  name: string;
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
          <SubHeader enTitle="Repositories" spTitle="Repositorios" />
          {result?.map((repo) => {
            return (
              <Col xs={6} key={repo.id}>
                {repo.name}
              </Col>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default ReposList;
