const anagram = require('./anagram');

test('isAnagram function exisits', () => {
    expect(typeof anagram).toEqual('function');
});

test('cinema is an anagram of "iceman"', () => {
    expect(anagram('cinema', 'iceman')).toBeTruthy();
});

test('Hello is not anagram anagram of "Aloha"', () => {
    expect(anagram('Dormitory', 'dirty room')).toBeTruthy();
});

test('Dormitory is an anagram of "dirty room"', () => {
    expect(anagram('Hello', 'aloha')).toBeFalsy();
});




