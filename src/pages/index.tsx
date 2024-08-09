import { FC, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BoardView from '../components/BoardView';
import {
	Box,
	Button,
	Container,
	IconButton,
	InputBase,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import TableView from '@/components/TableView';
import { GridOnOutlined, ViewColumnOutlined } from '@mui/icons-material';

const Home: FC = () => {
	const initialColumns = [
		{ id: 'received', title: 'Received', ticketIds: ['1', '2'] },
		{ id: 'processing', title: 'Processing', ticketIds: ['3'] },
		{ id: 'booking', title: 'Booking', ticketIds: ['4'] },
		{ id: 'canceled', title: 'Canceled', ticketIds: ['5'] },
	];

	const initialTickets = {
		'1': {
			orderId: 'OrderId',
			tag: 'tag_text',
			companyName: 'Private Helicopter Tour Dubai',
			timestamp: 'August 17, 2024 7:00 AM',
			commentsCount: 17,
			customer: {
				name: 'John',
				email: 'john@gmail.com',
			},
			avatars: [
				'https://via.placeholder.com/24',
				'https://via.placeholder.com/24',
				'https://via.placeholder.com/24',
			],
			status: 'Received',
		},
		'2': {
			orderId: 'OrderId',
			tag: 'tag_text',
			companyName: 'Private Helicopter Tour Dubai',
			timestamp: 'August 17, 2024 7:00 AM',
			commentsCount: 17,
			customer: {
				name: 'John',
				email: 'john@gmail.com',
			},
			avatars: [
				'https://via.placeholder.com/24',
				'https://via.placeholder.com/24',
				'https://via.placeholder.com/24',
			],
			status: 'Received',
		},
		'3': {
			orderId: 'OrderId',
			tag: 'tag_text',
			companyName: 'Private Helicopter Tour Dubai',
			timestamp: 'August 17, 2024 7:00 AM',
			commentsCount: 17,
			customer: {
				name: 'John',
				email: 'john@gmail.com',
			},
			avatars: [
				'https://via.placeholder.com/24',
				'https://via.placeholder.com/24',
				'https://via.placeholder.com/24',
			],
			status: 'Processing',
		},
		'4': {
			orderId: 'OrderId',
			tag: 'tag_text',
			companyName: 'Private Helicopter Tour Dubai',
			timestamp: 'August 17, 2024 7:00 AM',
			commentsCount: 17,
			customer: {
				name: 'John',
				email: 'john@gmail.com',
			},
			avatars: [
				'https://via.placeholder.com/24',
				'https://via.placeholder.com/24',
				'https://via.placeholder.com/24',
			],
			status: 'Booking',
		},
		'5': {
			orderId: 'OrderId',
			tag: 'tag_text',
			companyName: 'Private Helicopter Tour Dubai',
			timestamp: 'August 17, 2024 7:00 AM',
			commentsCount: 17,
			customer: {
				name: 'John',
				email: 'john@gmail.com',
			},
			avatars: [
				'https://via.placeholder.com/24',
				'https://via.placeholder.com/24',
				'https://via.placeholder.com/24',
			],
			status: 'Canceled',
		},
	};

	const [view, setView] = useState<string>('board');

	const handleViewChange = (
		event: React.MouseEvent<HTMLElement>,
		newView: string
	) => {
		if (newView !== null) {
			setView(newView);
		}
	};
	return (
		<div>
			<Navbar />
			<Sidebar />
			<Container
				style={{
					marginLeft: 240,
					padding: '20px',
					paddingTop: '0px',
					width: 'calc(100% - 240px)',
				}}>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					padding={2}>
					<Typography
						variant='h6'
						fontWeight='bold'
						color='#014C46'
						sx={{ paddingTop: '0px' }}>
						Redeems & Exchanges
					</Typography>
					<Button
						startIcon={<FileUploadIcon />}
						sx={{ textTransform: 'none', marginLeft: 2 }}>
						Export
					</Button>
				</Box>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					padding={2}>
					<Box
						display='flex'
						alignItems='center'
						paddingX={1}
						paddingY={0.5}
						borderRadius={1}
						bgcolor='background.paper'
						boxShadow={1}>
						<IconButton sx={{ p: '10px' }}>
							<SearchIcon />
						</IconButton>
						<InputBase
							placeholder='Search Redeem'
							inputProps={{ 'aria-label': 'search redeem' }}
						/>
					</Box>

					<ToggleButtonGroup
						value={view}
						exclusive
						onChange={handleViewChange}
						sx={{
							marginLeft: 2,
							boxShadow: 1,
							borderRadius: 2, // Rounded corners for the button group
							'& .MuiToggleButtonGroup-grouped': {
								border: 'none',
								borderRadius: '8px',
							},
							'& .MuiToggleButton-root': {
								borderRadius: '8px',
								color: '#000',
								backgroundColor: '#FFF',
							},
							'& .MuiToggleButton-root:first-of-type': {
								borderRadius: '8px 0 0 8px', // Ensure correct radius for the first button
							},
							'& .MuiToggleButton-root:last-of-type': {
								borderRadius: '0 8px 8px 0', // Ensure correct radius for the second button
							},
							'& .Mui-selected': {
								color: 'white !important',
								backgroundColor: '#014C46 !important',
							},
							'& .MuiToggleButton-root:not(.Mui-selected)': {
								color: '#000',
							},
						}}>
						<ToggleButton value='board'>
							<ViewColumnOutlined /> Board
						</ToggleButton>
						<ToggleButton value='table'>
							<GridOnOutlined /> Table
						</ToggleButton>
					</ToggleButtonGroup>
				</Box>

				{view === 'board' ? (
					<BoardView
						initialColumns={initialColumns}
						initialTickets={initialTickets}
					/>
				) : (
					<TableView tickets={initialTickets} />
				)}
			</Container>
		</div>
	);
};

export default Home;
