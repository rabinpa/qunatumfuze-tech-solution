import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />);
    expect(screen.getByText('QuantumFuze')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<Footer />);
    expect(screen.getByText('Your growth partner for everything digital.')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Footer />);
    const navLinks = ['Home', 'Work', 'Process', 'About'];
    navLinks.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThan(0);
    });
  });

  it('renders service links', () => {
    render(<Footer />);
    const serviceLinks = ['Web Development', 'Digital Marketing', 'Graphic Designing', 'Mobile App Development'];
    serviceLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders social icons', () => {
    render(<Footer />);
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });

  it('renders privacy and terms links', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy')).toBeInTheDocument();
    expect(screen.getByText('Terms')).toBeInTheDocument();
  });
});
