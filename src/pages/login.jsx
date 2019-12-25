import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import "./login.css";

export default function Login(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="email" bsSize="large">
          <Form.Label>Email</Form.Label>
          <Form.Control autoFocus type="email" name="email" ref={register} />
        </Form.Group>
        <Form.Group controlId="password" bsSize="large">
          <Form.Label>Password</Form.Label>
          <Form.Control name="passowrd" ref={register} type="password" />
        </Form.Group>
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
