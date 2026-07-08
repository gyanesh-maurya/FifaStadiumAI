import { render, screen } from '@testing-library/react';
import DashboardPage from '../app/dashboard/fan/page';

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
});
