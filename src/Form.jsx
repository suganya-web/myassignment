import React, { useState } from 'react';
import { TextInput, Button } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

console.log("FormComponent is rendering..."); // Debugging line

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
  });

  return (
    <div>
      <TextInput
        label="Name"
        value={formData.name}
        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
      />
      <Dropzone onDrop={(files) => setFormData({ ...formData, image: files[0] })}>
        {formData.image ? <p>File: {formData.image.name}</p> : <p>Drop an image here</p>}
      </Dropzone>
      <Button onClick={() => console.log("Form Submitted", formData)}>Submit</Button>
    </div>
  );
};

export default FormComponent;