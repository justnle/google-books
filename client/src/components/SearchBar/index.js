import React from 'react';
import { Col, Row } from '../Grid';
import { Input, FormBtn } from '../Form';

function SearchBar(props) {
  return (
    <Row>
      <Col size='md-12'>
        <h3>Search</h3>
        <Col size='md-12'>
          <form>
            <Input
              onChange={props.input}
              name='title'
              placeholder='Search for a book title!'
            />
            <FormBtn disabled={!props.disabled} onClick={props.submit}>
              Search
            </FormBtn>
          </form>
        </Col>
      </Col>
    </Row>
  );
}

export default SearchBar;
