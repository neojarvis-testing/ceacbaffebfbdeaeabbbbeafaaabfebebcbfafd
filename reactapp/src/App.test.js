import {render, screen, fireEvent} from '@testing-library/react';
import App from '.App';
import '@testing-library/jest-dom';

test('renders login page',() =>
{
    render(<App/>);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test('allows login with correct credentials', () =>
{
    render(<App/>);
    fireEvent.click(screen.getByText(SignUp/i));
    fireEvent.change(screen.getByPlaceHolderText(/Name/i), {target: {value: 'Test User'}});
    fireEvent.change(screen.getByPlaceHolderText(/Email/i), {target: {value: 'test@example.com'}});
    fireEvent.change(screen.getByPlaceHolderText(/Password/i), {target: {value: 'password'}});
    
}
)