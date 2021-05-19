import React, { useEffect, useState } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { useLocation, Link } from 'react-router-dom';

export default params => {
  const location = useLocation();
  const userId = location.search.split('=')[1];
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
      .then(buffer => buffer.text())
      .then(stringResponse => JSON.parse(stringResponse))
      .then(data => setPosts(data));
  }, []);
  return (
    <Row style={{ display: 'flex', margin: '5%', justifyContent: 'center' }}>
      {posts &&
        posts.map(post => (
          <Col md="12">
            <Card body>
              <CardTitle tag="h5">{post.title}</CardTitle>
              <CardText>{post.body}</CardText>
              <Button color="primary">
                <Link
                  style={{ color: '#fff' }}
                  to={'/details?postId=' + post.id}
                >
                  Show details
                </Link>
              </Button>
            </Card>
          </Col>
        ))}
    </Row>
  );
};
