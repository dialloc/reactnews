import React, {Component} from 'react';
import { Button,Form} from 'semantic-ui-react'
import { reduxForm , Field ,reset} from 'redux-form';
import { TextAreaField } from 'react-semantic-redux-form';
import { connect } from 'react-redux';
import {addComment} from './postsActions'

export class AddComment extends Component{

  componentWillReceiveProps(newProps) {
    if(newProps.submitSucceeded) {
      this.props.dispatch(reset('addCommentForm'));
    }
  }

  render (){
  const { handleSubmit,pristine, submitting ,post } = this.props;
       let saveComment = (values)=>{
        this.props.dispatch(addComment(values,post));
      };
       return (
          <Form onSubmit={handleSubmit(saveComment)}>
             <Field name='body' component={TextAreaField} placeholder='Your comment' />
             <Form.Field control={Button}  primary className='submit-btn' disabled={pristine || submitting}
               type='submit'>
               Add Comment
             </Form.Field>
           </Form>

       )

  }
}

function mapStateToProps(state, ownProps) {
  return {submitSucceeded:state.addCommentForm.submitSucceeded};
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}
const validate = values => {
  const errors = {}
  if (!values.body || values.body.trim()==='') {
    errors.body = 'Comment content cannot by empty'
  }
  return errors;
}


AddComment= reduxForm({
    form: 'addCommentForm',
    validate
})(AddComment);

export default connect(mapStateToProps, null, null, { withRef: true })(AddComment);
