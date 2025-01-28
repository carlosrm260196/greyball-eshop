import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { Product } from '@/app/models/product.model';

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  description: 'This is a test product',
  price: 9.99,
  currency: 'USD',
  image: 'https://via.placeholder.com/150',
  rating: 4.5,
};

test('renders product card with correct information', () => {
  render(<ProductCard product={mockProduct} />);
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('This is a test product...')).toBeInTheDocument();
  expect(screen.getByText('9.99 USD')).toBeInTheDocument();
  expect(screen.getByText('Rating: 4.5')).toBeInTheDocument();
});