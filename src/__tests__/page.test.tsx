import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

// Mock the dynamically imported map or match timeline if they cause issues, but page.tsx just has Sections
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => <div>Mocked Dynamic Component</div>;
  DynamicComponent.displayName = 'LoadableComponent';
  return DynamicComponent;
});

describe('Home Page', () => {
  it('renders the Hero Section and GenAI Features', () => {
    render(<Home />)
    
    // Check if Navbar/Footer exists
    expect(screen.getAllByText('StadiumAI').length).toBeGreaterThan(0)
    
    // Check if Hero Section exists
    expect(screen.getByText('Award-Winning Hackathon Entry')).toBeInTheDocument()
    
    // Check if Features Section exists
    expect(screen.getByText('Powerful GenAI Features')).toBeInTheDocument()
  })
})
