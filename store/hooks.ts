import {
	useDispatch,
	useSelector,
	type TypedUseSelectorHook,
} from 'react-redux';
import { type AppDispatch, RootState } from '../store/store';

type DispatchFunction = () => AppDispatch;

export const useExpensesDispatch: DispatchFunction = useDispatch;
export const useExpensesSelector: TypedUseSelectorHook<RootState> = useSelector;
