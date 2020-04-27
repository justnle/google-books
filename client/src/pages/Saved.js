import { Col, Container, Row } from '../components/Grid';
import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';

function Saved() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    loadSaved();
  }, []);

  function loadSaved() {
    API.getSaved()
      .then((res) => setSaved(res.data))
      .catch((err) => console.error(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then(() => loadSaved())
      .catch((err) => console.error(err));
  }

  return (
    <Container fluid>
      <Jumbotron>
        <h1>Saved Books</h1>
      </Jumbotron>
      <Row>
        <div className='col-md-12' key='saved-books'>
          {saved.length ? (
            saved.map((book) => (
              <div className='row py-2' key={`${book.id}-row`}>
                <div className='col-md-3 my-auto'>
                  <img
                    className='img-fluid'
                    src={book.image}
                    alt='book-cover'
                    style={{ width: '100%' }}
                  ></img>
                </div>
                <Col size='md-9'>
                  <div className='card-body'>
                    <h6 className='card-title'>{book.title}</h6>
                    <h6 className='card-subtitle mb-2 text-muted'>
                      {book.author}
                    </h6>
                    <p className='card-text'>{book.description}</p>
                    <button
                      type='button'
                      className='btn btn-danger'
                      onClick={() => deleteBook(book._id)}
                    >
                      Delete
                    </button>
                  </div>
                </Col>
              </div>
            ))
          ) : (
            <div className='text-center'>
              <h3>No Saved Books</h3>
            </div>
          )}
        </div>
      </Row>
    </Container>
  );
}

export default Saved;
