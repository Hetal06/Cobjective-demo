import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";

const CreateList = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");

  const {
    todo,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const currencies = [
    {
      value: "high",
      label: "High",
    },
    {
      value: "medium",
      label: "Medium",
    },
    {
      value: "low",
      label: "Low",
    },
  ];
  return (
    <>
      <Button>
        <Link to="/">Back</Link>
      </Button>
      <Container>
        <FormControl onSubmit={handleSubmit(onSubmit)}>
          <FormLabel>Enter Title</FormLabel>
          <Input
            type="text"
            aria-label="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}></Input>
          <FormLabel>Description</FormLabel>
          <TextField></TextField>
          <FormLabel>Deadline</FormLabel>
          <TextField></TextField>
          <FormLabel>Priority</FormLabel>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency">
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button>Submit</Button>
        </FormControl>
      </Container>
    </>
  );
};

export default CreateList;
