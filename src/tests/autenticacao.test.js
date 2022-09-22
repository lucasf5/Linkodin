const assert = require('assert');

describe('Suite de teste de autenticação', function() {
  describe('Login', function() {
    it('/login', function() {
      const result = 'resultado login';
      const expected = 'resultado login';
      assert.deepEqual(result, expected); 
    });
  });

  describe('Register', function() {
    it('/register', function() {
      const result = 'resultado register';
      const expected = 'resultado register';
      assert.deepEqual(result, expected); 
    });
  });
});