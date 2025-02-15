import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting with name when no greeting provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting with name when greeting provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should handle empty name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should handle empty greeting as default greeting', () => {
    expect(greet('John', '')).toBe('Hello, John!');
  });

  it('should handle special characters in name', () => {
    expect(greet('John@#$')).toBe('Hello, John@#$!');
  });

  it('should handle special characters in greeting', () => {
    expect(greet('John', 'Hi!!!')).toBe('Hi!!!, John!');
  });

  it('should handle spaces in name', () => {
    expect(greet('John Doe')).toBe('Hello, John Doe!');
  });

  it('should handle spaces in greeting', () => {
    expect(greet('John', 'Good morning')).toBe('Good morning, John!');
  });
});
