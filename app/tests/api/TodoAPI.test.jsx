var TodoAPI = require('TodoAPI');

var expect = require('expect');

describe ('TodoAPI', () => {

  beforeEach(()=>{
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe ('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{id:1 , text:"test all files", completed:false}];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
    it('should not set invalid todos array', () => {
      var todos = {a:'b'};
      TodoAPI.setTodos(todos);
      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe ('getTodos', () => {
    it('should retrieve an array after being set to local storage', () => {
      var todos = [{id:1 , text:"test all files", completed:false}];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos('todos');
      expect(actualTodos).toEqual(todos);
    });
    it('should NOT retrieve an array after invalid data being set to local storage', () => {
      var todos = {a:'b'};
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos('todos');
      expect(actualTodos).toEqual([]);
    });
  });

});
