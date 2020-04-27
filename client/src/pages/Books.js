import { Container } from '../components/Grid';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import React, { useState } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';

function Books() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchBook(formObject.title)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.error(err));
  };

  return (
    <Container fluid>
      <Jumbotron>
        <h1>Google Books Search</h1>
      </Jumbotron>
      <Container>
        <SearchBar
          input={handleInputChange}
          disabled={formObject.title}
          submit={handleFormSubmit}
        />
        <Results data={books} />
      </Container>
    </Container>
  );
}

export default Books;
