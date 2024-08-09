import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import theme from '../styles/theme';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const onDragEnd = (result: any) => {
        // Destructure necessary properties from the result
        const { destination, source, draggableId } = result;

        // Handle the case where the item is dropped outside the list
        if (!destination) {
            return;
        }

        // Handle reordering logic here
        console.log(`Dragged item ${draggableId} from ${source.droppableId} to ${destination.droppableId}`);
    };


    return (
        <ThemeProvider theme={theme}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Component {...pageProps} />
            </DragDropContext>
        </ThemeProvider>
    );
};

export default MyApp;
