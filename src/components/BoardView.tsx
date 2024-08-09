import { FC, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import TicketCard from './Card';

interface Ticket {
	orderId: string;
	tag: string;
	companyName: string;
	timestamp: string;
	commentsCount: number;
	avatars: string[]; // Array of avatar URLs
}

interface Column {
	id: string;
	title: string;
	ticketIds: string[];
}

interface BoardViewProps {
	initialColumns: Column[];
	initialTickets: { [key: string]: Ticket };
}

const BoardView: FC<BoardViewProps> = ({ initialColumns, initialTickets }) => {
	const [columns, setColumns] = useState<Map<string, Column>>(
		new Map(initialColumns.map((column) => [column.id, column]))
	);
	const [tickets, setTickets] = useState<{ [key: string]: Ticket }>(
		initialTickets
	);

	const onDragEnd = (result: any) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const startColumn = columns.get(source.droppableId)!;
		const endColumn = columns.get(destination.droppableId)!;

		if (startColumn.id === endColumn.id) {
			const newTicketIds = Array.from(startColumn.ticketIds);
			newTicketIds.splice(source.index, 1);
			newTicketIds.splice(destination.index, 0, draggableId);

			const updatedColumn = {
				...startColumn,
				ticketIds: newTicketIds,
			};

			setColumns(new Map(columns.set(startColumn.id, updatedColumn)));
			return;
		}

		// Moving card to a different column
		const startTicketIds = Array.from(startColumn.ticketIds);
		startTicketIds.splice(source.index, 1);

		const newStartColumn = {
			...startColumn,
			ticketIds: startTicketIds,
		};

		const newEndTicketIds = Array.from(endColumn.ticketIds);
		newEndTicketIds.splice(destination.index, 0, draggableId);

		const newEndColumn = {
			...endColumn,
			ticketIds: newEndTicketIds,
		};

		setColumns(
			new Map(
				columns
					.set(startColumn.id, newStartColumn)
					.set(endColumn.id, newEndColumn)
			)
		);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					overflowX: 'hidden',
					width: '100%',
				}}>
				{Array.from(columns.values()).map((column) => (
					<Droppable key={column.id} droppableId={column.id}>
						{(provided: any) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								style={{
									minWidth: '220px',
									margin: '0 10px',
									padding: '8px',
									minHeight: '500px',
								}}>
								<h3>{column.title}</h3>
								{column.ticketIds.map((ticketId, index) => {
									const ticket = tickets[ticketId];
									return (
										<Draggable
											key={ticketId}
											draggableId={ticketId}
											index={index}>
											{(provided: any) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													style={{
														...provided.draggableProps.style,
														margin: '0 0 8px 0',
													}}>
													<TicketCard
														orderId={ticket.orderId}
														tag={ticket.tag}
														companyName={ticket.companyName}
														timestamp={ticket.timestamp}
														commentsCount={ticket.commentsCount}
														avatars={ticket.avatars}
													/>
												</div>
											)}
										</Draggable>
									);
								})}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				))}
			</div>
		</DragDropContext>
	);
};

export default BoardView;
