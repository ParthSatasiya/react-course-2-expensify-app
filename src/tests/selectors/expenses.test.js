import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined 
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[2], expenses[1] ]);
});

test('should filter by text startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined 
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by text endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[0], expenses[1] ]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined 
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined 
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});