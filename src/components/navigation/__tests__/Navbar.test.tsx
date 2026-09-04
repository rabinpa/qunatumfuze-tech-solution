import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

// Mock hooks
vi.mock('@/hooks/useScroll', () => ({
  useScroll: () => false,
}));

vi.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => false,
}));

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'QuantumFuze home' })).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navbar />);
    const links = ['Home', 'Services', 'Work', 'Process', 'About', 'Insights', 'Contact'];
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThan(0);
    });
  });

  it('renders the CTA button', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Start a Project').length).toBeGreaterThan(0);
  });

  it('has correct aria labels', () => {
    render(<Navbar />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument();
  });
});
