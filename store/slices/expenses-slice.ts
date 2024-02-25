import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Expense = {
	id: string;
	title: string;
	amount: number;
	date: string;
}[];

type ExpensesState = {
	expenses: Expense[];
};

const initialState: ExpensesState = {
	expenses: [],
};

export const expensesSlice = createSlice({
	name: 'expenses-slice',
	initialState,
	reducers: {
		saveExpense(state, action: PayloadAction<Expense>) {
			state.expenses.push({
				...action.payload,
			});
		},
		deleteExpense(state, action: PayloadAction<Expense>) {
			const index = state.expenses.findIndex(
				(expense) => expense.id === action.payload.id
			);
			state.expenses.splice(index, 1);
		},
		updateExpense(state, action: PayloadAction<Expense>) {
			const expense = state.expenses.find(
				(expense) => expense.id === action.payload.id
			);
			if (!expense) {
				console.error(
					`Expense -> ${action.payload.id} not found for update.`
				);
				return;
			}
			expense.title = action.payload.title;
			expense.amount = action.payload.amount;
			expense.date = action.payload.date;
		},
	},
});

export default expensesSlice;
export const { saveExpense, deleteExpense, updateExpense } =
	expensesSlice.actions;
