import { Text, View } from 'react-native';
import { useExpensesSelector } from '../store/hooks';
import { ExpensesFlatList } from '../components/ExpensesFlatList';
import { ScreenWrapper } from '../components/ScreenWrapper';

export const AllExpensesScreen = () => {
	const expenses = useExpensesSelector((state) => state.expenses);

	return (
		<ScreenWrapper>
			<ExpensesFlatList expenses={expenses} />
		</ScreenWrapper>
	);
};
