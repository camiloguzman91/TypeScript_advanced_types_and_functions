let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
