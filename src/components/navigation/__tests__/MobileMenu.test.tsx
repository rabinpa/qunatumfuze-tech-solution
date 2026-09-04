import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MobileMenu } from '../MobileMenu';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

// Mock useReducedMotion hook
vi.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => false,
}));

describe('MobileMenu', () => {
  it('renders the hamburger button', () => {
    render(
      <MobileMenu isOpen={false} onToggle={() => {}} onClose={() => {}} />
    );
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('toggles aria-expanded when clicked', () => {
    const onToggle = vi.fn();
    render(
      <MobileMenu isOpen={false} onToggle={onToggle} onClose={() => {}} />
    );
    fireEvent.click(screen.getByLabelText('Open menu'));
    expect(onToggle).toHaveBeenCalled();
  });

  it('shows close button when open', () => {
    render(
      <MobileMenu isOpen={true} onToggle={() => {}} onClose={() => {}} />
    );
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('renders navigation links when open', () => {
    render(
      <MobileMenu isOpen={true} onToggle={() => {}} onClose={() => {}} />
    );
    const links = ['Home', 'Services', 'Work', 'Process', 'About', 'Insights', 'Contact'];
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('has correct aria attributes', () => {
    render(
      <MobileMenu isOpen={true} onToggle={() => {}} onClose={() => {}} />
    );
    const menu = screen.getByRole('dialog');
    expect(menu).toHaveAttribute('aria-modal', 'true');
    expect(menu).toHaveAttribute('aria-label', 'Mobile navigation');
  });
});
