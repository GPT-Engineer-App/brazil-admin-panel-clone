import React from "react";
import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { FaUser, FaWallet, FaCreditCard, FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Flex as="header" bg="blue.500" color="white" p={4} align="center">
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5jbyUyMGRvJTIwYnJhc2lsJTIwbG9nb3xlbnwwfHx8fDE3MTMyMTg4NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Banco do Brasil" h={8} mr={4} />
        <Heading size="md">Painel de Administração</Heading>
      </Flex>

      <Flex maxW="7xl" mx="auto" py={8} px={[4, 6, 8]}>
        <Box flex={1} bg="white" p={8} shadow="md" rounded="md">
          <Flex align="center" mb={8}>
            <FaUser size={24} color="gray.500" />
            <Text fontSize="2xl" fontWeight="bold" ml={2}>
              Minha Conta
            </Text>
          </Flex>

          <Box mb={8}>
            <Text fontSize="xl" fontWeight="bold">
              Saldo
            </Text>
            <Text fontSize="3xl">R$ 15.000,00</Text>
          </Box>

          <Flex mb={8}>
            <Button colorScheme="blue" leftIcon={<FaWallet />} mr={4}>
              Extrato
            </Button>
            <Button colorScheme="green" leftIcon={<FaCreditCard />}>
              Cartões
            </Button>
          </Flex>

          <Flex align="center">
            <FaExchangeAlt size={24} color="gray.500" />
            <Text fontSize="xl" fontWeight="bold" ml={2}>
              Transferências
            </Text>
          </Flex>

          <Button colorScheme="blue" size="lg" mt={4}>
            Nova Transferência
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
