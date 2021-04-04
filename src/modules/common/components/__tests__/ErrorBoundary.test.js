import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '..';

describe('ErrorBoundary', () => {
  it('renders the error component if an error is thrown within children', () => {
    jest.spyOn(console, 'error').mockImplementationOnce(() => {});

    const ComponentThatThrows = ({ shouldThrow }) => {
      if (shouldThrow) {
        throw new Error('mock error');
      } else {
        return null;
      }
    };

    render(
        <ErrorBoundary>
          <ComponentThatThrows shouldThrow={true} />
        </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    jest.clearAllMocks();
  });
});
