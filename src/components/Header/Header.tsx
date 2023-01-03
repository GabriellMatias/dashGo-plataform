import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
	return (
		<Flex
			w="100%"
			as="header"
			maxW={1480}
			h="20"
			mx="auto"
			mt="4"
			px="6"
			align="center"
		>
			<Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
				DashGo
				<Text color="pink.500" as="span" ml="1">
					.
				</Text>
			</Text>
			<Flex
				as={'label'}
				flex="1"
				py="4"
				px="8"
				ml="6"
				maxW={400}
				alignSelf="center"
				color="gray.200"
				position="relative"
				bg="gray.800"
				borderRadius="full"
			>
				<Input
					color="gray.50"
					variant="unstyled"
					placeholder="Buscar na plataforma"
					_placeholder={{ color: 'gray.400' }}
					px="4"
					mr="4"
				/>
				<Icon as={RiSearchLine} />
			</Flex>

			<Flex align={'center'} ml="auto">
				<HStack
					spacing="8"
					mx={'8'}
					pr="8"
					py="1"
					color={'gray.300'}
					borderColor="gray.700"
					borderRightWidth={1}
				>
					<Icon as={RiNotificationLine} fontSize="20" />
					<Icon as={RiUserAddLine} fontSize="20" />
				</HStack>
				<Flex align={'center'}>
					<Box mr={'4'} textAlign="right">
						<Text>Gabriell Matias</Text>
						<Text color={'gray.300'} fontSize="small">
							gabriel.goiasat@gmail.com
						</Text>
					</Box>
					<Avatar
						size="md"
						name="Gabriel Matias"
						src="https://github.com/Gabriellmatias.png  "
					/>
				</Flex>
			</Flex>
		</Flex>
	)
}
