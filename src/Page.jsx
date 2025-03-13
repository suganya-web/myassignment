import React from 'react';
import { Grid, Title } from '@mantine/core';
import FormComponent from './Form';

console.log("PageComponent is rendering..."); // Debugging line

const PageComponent = () => {
  return (
    <Grid style={{ height: "100vh" }}>
      <Grid.Col span={2} style={{ background: "#f0f0f0", padding: "10px" }}>
        <Title order={2}>Sidebar</Title>
      </Grid.Col>

      <Grid.Col span={10} style={{ padding: "20px" }}>
        <Title order={1}>Form Page</Title>
        <FormComponent />
      </Grid.Col>
    </Grid>
  );
};

export default PageComponent;