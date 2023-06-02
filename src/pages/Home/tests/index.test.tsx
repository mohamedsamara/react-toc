import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home, { HOME_TEST_ID } from '..';

const renderHome = () => render(<Home />, { wrapper: Router });

describe('<Home/>', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('should render <Home/>', async () => {
    renderHome();
    expect(screen.getByTestId(HOME_TEST_ID)).toBeInTheDocument();
  });
});
