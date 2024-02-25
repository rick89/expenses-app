import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Expense = {
	id: string;
	title: string;
	amount: string;
	date: string;
};

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
	},
});

export default expensesSlice;
export const { saveExpense, deleteExpense } = expensesSlice.actions;
