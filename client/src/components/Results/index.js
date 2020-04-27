import React from 'react';
import { Col, Row } from '../Grid';
import API from '../../utils/API';

function Results(props) {
  const saveBook = (bookData) => {
    API.saveBook(bookData)
      .then(() => console.log(`saved book`))
      // change button name to saved! or display message
      .catch((err) => console.error(err));
  };

  return (
    <Row>
      <Col size='md-12'>
        <h3>Results</h3>
      </Col>
      <div className='col-md-12'>
        {props.data.length ? (
          props.data.map((book) => (
            <div className='row py-2' key={book.id}>
              <div className='col-md-3 my-auto'>
                <img
                  className='img-fluid'
                  src={book.volumeInfo.imageLinks ?
                    book.volumeInfo.imageLinks.thumbnail : `https://via.placeholder.com/200x200` }
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
                    onClick={() =>
                      saveBook({
                        title: book.volumeInfo.title,
                        id: book.id,
                        author: book.volumeInfo.authors[0],
                        description: book.volumeInfo.description,
                        image: book.volumeInfo.imageLinks.thumbnail,
                        link: book.volumeInfo.infoLink,
                      })
                    }
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
  );
}

export default Results;
