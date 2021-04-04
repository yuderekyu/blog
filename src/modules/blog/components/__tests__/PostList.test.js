import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostList } from '..';

describe('PostList', () => {
  it('renders with a title and 3 posts, given a valid title and post data', () => {
    const postData = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 2,
        "id": 13,
        "title": "dolorum ut in voluptas mollitia et saepe quo animi",
        "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
      },
      {
        "userId": 6,
        "id": 52,
        "title": "qui enim et consequuntur quia animi quis voluptate quibusdam",
        "body": "iusto est quibusdam fuga quas quaerat molestias\na",
      },
    ];

    render(<PostList postData={postData} title={'My Posts'} />);

    expect(screen.getByText('My Posts')).toBeInTheDocument();
    expect(screen.getAllByText(/Author/)).toHaveLength(3);
  });
});
