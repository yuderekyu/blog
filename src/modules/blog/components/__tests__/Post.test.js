import React from 'react';
import { render, screen } from '@testing-library/react';
import { Post } from '..';

describe('Post', () => {
  it('renders with a given title, body, and author', () => {
    render(<Post title='Post 1' body='My very first post!' userId={1} />);

    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('My very first post!')).toBeInTheDocument();
    expect(screen.getByText('Author: 1')).toBeInTheDocument();
  });
});
