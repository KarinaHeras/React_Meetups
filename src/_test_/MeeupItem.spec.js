import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import MeetupItem from '../components/Meetups/MeetupItem/MeetupItem';
import { render, screen} from '@testing-library/react';

describe('render component MeetupItem', () => {
    it('renders appropriately', () => {
      render(<MeetupItem />)
      expect(screen.getByText(/Add to Favorite/i)).toBeInTheDocument()
    })
   })