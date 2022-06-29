// Camilo => ['C','a','m','i','l','o'] => string => string[]
// ['C','a','m','i','l','o'] => Camilo => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string'){
    return input.split(''); // string[]
  } else if (typeof input === 'number'){
    return true; // boolean
  }
}

const rtaArray = parseStr('Camilo');
rtaArray.reverse();
console.log('rtaArray', 'Camilo =>' ,rtaArray);

const rtaStr = parseStr(['C','a','m','i','l','o']);
rtaStr.toLowerCase();
console.log('rtaStr', "['C','a','m','i','l','o'] =>",rtaStr);

const rtaBoolean = parseStr(12);
