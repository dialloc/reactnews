import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button , Container , Grid, Form} from 'semantic-ui-react'
import { LabelInputField,TextAreaField,SelectField } from 'react-semantic-redux-form';
import { connect } from 'react-redux';
import {editComment , getComment} from './postsActions';



export class EditComment extends Component{

  componentDidMount() {
    const { match} = this.props;
    if(match.params.id!==null){
        this.props.dispatch(getComment(match.params.id));
    }
  }

  componentWillReceiveProps(newProps) {
    const{comment} =newProps;
      console.log("this.props.id="+this.props.id);
      if((newProps.match.params.id !== this.props.match.params.id)
      || (this.props.editValues===null || this.props.editValues===undefined) ){
        this.props.initialize(comment);
      }


  }
  render (){
     let saveComment = (values)=>{
      this.props.dispatch(editComment(this.props.editValues));
    };
     const { handleSubmit } = this.props;

    return (
      <Container>
      <Grid className="EditComment" columns={3}
      style={{ height: '100%'}}
      verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
          <Form onSubmit={handleSubmit(saveComment)}>
             <Field name='author' component={LabelInputField} placeholder='Author' />
             <Field name='body' component={TextAreaField} placeholder='Your comment' />
             <Form.Field control={Button}  primary className='submit-btn'
               type='submit'>
               Submit
             </Form.Field>
           </Form>
        </Grid.Column>
         </Grid>
         </Container>
    )
  }
}

function mapStateToProps (state) {
  console.log('editCommentForm >>'+state.form.editCommentForm);
  return {
    comment: state.postsReducer.comment,
    editValues:state.form.editCommentForm.values
  }
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}
const validate = values => {
  const errors = {}
  if (!values.author || values.author.trim()==='') {
    errors.author = 'Author is mandatory'
  }
  if (!values.body || values.body.trim()==='') {
    errors.body = 'Comment content cannot by empty'
  }
  return errors;
}

EditComment = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditComment);

export default reduxForm({
    form: 'editCommentForm',
    enableReinitialize : true ,
    validate
})(EditComment);

// EditComment= reduxForm({
//     form: 'editCommentForm',
//     enableReinitialize : true ,
//     validate
// })(EditComment);
//
// export default connect(mapStateToProps, mapDispatchToProps)(EditComment);
