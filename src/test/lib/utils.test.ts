import { describe, it, expect } from 'vitest';
import { calculateAge, formatDate, truncate } from '@/lib/utils';

describe('calculateAge', () => {
  it('returns correct age for living person', () => {
    expect(calculateAge('1950-01-01', null)).toBeGreaterThan(70);
  });
  it('returns correct age at death', () => {
    expect(calculateAge('1950-01-01', '2000-01-01')).toBe(50);
  });
  it('handles null birthdate gracefully', () => {
    expect(calculateAge(null, null)).toBeNull();
  });
});

describe('formatDate', () => {
  it('formats dates consistently', () => {
    expect(formatDate('2024-01-01')).toContain('2024');
  });
});

describe('truncate', () => {
  it('truncates long strings', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });
  it('does not truncate short strings', () => {
    expect(truncate('hi', 10)).toBe('hi');
  });
});
