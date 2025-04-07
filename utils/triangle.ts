// utils/triangle.ts
export function triangleType(a: number, b: number, c: number): string {
    // Verifica si los lados pueden formar un triángulo
    if (a <= 0 || b <= 0 || c <= 0) {
      return 'Invalid';
    }
  
    if (a + b <= c || a + c <= b || b + c <= a) {
      return 'Invalid';
    }
  
    // Determina el tipo de triángulo
    if (a === b && b === c) {
      return 'Equilateral';
    } else if (a === b || a === c || b === c) {
      return 'Isosceles';
    } else {
      return 'Scalene';
    }
  }