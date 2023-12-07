


/* Series tests

let Series = require('./alternative-solutions.js');

describe("Series", () => {
  test("test simple slices of one", () => {
    let series = new Series('01234');
    expect(series.slices(1)).toEqual([[0], [1], [2], [3], [4]]);
  });

  test("test simple slices of one again", () => {
    let series = new Series('92834');
    expect(series.slices(1)).toEqual([[9], [2], [8], [3], [4]]);
  });

  test("test simple slices of two", () => {
    let series = new Series('01234');
    expect(series.slices(2)).toEqual([[0, 1], [1, 2], [2, 3], [3, 4]]);
  });

  test("test other slices of two", () => {
    let series = new Series('98273463');
    let expected = [[9, 8], [8, 2], [2, 7], [7, 3], [3, 4], [4, 6], [6, 3]];
    expect(series.slices(2)).toEqual(expected);
  });

  test("test simple slices of two again", () => {
    let series = new Series('37103');
    expect(series.slices(2)).toEqual([[3, 7], [7, 1], [1, 0], [0, 3]]);
  });

  test("test simple slices of three", () => {
    let series = new Series('01234');
    expect(series.slices(3)).toEqual([[0, 1, 2], [1, 2, 3], [2, 3, 4]]);
  });

  test("test simple slices of three again", () => {
    let series = new Series('31001');
    expect(series.slices(3)).toEqual([[3, 1, 0], [1, 0, 0], [0, 0, 1]]);
  });

  test("test other slices of three", () => {
    let series = new Series('982347');
    let expected = [[9, 8, 2], [8, 2, 3], [2, 3, 4], [3, 4, 7]];
    expect(series.slices(3)).toEqual(expected);
  });

  test("test simple slices of four", () => {
    let series = new Series('01234');
    expect(series.slices(4)).toEqual([[0, 1, 2, 3], [1, 2, 3, 4]]);
  });

  test("test simple slices of four again", () => {
    let series = new Series('91274');
    expect(series.slices(4)).toEqual([[9, 1, 2, 7], [1, 2, 7, 4]]);
  });

  test("test simple slices of five", () => {
    let series = new Series('01234');
    expect(series.slices(5)).toEqual([[0, 1, 2, 3, 4]]);
  });

  test("test simple slices of five again", () => {
    let series = new Series('81228');
    expect(series.slices(5)).toEqual([[8, 1, 2, 2, 8]]);
  });

  test("test simple slice that blows up", () => {
    let series = new Series('01234');
    expect(() => { series.slices(6) }).toThrow();
  });

  test("test more complicated slice that blows up", () => {
    let sliceString = '01032987583';
    let series = new Series(sliceString);
    expect(() => { series.slices(sliceString.length+1) }).toThrow();
  });
});


*/


/* SumOfMultiples tests

let SumOfMultiples = require('./alternative-solutions.js');

describe("sum of multiples", () => {
  test("sum to one", () => {
    expect(SumOfMultiples.to(1)).toEqual(0);
  });

  test("sum to three", () => {
    expect(SumOfMultiples.to(4)).toEqual(3);
  });

  test("sum to ten", () => {
    expect(SumOfMultiples.to(10)).toEqual(23);
  });

  test("sum to one hundred", () => {
    expect(SumOfMultiples.to(100)).toEqual(2_318);
  });

  test("sum to one thousand", () => {
    expect(SumOfMultiples.to(1000)).toEqual(233_168);
  });

  test("configurable 7 13 17 to 20", () => {
    let obj = new SumOfMultiples(7, 13, 17);
    expect(obj.to(20)).toEqual(51);
  });

  test("configurable 4 6 to 15", () => {
    let obj = new SumOfMultiples(4, 6);
    expect(obj.to(15)).toEqual(30);
  });

  test("configurable 5 6 8 to 150", () => {
    let obj = new SumOfMultiples(5, 6, 8);
    expect(obj.to(150)).toEqual(4_419);
  });

  test("configurable 43 47 to 10,000", () => {
    let obj = new SumOfMultiples(43, 47);
    expect(obj.to(10_000)).toEqual(2_203_160);
  });
});

*/

