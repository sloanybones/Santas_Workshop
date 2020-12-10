import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const ELfForm = (props) => {
  // breaking up form state peices into individaul pieces
  const [name, setName] = useState(props.name ? props.name : "");
  const [earsize, setEarsize] = useState(props.earsize ? props.earsize : "");
  const [elf, setElf] = useState({ fname: "", earsize: "" });

   const handleSubmit = (e) => {
     // e.preventDefault(); don't need with semantic Form
     // props.addContact({ name: name, phone: phone });
     // short hand if key value have same name on objects
     if (props.id) {
       props.editContactYo({ name, earsize, id: props.id });
       props.hideEditForm();
    } else {
       props.addContactYo({ name, earsize });
       props.hideAddForm();
     }
   setName("");
    setEarsize("");
  };

  // generic handle change function
  const handleChange = (e) => {
    // {name,phone}
    setElf({ ...elf, [e.target.name]: e.target.value });
  };

  return (
    <Form unstackable onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <Form.Group widths={2}>
        <Form.Input
          onChange={handleChange}
          value={elf.name}
          size="small"
          name="fname"
          label="name"
          value={name}
          placeholder="name"
        />
        <Form.Input
          onChange={handleChange}
          value={elf.earsize}
          size="small"
          value={earsize}
          name="earsize"
          label="earsize"
          placeholder="earsize"
        />
      </Form.Group>
      {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
      <Button style={{ marginTop: "20px" }} type="submit">
        {props.id ? "Edit Elf" : "Add Elf"}
      </Button>
    </Form>
  );
};

export default ElfForm;