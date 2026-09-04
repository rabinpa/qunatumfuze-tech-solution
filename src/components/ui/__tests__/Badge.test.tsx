import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Tag</Badge>);
    expect(screen.getByText('Tag')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Badge variant="sky">Sky</Badge>);
    expect(screen.getByText('Sky')).toHaveClass('bg-sky-pale');

    rerender(<Badge variant="green">Green</Badge>);
    expect(screen.getByText('Green')).toHaveClass('bg-green-soft');

    rerender(<Badge variant="navy">Navy</Badge>);
    expect(screen.getByText('Navy')).toHaveClass('bg-navy-surface');

    rerender(<Badge variant="gray">Gray</Badge>);
    expect(screen.getByText('Gray')).toHaveClass('bg-neutral-lightgray');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText('Small')).toHaveClass('text-xs');

    rerender(<Badge size="md">Medium</Badge>);
    expect(screen.getByText('Medium')).toHaveClass('text-small');
  });
});