/* Octal tests


let Octal = require('./alternative-solutions.js');

describe("Octal", () => {
  test("octal 1 is decimal 1", () => {
    let octal = new Octal('1');
    expect(octal.toDecimal()).toBe(1);
  });

  test("octal 10 is decimal 8", () => {
    let octal = new Octal('10');
    expect(octal.toDecimal()).toBe(8);
  });

  test("octal 17 is decimal 15", () => {
    let octal = new Octal('17');
    expect(octal.toDecimal()).toBe(15);
  });

  test("octal 11 is decimal 9", () => {
    let octal = new Octal('11');
    expect(octal.toDecimal()).toEqual(9);
  });

  test("octal 130 is decimal 88", () => {
    let octal = new Octal('130');
    expect(octal.toDecimal()).toBe(88);
  });

  test("octal 2047 is decimal 1063", () => {
    let octal = new Octal('2047');
    expect(octal.toDecimal()).toBe(1063);
  });

  test("octal 7777 is decimal 4095", () => {
    let octal = new Octal('7777');
    expect(octal.toDecimal()).toBe(4095);
  });

  test("octal 1234567 is decimal 342391", () => {
    let octal = new Octal('1234567');
    expect(octal.toDecimal()).toBe(342391);
  });

  test("invalid octal is decimal 0", () => {
    let octal = new Octal('carrot');
    expect(octal.toDecimal()).toBe(0);
  });

  test("8 is seeen as invalid and returns 0", () => {
    let octal = new Octal('8');
    expect(octal.toDecimal()).toBe(0);
  });

  test("9 is seeen as invalid and returns 0", () => {
    let octal = new Octal('9');
    expect(octal.toDecimal()).toBe(0);
  });

  test("6789 is seeen as invalid and returns 0", () => {
    let octal = new Octal('6789');
    expect(octal.toDecimal()).toBe(0);
  });

  test("abc1z is seen as invalid and returns 0", () => {
    let octal = new Octal('abc1z');
    expect(octal.toDecimal()).toBe(0);
  });

  test("valid octal formatted string 011 is decimal 9", () => {
    let octal = new Octal('011');
    expect(octal.toDecimal()).toBe(9);
  });

  test("234abc is seen as invalid and returns 0", () => {
    let octal = new Octal('234abc');
    expect(octal.toDecimal()).toBe(0);
  });
});

*/

/* PerfectNumber tests

let PerfectNumber = require('./alternative-solutions.js');

describe("PerfectNumber", () => {
  test("negative raises error", () => {
    expect(() => { PerfectNumber.classify(-1) }).toThrow();
  });

  test("classify deficient", () => {
    expect(PerfectNumber.classify(13)).toEqual('deficient');
  });

  test("classify perfect", () => {
    expect(PerfectNumber.classify(28)).toEqual('perfect');
  });

  test("classify abundant", () => {
    expect(PerfectNumber.classify(12)).toEqual('abundant');
  });
});

*/
/* Scrabble tests

let Scrabble = require('./alternative-solutions.js');

describe("Scrabble", () => {
  test("empty word scores zero", () => {
    expect(new Scrabble('').score()).toBe(0);
  });

  test("whitespace scores zero", () => {
    expect(new Scrabble(" \t\n").score()).toBe(0);
  });

  test("nil scores zero", () => {
    expect(new Scrabble(null).score()).toBe(0);
  });

  test("scores very short word", () => {
    expect(new Scrabble('a').score()).toBe(1);
  });

  test("scores other very short word", () => {
    expect(new Scrabble('f').score()).toBe(4);
  });

  test("simple word scores the number of letters", () => {
    expect(new Scrabble('street').score()).toBe(6);
  });

  test("complicated words score more", () => {
    expect(new Scrabble('quirky').score()).toBe(22);
  });

  test("scores are case-insensitive", () => {
    expect(new Scrabble('OXYPHENBUTAZONE').score()).toBe(41);
  });

  test("convenient scoring", () => {
    expect(Scrabble.score('alacrity')).toBe(13);
  });
});

*/


