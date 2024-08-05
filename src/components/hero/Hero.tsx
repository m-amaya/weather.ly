import { Box, Container } from "@mantine/core";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <Box className={classes.hero}>
      <Container className={classes.container} p="lg">
        Hero
      </Container>
    </Box>
  );
}
