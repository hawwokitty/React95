import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../shared/test/utils';
import { Avatar } from './Avatar';

describe('<Avatar />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Avatar />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot in default avatar with src and alt prop', () => {
      const { container } = render(
        <Avatar
          src="https://github.com/React95.png"
          alt="React95 brand logo"
        />,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot in default avatar with children', () => {
      const { container } = render(
        <Avatar>
          <p>GG</p>
        </Avatar>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot in default avatar with children and circle', () => {
      const { container } = render(
        <Avatar circle>
          <p>GG</p>
        </Avatar>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('value prop', () => {
    it('should render avatar with src and alt', () => {
      render(
        <Avatar
          src="https://github.com/React95.png"
          alt="React95 brand logo"
        />,
      );

      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('should render avatar with circle', () => {
      const { container } = render(<Avatar circle>GG</Avatar>);

      expect(container).toMatchSnapshot();
    });
  });
});
