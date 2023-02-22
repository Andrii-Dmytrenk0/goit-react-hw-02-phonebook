import React from "react";
import { Form } from "./Form/Form";
import { ConstactItem } from "./Constacts/Constacts";
import { nanoid } from 'nanoid';


export class App extends React.Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data)
 
  }



  render() {
  
    return (
      <Form onSubmit={this.formSubmitHandler} />

    )
  }
};
