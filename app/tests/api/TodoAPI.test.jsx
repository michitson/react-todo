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
    it('should retrieve empty array after invalid data being set to local storage', () => {
      var todos = {a:'b'};
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos('todos');
      expect(actualTodos).toEqual([]);
    });
  });

//});

  describe ('filterTodos', () => {
  var todos = [
    {id:1 , text:"Some text here", completed:true},
    {id:2 , text:"Other text here", completed:false},
    {id:3 , text:"Some text here", completed:true},

  ];

  it('should return all items if show complete is true', () => {

    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos.length).toBe(3);

  });
  it('should return 2 items if show complete is false', () => {

    var filteredTodos = TodoAPI.filterTodos(todos, false, '');
    expect(filteredTodos.length).toBe(1);

  });
  it('should sort by completed status', () => {

    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos[0].completed).toBe(false);

  });

  it('should filter all todos by search text', () => {

    var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
    expect(filteredTodos.length).toBe(2);

  });

  it('should return all tpdps if search text is empty', () => {

    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos.length).toBe(3);

  });


});

});
