var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe ('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call toggle with id on click', () => {
    var todoData = {id:111, text: "test text", completed:false}

    var spy = expect.createSpy();

    var todoApp = TestUtils.renderIntoDocument(<Todo {...todo} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el);

    expect(spy).toHaveBeenCalledWith(111);

  });

});
