import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { StadiumAIWidget } from '../components/ai/StadiumAIWidget'

// Mock the ai/react hook
jest.mock('ai/react', () => ({
  useChat: () => ({
    messages: [
      {
        id: '1',
        role: 'assistant',
        content: 'Hi there! I am StadiumAI, your FIFA 2026 Copilot.',
      },
    ],
    input: '',
    handleInputChange: jest.fn(),
    handleSubmit: jest.fn(),
    isLoading: false,
  }),
}))

describe('StadiumAIWidget', () => {
  it('renders the floating button initially', () => {
    render(<StadiumAIWidget />)
    const toggleBtn = screen.getByLabelText(/Open AI Copilot/i)
    expect(toggleBtn).toBeInTheDocument()
  })

  it('opens the chat interface when clicked', () => {
    render(<StadiumAIWidget />)
    const toggleBtn = screen.getByLabelText(/Open AI Copilot/i)
    
    // Click to open
    fireEvent.click(toggleBtn)
    
    // The chat window should now be visible with the initial message
    expect(screen.getByText('Hi there! I am StadiumAI, your FIFA 2026 Copilot.')).toBeInTheDocument()
  })
})
