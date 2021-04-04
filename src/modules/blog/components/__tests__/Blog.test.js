import React from 'react';
import { render, screen } from '@testing-library/react';
import { useFetch } from "../../../common/fetch";
import { Blog } from '..';
import { filterDataByCurrentUser } from '../Blog.jsx';

jest.mock("../../../common/fetch");

describe('Blog', () => {
  it('on success of fetch and given data, renders two sets of post lists', () => {
    useFetch.mockReturnValue({
      data: [
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
      ]
    });

    render(<Blog userId={1} endpoint={'/getPostData'} />);

    expect(screen.getByText("1's Posts")).toBeInTheDocument();
    expect(screen.getByText('Other Posts')).toBeInTheDocument();
    expect(screen.getAllByText(/Author/)).toHaveLength(3);
  });

  it('renders the loading component if fetch has not returned a response yet', () => {
    useFetch.mockReturnValue({
      status: 'loading',
    });

    render(<Blog userId={1} endpoint={'/getPostData'} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders the error component if fetch throws an error', () => {
    useFetch.mockReturnValue({
      status: 'error',
      error: {
        message: 'timeout',
      },
    });

    render(<Blog userId={1} endpoint={'/getPostData'} />);
    expect(screen.getByText(/timeout/));
  });
});

describe('filterDataByCurrentUser', () => {
  it('filters a valid data set containing the current user and others.', () => {
    const data = [
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

    const expectedCurrentUserData = [data[0]];
    const expectedOtherUserData = [data[1], data[2]];
    const expectedData = {
      currentUserData: expectedCurrentUserData,
      otherUserData: expectedOtherUserData,
    };

    expect(filterDataByCurrentUser(data, 1)).toEqual(expectedData);
  });

  it('filters a data set that only contains the current user data', () => {
    const data = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
    ];

    const expectedData = {
      currentUserData: [data[0]],
      otherUserData: [],
    };

    expect(filterDataByCurrentUser(data, 1)).toEqual(expectedData);
  });

  it('filters a data set that only contains other user data', () => {
    const data = [
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

    const expectedData = {
      currentUserData: [],
      otherUserData: [...data],
    };

    expect(filterDataByCurrentUser(data, 1)).toEqual(expectedData);
  });

  it('returns undefined for an empty data set', () => {
    const expectedData = {
      currentUserData: undefined,
      otherUserData: undefined,
    };

    expect(filterDataByCurrentUser([])).toEqual(expectedData);
  });
});
