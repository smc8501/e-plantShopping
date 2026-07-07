import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import cartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

// Mock react-redux
vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

// Mock action creators from CartSlice
vi.mock('./CartSlice', () => ({
  removeItem: vi.fn(payload => ({ type: 'cart/removeItem', payload })),
  updateQuantity: vi.fn(payload => ({ type: 'cart/updateQuantity', payload })),
}));

describe('CartItem', () => {
    const mockDispatch = vi.fn();
    const mockOnContinueShopping = vi.fn();

    const mockCart = [
      name
    ]
    
});