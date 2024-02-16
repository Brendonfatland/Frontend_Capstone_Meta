import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('Menu component', () => {
  test('renders menu items', () => {
    render(<Menu />);
    
    // Check if menu items are rendered
    const menuItem1 = screen.getByText('Item 1');
    const menuItemPrice1 = screen.getByText('$10.99');
    const menuItem2 = screen.getByText('Item 2');
    const menuItemPrice2 = screen.getByText('$10.99');
    const menuItem3 = screen.getByText('Item 3');
    const menuItemPrice3 = screen.getByText('$10.99');
    const menuItem4 = screen.getByText('Item 4');
    const menuItemPrice4 = screen.getByText('$10.99');
    const menuItem5 = screen.getByText('Item 5');
    const menuItemPrice5 = screen.getByText('$10.99');
    
    // Assert that each menu item is rendered
    expect(menuItem1).toBeInTheDocument();
    expect(menuItemPrice1).toBeInTheDocument();
    expect(menuItem2).toBeInTheDocument();
    expect(menuItemPrice2).toBeInTheDocument();
    expect(menuItem3).toBeInTheDocument();
    expect(menuItemPrice3).toBeInTheDocument();
    expect(menuItem4).toBeInTheDocument();
    expect(menuItemPrice4).toBeInTheDocument();
    expect(menuItem5).toBeInTheDocument();
    expect(menuItemPrice5).toBeInTheDocument();
  });
});
