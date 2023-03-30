function test (value) {
  console.log('test');
  if (value === 'test') {
    console.log('test');
  }

  if (value === undefined) {
    console.log('test');
  }

  if (!(value instanceof Date)) console.log('sagsdadf');
}

test('test');
