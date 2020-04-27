import { Col, Container, Row } from '../components/Grid';
import { FormBtn, Input } from '../components/Form';
import React, { useState } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';

function Books() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.searchBook(formObject.title)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.error(err));
  }

  function saveBook(bookData) {
      API.saveBook(bookData)
      .then(() => console.log(`saved book`))
      .catch(err => console.error(err));
  }

  return (
    <Container fluid>
      <Jumbotron>
        <h1>Google Books Search</h1>
      </Jumbotron>
      <Row>
        <Col size='md-12'>
          <h3>Search</h3>
          <Col size='md-12'>
            <form>
              <Input
                onChange={handleInputChange}
                name='title'
                placeholder='Search for a book title!'
              />
              <FormBtn disabled={!formObject.title} onClick={handleFormSubmit}>
                Search
              </FormBtn>
            </form>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col size='md-12'>
          <h3>Results</h3>
        </Col>
        <div className='col-md-12'>
          {books.length ? (
            books.map((book) => (
              <div className='row py-2' key={book.id}>
                <div className='col-md-3 my-auto'>
                  <img
                    className='img-fluid'
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt='book-cover'
                    style={{ width: '100%' }}
                  ></img>
                </div>
                <Col size='md-9'>
                  <div className='card-body'>
                    <h6 className='card-title'>{book.volumeInfo.title}</h6>
                    <h6 className='card-subtitle mb-2 text-muted'>
                      {book.volumeInfo.authors}
                    </h6>
                    <p className='card-text'>{book.volumeInfo.description}</p>
                    <a
                      href={book.volumeInfo.infoLink}
                      className='btn btn-primary'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View
                    </a>
                    <button
                      type='button'
                      className='btn btn-info'
                      onClick={() => saveBook({
                          title: book.volumeInfo.title,
                          author: book.volumeInfo.authors[0],
                          description: book.volumeInfo.description,
                          image: book.volumeInfo.imageLinks.thumbnail,
                          link: book.volumeInfo.infoLink
                      })}
                    >
                      Save
                    </button>
                  </div>
                </Col>
              </div>
            ))
          ) : (
            <div className='text-center'>
              <h3>No Results to Display</h3>
            </div>
          )}
        </div>
      </Row>
    </Container>
  );
}

export default Books;
