import {
	Avatar,
	AvatarGroup,
	Box,
	Card,
	Chip,
	IconButton,
	Typography,
} from '@mui/material';
import React, { FC } from 'react';
import CommentIcon from '@mui/icons-material/Comment'; // Import comment icon

interface CardProps {
	orderId: string;
	tag: string;
	companyName: string;
	timestamp: string;
	commentsCount: number;
	avatars: string[];
}

const TicketCard: FC<CardProps> = ({
	orderId,
	tag,
	companyName,
	timestamp,
	commentsCount,
	avatars,
}) => {
	return (
		<Card
			sx={{
				borderRadius: 1,
				position: 'relative',
				padding: 2,
				minWidth: 275,
				boxShadow: 3,
			}}>
			<>
				<Typography variant='h5' component='div' gutterBottom>
					{orderId}
				</Typography>

				<Chip
					label={tag}
					sx={{
						backgroundColor: '#FF5733',
						color: 'white',
						borderRadius: 1,
						mb: 2,
						fontSize: 10,
					}}
				/>

				<Typography variant='body2'>{companyName}</Typography>

				<Typography variant='caption' color='textSecondary' sx={{ mb: 2 }}>
					{timestamp}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						mt: 2,
					}}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							mt: 2,
						}}>
						<IconButton size='small'>
							<CommentIcon />
						</IconButton>
						<Typography variant='body2' color='textSecondary'>
							{commentsCount}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<AvatarGroup max={4}>
							{avatars?.map((avatar, index) => (
								<Avatar key={index} src={avatar} alt={`avatar-${index}`} />
							))}
						</AvatarGroup>
					</Box>
				</Box>
			</>
		</Card>
	);
};

export default TicketCard;
