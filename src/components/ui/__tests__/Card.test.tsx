import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Card variant="white">White</Card>);
    expect(screen.getByText('White')).toHaveClass('bg-neutral-white');

    rerender(<Card variant="navy-surface">Navy</Card>);
    expect(screen.getByText('Navy')).toHaveClass('bg-navy-surface');

    rerender(<Card variant="gradient">Gradient</Card>);
    expect(screen.getByText('Gradient')).toHaveClass('from-sky-pale');
  });

  it('renders with hover effect', () => {
    render(<Card hover>Hover card</Card>);
    expect(screen.getByText('Hover card')).toHaveClass('hover:-translate-y-1');
  });

  it('renders with different padding', () => {
    const { rerender } = render(<Card padding="none">No padding</Card>);
    expect(screen.getByText('No padding')).not.toHaveClass('p-6');

    rerender(<Card padding="sm">Small padding</Card>);
    expect(screen.getByText('Small padding')).toHaveClass('p-4');

    rerender(<Card padding="lg">Large padding</Card>);
    expect(screen.getByText('Large padding')).toHaveClass('p-8');
  });
});
