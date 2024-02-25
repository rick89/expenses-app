import { useExpensesSelector } from '../store/hooks';
import { ExpensesFlatList } from '../components/ExpensesFlatList';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ExpensesTotalBar } from '../components/ExpensesTotalBar';

export const AllExpensesScreen = () => {
	const expenses = useExpensesSelector((state) => state.expenses);

	return (
		<ScreenWrapper>
			<ExpensesTotalBar />
			<ExpensesFlatList expenses={expenses} />
		</ScreenWrapper>
	);
};
