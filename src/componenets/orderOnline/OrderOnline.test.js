import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import OrderOnline from './OrderOnline';

describe('OrderForm component', () => {
  test('renders order form', () => {
    render(<OrderOnline />);
    
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const phoneInput = screen.getByPlaceholderText('Phone');
    const addressInput = screen.getByPlaceholderText('Address');
    const submitButton = screen.getByText('Submit Order');
    
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('allows user to fill out and submit the form', () => {
    render(<OrderOnline />);

    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const phoneInput = screen.getByPlaceholderText('Phone');
    const addressInput = screen.getByPlaceholderText('Address');
    const submitButton = screen.getByText('Submit Order');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(addressInput, { target: { value: '123 Main St' } });

    fireEvent.click(submitButton);

    const orderSubmittedMessage = screen.getByText('Order submitted successfully!');
    expect(orderSubmittedMessage).toBeInTheDocument();

    const goBackLink = screen.getByText('Go back to Home page');
    expect(goBackLink).toBeInTheDocument();
  });
});
