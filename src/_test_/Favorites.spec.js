import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import MeetupItem from '../pages/Favorites';
import Favorites from '../pages/Favorites'
import orderModuleHeaderButton from '../components/Meetups/MeetupItem/MeetupItem';
import { render, screen } from '@testing-library/react';
import fireEvent from "@testing-library/user-event";
describe('Favorites', () => {
    it('renders appropriately', () => {
      render(<Favorites />)
      expect(screen.getByText(/My Favorites/i)).toBeInTheDocument()
    })
   })
