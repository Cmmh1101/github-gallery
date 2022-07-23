import React, { useState, useEffect } from "react";
import { RepoProps } from "./interfaces/RepoProps";
import { Container, Row, Col } from "reactstrap";
import SubHeader from "../../utils/SubHeader";
import RepoCard from "./components/RepoCard";

const ReposList = () => {
  const [result, setResult] = useState<RepoProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
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

  if (loading) return <h1>Loading...</h1>;
  if (error) return error;

  return (
    <Container id="contact" className="">
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
                <RepoCard
                  key={repo.id}
                  clone_url={repo.clone_url}
                  createdAt={createdAt}
                  updatedAt={updatedAt}
                  language={repo.language}
                  name={repo.name}
                  url={repo.svn_url}
                  avatar={repo.owner.avatar_url}
                />
              );
            })}
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ReposList;
