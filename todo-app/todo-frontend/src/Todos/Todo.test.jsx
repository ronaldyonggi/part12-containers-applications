import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

describe('<Todo />', () => {
  test('renders content', () => {
    const todo = {
      id: 1,
      text: 'Learn React Testing Library',
      done: false,
    };

    render(<Todo todo={todo} />);
    const textElement = screen.getByText('Learn React Testing Library');
    expect(textElement).toBeDefined();
  });

  test('clicking button calls event handler once', async () => {
    const todo = {
      id: 1,
      text: 'Learn React Testing Library',
      done: false,
    };
    const deleteTodo = vi.fn();
    const completeTodo = vi.fn();
    render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    );
    const button = screen.getByText('Delete');
    await userEvent.click(button);
    expect(deleteTodo.mock.calls).toHaveLength(1);
  });
});
