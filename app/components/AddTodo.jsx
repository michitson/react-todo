var React = require('react');

var AddTodo = React.createClass({

  onSubmit:function(e){

    //console.log('input count', $('input').length);

    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0 ) {
      this.refs.todoText.value ='';
      this.props.onAddTodo(todoText);
    } else{
      this.refs.todoText.focus();
    }
  },



  render:function(){

    return(
       <div>
         <form onSubmit={this.onSubmit}>
           <input ref='todoText' type='text' placeholder='what do you need to do?'/>
           <button className='button expanded'>Add Todo</button>
         </form>
       </div>
    )
  }
});

module.exports = AddTodo;
