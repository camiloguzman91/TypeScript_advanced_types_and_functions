// Camilo => [C,a,m,i,l,o] => string => string[]
// [C,a,m,i,l,o] => Camilo =>  string[] => string

export function parseStr(imput: string): string[];
export function parseStr(imput: string[]): string;


export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else {
    return input.split(''); //string[]
  }
}

const rtaArray = parseStr('Camilo');
rtaArray.reverse();
//if (Array.isArray(rtaArray)) {
//  rtaArray.reverse();
//}
console.log('rtaArray', 'Camilo =>', rtaArray);

const rtaStr = parseStr(['C','a','m','i','l','o']);
rtaStr.toLowerCase();
//if (typeof rtaStr === 'string') {
//  rtaStr.toLowerCase();
//}
console.log('rtaStr', "['C','a','m','i','l','o'] =>", rtaStr);

