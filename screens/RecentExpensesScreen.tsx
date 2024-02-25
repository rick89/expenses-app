import { useExpensesSelector } from '../store/hooks';
import { ExpensesFlatList } from '../components/ExpensesFlatList';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ExpensesTotalBar } from '../components/ExpensesTotalBar';
import { DateTime } from 'luxon';

//@ts-ignore
export const RecentExpensesScreen = ({ navigation }) => {
	const recentExpenses = useExpensesSelector((state) => state.expenses)
		.sort((a, b) => DateTime.fromISO(a.date) - DateTime.fromISO(b.date))
		.slice(0, 5);
	return (
		<ScreenWrapper>
			<ExpensesTotalBar />
			<ExpensesFlatList expenses={recentExpenses} />
		</ScreenWrapper>
	);
};
