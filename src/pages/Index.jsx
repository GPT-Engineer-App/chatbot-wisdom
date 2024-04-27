// Complete the Index page component here
// Use chakra-ui
import React from "react";
import { Box, Container, Input, Button, Text, VStack, useToast, useColorMode } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const fetchAnswer = async () => {
    if (!question) {
      toast({
        title: "Error",
        description: "Please enter a question.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate fetching an answer from Google (in a real scenario, this would use Google Search API)
    setAnswer("This is a simulated answer as if searched from Google. Implement API call for real data.");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">
            Ask Me Anything! <FaRobot />
          </Text>
        </Box>
        <Input placeholder="Type your question here..." value={question} onChange={handleQuestionChange} />
        <Button colorScheme="blue" onClick={fetchAnswer} mr={4}>
          Get Answer
        </Button>
        {answer && (
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text>{answer}</Text>
          </Box>
        )}
        <Button
          onClick={() => {
            const newColorMode = colorMode === "light" ? "dark" : "light";
            toggleColorMode();
          }}
        >
          Toggle Dark Mode
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
