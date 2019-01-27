import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, history, startRemoveExpenses, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    history = { push: jest.fn() };
    startRemoveExpenses = jest.fn();
    wrapper = shallow(<EditExpensePage expense={expenses[2]} startEditExpense={startEditExpense} history={history} startRemoveExpenses={startRemoveExpenses} />)
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle startRemoveExpenses', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpenses).toHaveBeenLastCalledWith({ id: expenses[2].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
});