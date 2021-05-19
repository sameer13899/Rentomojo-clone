import React, { useEffect, useState } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';

export default params => {
  const location = useLocation();
  const [postData, setPostData] = useState(null);
  const [comments, setComments] = useState(null);
  const postId = location.search.split('=')[1];
  const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
      .then(buffer => buffer.text())
      .then(stringResponse => JSON.parse(stringResponse))
      .then(comments => setComments(comments));
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
      .then(buffer => buffer.text())
      .then(stringResponse => JSON.parse(stringResponse))
      .then(postData => setPostData(postData));
  }, []);
  return (
    <Row style={{ display: 'flex', margin: '5%', justifyContent: 'center' }}>
      {postData && (
        <Col md="12">
          <Card body>
            <CardTitle tag="h5">{postData.title}</CardTitle>
            <CardText>{postData.body}</CardText>
            <Button color="primary" onClick={getComments}>
              Show Comments
            </Button>
          </Card>
        </Col>
      )}
      {comments &&
        comments.map(comment => (
          <Card body>
            <CardTitle tag="h5">{comment.email}</CardTitle>
            <CardText>{comment.body}</CardText>
          </Card>
        ))}
    </Row>
  );
};
