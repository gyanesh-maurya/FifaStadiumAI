import { render, screen, fireEvent } from '@testing-library/react';
import DashboardPage from '../app/dashboard/fan/page';
import { toast } from 'sonner';

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    info: jest.fn(),
  }
}));

// Mock the dynamic map component
jest.mock('next/dynamic', () => () => {
  return function MockStadiumMap() {
    return <div data-testid="stadium-map">Map</div>;
  };
});

describe('Fan Dashboard', () => {
  it('renders the dashboard widgets and map', () => {
    render(<DashboardPage />);
    
    expect(screen.getByText('Your Seat')).toBeInTheDocument();
    expect(screen.getByText('Interactive Map')).toBeInTheDocument();
    expect(screen.getByTestId('stadium-map')).toBeInTheDocument();
  });

  it('handles ticket and navigation button clicks', () => {
    render(<DashboardPage />);
    
    const ticketBtn = screen.getByText('Show Ticket');
    fireEvent.click(ticketBtn);
    expect(toast.success).toHaveBeenCalled();

    const navBtn = screen.getByText('Navigate to Seat');
    fireEvent.click(navBtn);
    expect(toast.info).toHaveBeenCalled();
  });
});
