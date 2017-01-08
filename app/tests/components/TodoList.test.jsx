var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');


describe ('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
  it ('should render one todo component for every todo item', ()=>{
    var todos = [
                  {id: 1, text: 'walk the dog'},
                  {id: 2, text: 'clean the yard'},
                  {id: 3, text: 'boil an egg'},
                  {id: 4, text: 'make lasagna'}
                ];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);
    expect(todosComponents.length).toBe(todos.length);


  });
});
