import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home component', () => {
  render(<Home />);
  
  const largeImageSection = screen.getByText('Welcome to Little Lemon');
  const specialsSection = screen.getByText("This Week's Specials");
  const ratingsReviewsSection = screen.getByText("Ratings and Reviews");
  const aboutSection = screen.getByText('Our Story');

  expect(largeImageSection).toBeInTheDocument();
  expect(specialsSection).toBeInTheDocument();
  expect(ratingsReviewsSection).toBeInTheDocument();
  expect(aboutSection).toBeInTheDocument();
});
