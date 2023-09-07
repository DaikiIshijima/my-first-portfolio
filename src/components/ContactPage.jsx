import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container className="py-3">
      <h2 className="fs-2 mt-3 mb-2">問い合わせフォーム</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="my-2">
          <Form.Label>名前:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email" className="my-2">
          <Form.Label>メールアドレス:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="message" className="my-2">
          <Form.Label>メッセージ:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary mt-2 mb-3" type="submit">
          送信
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
