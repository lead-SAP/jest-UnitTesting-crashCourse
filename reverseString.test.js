const reverseString = require('./reverseString');

test('reverseString func. exists', () => {
    expect(reverseString).toBeDefined();
});

test('string reverses', () => {
    expect(reverseString('Hello')).toBe('olleh');
});

