import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import BookTable from './BookTable';

describe('BookTable component', () => {
  test('renders form fields and submits form', async () => {
    render(<BookTable />);

    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2023-12-25' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '18:30' } });
    fireEvent.change(screen.getByLabelText('Number of People'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getByText('Booking submitted successfully!')).toBeInTheDocument();
    });

   
  });
});
