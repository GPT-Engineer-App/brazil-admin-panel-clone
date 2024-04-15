import React from "react";
import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { FaUser, FaWallet, FaCreditCard, FaExchangeAlt, FaChartLine, FaHandHoldingUsd } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Flex as="header" bg="brand.900" color="white" p={4} align="center">
        <Image src="https://logopng.com.br/logos/banco-do-brasil-5.svg" alt="Banco do Brasil" h={8} mr={4} />
        <Heading size="md">Painel de Administração</Heading>
      </Flex>

      <Flex maxW="7xl" mx="auto" py={8} px={[4, 6, 8]} wrap="wrap">
        <Box flex={["1 1 100%", "1 1 50%"]} bg="white" p={8} shadow="md" rounded="md" mb={[8, 0]} mr={[0, 8]}>
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

          <Button colorScheme="brand.700" size="lg" mt={4}>
            Nova Transferência
          </Button>
        </Box>

        <Box flex={["1 1 100%", "1 1 50%"]} bg="white" p={8} shadow="md" rounded="md">
          <Flex align="center" mb={8}>
            <FaChartLine size={24} color="gray.500" />
            <Text fontSize="2xl" fontWeight="bold" ml={2}>
              Investimentos
            </Text>
          </Flex>

          <Box mb={8}>
            <Text fontSize="xl" fontWeight="bold">
              Saldo
            </Text>
            <Text fontSize="3xl">R$ 50.000,00</Text>
          </Box>

          <Button colorScheme="brand.700" size="lg">
            Ver Detalhes
          </Button>
        </Box>

        <Box flex="1 1 100%" bg="white" p={8} shadow="md" rounded="md" mt={8}>
          <Flex align="center" mb={8}>
            <FaHandHoldingUsd size={24} color="gray.500" />
            <Text fontSize="2xl" fontWeight="bold" ml={2}>
              Empréstimos
            </Text>
          </Flex>

          <Button colorScheme="brand.800" size="lg">
            Solicitar Empréstimo
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
