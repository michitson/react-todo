var TodoApp = require('TodoApp');

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

describe ('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todos to the todos state on handleAddTodo', () => {
    var todoText = "text text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    //expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');

  });

  it('should toggle completed value when handleTolggle called', () => {
    var todoData = {id:11, text: "TEST FEATURES", completed:false, createdAt:0, completedAt:undefined}
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');


  });

  //test that when toggle from true to false, completedAt gets removed
  it('should toggle todo from completed to incompleted', () => {
    var todoData = {id:11, text: "TEST FEATURES", completed:true, createdAt:0, completedAt:undefined}
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();


  });


});
