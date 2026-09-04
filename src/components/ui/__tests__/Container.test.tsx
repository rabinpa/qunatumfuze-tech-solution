import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container } from '../Container';

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders as different elements', () => {
    render(<Container as="section">Section</Container>);
    expect(screen.getByText('Section').tagName).toBe('SECTION');
  });

  it('renders with different max widths', () => {
    const { rerender } = render(<Container maxWidth="default">Default</Container>);
    expect(screen.getByText('Default')).toHaveClass('max-w-content');

    rerender(<Container maxWidth="narrow">Narrow</Container>);
    expect(screen.getByText('Narrow')).toHaveClass('max-w-prose');

    rerender(<Container maxWidth="wide">Wide</Container>);
    expect(screen.getByText('Wide')).toHaveClass('max-w-[1400px]');
  });

  it('has responsive padding', () => {
    render(<Container>Padding</Container>);
    expect(screen.getByText('Padding')).toHaveClass('px-4', 'sm:px-6', 'lg:px-8');
  });
});
