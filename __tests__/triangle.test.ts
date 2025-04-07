// __tests__/triangle.test.ts
import { triangleType } from '@/utils/triangle';

describe('triangleType', () => {
  // Triángulos válidos
  describe('Valid triangles', () => {
    test('Equilateral triangle', () => {
      expect(triangleType(3, 3, 3)).toBe('Equilateral');
    });

    test('Isosceles triangle (a === b)', () => {
      expect(triangleType(5, 5, 7)).toBe('Isosceles');
    });

    test('Isosceles triangle (a === c)', () => {
      expect(triangleType(5, 7, 5)).toBe('Isosceles');
    });

    test('Isosceles triangle (b === c)', () => {
      expect(triangleType(7, 5, 5)).toBe('Isosceles');
    });

    test('Scalene triangle', () => {
      expect(triangleType(3, 4, 5)).toBe('Scalene');
    });
  });

  // Triángulos inválidos
  describe('Invalid triangles', () => {
    test('Zero length side', () => {
      expect(triangleType(0, 4, 5)).toBe('Invalid');
    });

    test('Negative side length', () => {
      expect(triangleType(-1, 4, 5)).toBe('Invalid');
    });

    test('Sum of two sides equals third (a + b = c)', () => {
      expect(triangleType(1, 2, 3)).toBe('Invalid');
    });

    test('Sum of two sides less than third (a + b < c)', () => {
      expect(triangleType(1, 2, 4)).toBe('Invalid');
    });

    test('Sum of two sides equals third (a + c = b)', () => {
      expect(triangleType(1, 3, 2)).toBe('Invalid');
    });

    test('Sum of two sides equals third (b + c = a)', () => {
      expect(triangleType(5, 2, 3)).toBe('Invalid');
    });
  });

  // Casos límite
  describe('Boundary conditions', () => {
    test('Very small valid triangle', () => {
      expect(triangleType(1, 1, 1)).toBe('Equilateral');
    });

    test('Very large valid triangle', () => {
      expect(triangleType(1000000, 1000000, 1000000)).toBe('Equilateral');
    });

    test('Almost equilateral isosceles triangle', () => {
      expect(triangleType(100, 100, 99)).toBe('Isosceles');
    });

    test('Almost isosceles scalene triangle', () => {
      expect(triangleType(100, 101, 102)).toBe('Scalene');
    });

    test('Combination of very long and very short sides', () => {
      expect(triangleType(1000000, 1, 1000000)).toBe('Isosceles');
    });

    test('One side barely smaller than sum of others (valid)', () => {
      expect(triangleType(5, 5, 9.999)).toBe('Isosceles');
    });

    test('One side barely greater than sum of others (invalid)', () => {
      expect(triangleType(5, 5, 10.001)).toBe('Invalid');
    });
  });

  // Pruebas adicionales para TypeScript
  describe('TypeScript specific tests', () => {
    // Nota: Estas pruebas requieren que el código sea compilado con TypeScript
    // para verificar los tipos, pero Jest ejecutará el código compilado
    
    test('Floating point side lengths', () => {
      expect(triangleType(2.5, 2.5, 3.0)).toBe('Isosceles');
    });

    test('Floating point almost invalid', () => {
      expect(triangleType(1.0, 1.0, 2.0 - Number.EPSILON)).toBe('Isosceles');
    });
  });
});