/* Anagram tests

let Anagram = require('./alternative-solutions.js');

describe("Anagram", () => {
  test("No matches returns empty array", () => {
    let detector = new Anagram('diaper');
    expect(detector.match(['hello', 'world', 'zombies', 'pants'])).toEqual([]);
  });

  test("Detect simple anagram", () => {
    let detector = new Anagram('ant');
    let anagrams = detector.match(['tan', 'stand', 'at']);
    expect(anagrams).toEqual(['tan']);
  });

  test("Detect multiple anagrams", () => {
    let detector = new Anagram('master');
    let anagrams = detector.match(['stream', 'pigeon', 'maters']);
    expect(anagrams.sort()).toEqual(['maters', 'stream']);
  });

  test("Do not confuse different duplicates", () => {
    let detector = new Anagram('galea');
    expect(detector.match(['eagle'])).toEqual([]);
  });

  test("Identical word is not anagram", () => {
    let detector = new Anagram('corn');
    let anagrams = detector.match(['corn', 'dark', 'Corn', 'rank', 'CORN', 'cron', 'park']);
    expect(anagrams).toEqual(['cron']);
  });

  test("Eliminate anagrams with same checksum", () => {
    let detector = new Anagram('mass');
    expect(detector.match(['last'])).toEqual([]);
  });

  test("Eliminate anagram subsets", () => {
    let detector = new Anagram('good');
    expect(detector.match(['dog', 'goody'])).toEqual([]);
  });

  test("Detect anagram", () => {
    let detector = new Anagram('listen');
    let anagrams = detector.match(['enlists', 'google', 'inlets', 'banana']);
    expect(anagrams).toEqual(['inlets']);
  });

  test("Multiple anagrams", () => {
    let detector = new Anagram('allergy');
    let anagrams = detector.match(['gallery', 'ballerina', 'regally',
                                   'clergy', 'largely', 'leading']);
    expect(anagrams.sort()).toEqual(['gallery', 'largely', 'regally']);
  });

  test("Anagrams are case-insensitive", () => {
    let detector = new Anagram('Orchestra');
    let anagrams = detector.match(['cashregister', 'Carthorse', 'radishes']);
    expect(anagrams).toEqual(['Carthorse'])
  });
});


*/
/* RomanNumeral tests
let RomanNumeral = require('./alternative-solutions.js');

describe('RomanNumeral', () => {
  test('1', () => {
    let number = new RomanNumeral(1);
    expect(number.toRoman()).toBe('I');
  });

  test('2', () => {
    let number = new RomanNumeral(2);
    expect(number.toRoman()).toBe('II');
  });

  test('3', () => {
    let number = new RomanNumeral(3);
    expect(number.toRoman()).toBe('III');
  });

  test('4', () => {
    let number = new RomanNumeral(4);
    expect(number.toRoman()).toBe('IV');
  });

  test('5', () => {
    let number = new RomanNumeral(5);
    expect(number.toRoman()).toBe('V');
  });

  test('6', () => {
    let number = new RomanNumeral(6);
    expect(number.toRoman()).toBe('VI');
  });

  test('9', () => {
    let number = new RomanNumeral(9);
    expect(number.toRoman()).toBe('IX');
  });

  test('27', () => {
    let number = new RomanNumeral(27);
    expect(number.toRoman()).toBe('XXVII');
  });

  test('48', () => {
    let number = new RomanNumeral(48);
    expect(number.toRoman()).toBe('XLVIII');
  });

  test('59', () => {
    let number = new RomanNumeral(59);
    expect(number.toRoman()).toBe('LIX');
  });

  test('93', () => {
    let number = new RomanNumeral(93);
    expect(number.toRoman()).toBe('XCIII');
  });

  test('141', () => {
    let number = new RomanNumeral(141);
    expect(number.toRoman()).toBe('CXLI');
  });

  test('163', () => {
    let number = new RomanNumeral(163);
    expect(number.toRoman()).toBe('CLXIII');
  });

  test('402', () => {
    let number = new RomanNumeral(402);
    expect(number.toRoman()).toBe('CDII');
  });

  test('575', () => {
    let number = new RomanNumeral(575);
    expect(number.toRoman()).toBe('DLXXV');
  });

  test('911', () => {
    let number = new RomanNumeral(911);
    expect(number.toRoman()).toBe('CMXI');
  });

  test('1024', () => {
    let number = new RomanNumeral(1024);
    expect(number.toRoman()).toBe('MXXIV');
  });

  test('3000', () => {
    let number = new RomanNumeral(3000);
    expect(number.toRoman()).toBe('MMM');
  });
});

*/

/* DNA tests

let DNA = require('./alternative-solutions.js');

describe("DNA", () => {
  test("no difference between empty strands", () => {
    let dna = new DNA('');
    expect(dna.hammingDistance('')).toBe(0);
  });

  test("no difference between identical strands", () => {
    let dna = new DNA('GGACTGA');
    expect(dna.hammingDistance('GGACTGA')).toBe(0);
  });

  test("complete hamming distance in small strand", () => {
    let dna = new DNA('ACT');
    expect(dna.hammingDistance('GGA')).toBe(3);
  });

  test("hamming distance in off by one strand", () => {
    let strand = 'GGACGGATTCTGACCTGGACTAATTTTGGGG'
    let distance = 'AGGACGGATTCTGACCTGGACTAATTTTGGGG'
    let dna = new DNA(strand);
    expect(dna.hammingDistance(distance)).toBe(19);
  });

  test("small hamming distance in middle somewhere", () => {
    let dna = new DNA('GGACG');
    expect(dna.hammingDistance('GGTCG')).toBe(1);
  });

  test("larger distance", () => {
    let dna = new DNA('ACCAGGG');
    expect(dna.hammingDistance('ACTATGG')).toBe(2);
  });

  test("ignores extra length on other strand when longer", () => {
    let dna = new DNA('AAACTAGGGG');
    expect(dna.hammingDistance('AGGCTAGCGGTAGGAC')).toBe(3);
  });

  test("ignores extra length on original strand when longer", () => {
    let dna = new DNA('GACTACGGACAGGGTAGGGAAT');
    let distance = 'GACATCGCACACC';
    expect(dna.hammingDistance(distance)).toBe(5);
  });

  test("does not actually shorten original strand", () => {
    let dna = new DNA('AGACAACAGCCAGCCGCCGGATT');
    expect(dna.hammingDistance('AGGCAA')).toBe(1);
    expect(dna.hammingDistance('AGACATCTTTCAGCCGCCGGATTAGGCAA')).toBe(4);
    expect(dna.hammingDistance('AGG')).toBe(1);
  });
});
*/

/* Triangle tests

let Triangle = require('./alternative-solutions.js');

describe("Triangle", () => {
  test("equilateral triangles have equal sides", () => {
    const triangle = new Triangle(2, 2, 2);
    expect(triangle.kind()).toEqual("equilateral");
  });

  test("larger equilateral triangles also have equal sides", () => {
    const triangle = new Triangle(10, 10, 10);
    expect(triangle.kind()).toEqual("equilateral");
  });

  test("isosceles triangles have last two sides equal", () => {
    const triangle = new Triangle(3, 4, 4);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("isosceles trianges have first and last sides equal", () => {
    const triangle = new Triangle(4, 3, 4);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("isosceles triangles have two first sides equal", () => {
    const triangle = new Triangle(4, 4, 3);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("isosceles triangles have in fact exactly two sides equal", () => {
    const triangle = new Triangle(10, 10, 2);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("scalene triangles have no equal sides", () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("scalene triangles have no equal sides at a larger scale too", () => {
    const triangle = new Triangle(10, 11, 12);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("scalene triangles have no equal sides in descending order either", () => {
    const triangle = new Triangle(5, 4, 2);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("very small triangles are legal", () => {
    const triangle = new Triangle(0.4, 0.6, 0.3);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("test triangles with no size are illegal", () => {
    expect(() => { new Triangle(0, 0, 0) }).toThrow();
  });

  test("triangles with negative sides are illegal", () => {
    expect(() => { new Triangle(3, 4, -5) }).toThrow();
  });

  test("triangles violating triangle inequality are illegal", () => {
    expect(() => { new Triangle(1, 1, 3) }).toThrow();
  });

  test("triangles violating triangle inequality are illegal 2", () => {
    expect(() => { new Triangle(7, 3, 2) }).toThrow();
  });

  test("triangles violating triangle inequality are illegal 3", () => {
    expect(() => { new Triangle(10, 1, 3) }).toThrow();
  });

  test("triangles violating triangle inequality are illegal 4", () => {
    expect(() => { new Triangle(1, 1, 2) }).toThrow();
  });
});

*/
