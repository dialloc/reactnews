import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button , Container , Grid, Form} from 'semantic-ui-react'
import { LabelInputField,TextAreaField,SelectField } from 'react-semantic-redux-form';
import { connect } from 'react-redux';
import {editPost , getPostDetails} from './postsActions';



export class EditPost extends Component{

  componentDidMount() {
    const { match} = this.props;
    if(match.params.id!==null){
        this.props.dispatch(getPostDetails(match.params.id));
    }
  }

  componentWillReceiveProps(newProps) {
    const{post} =newProps;
    console.log("post ="+post);
    console.log("this.props.id="+this.props.id);
    if(this.props.editValues===null || this.props.editValues===undefined) {
      this.props.initialize(post);
    }
  }
  render (){
     let save = (values)=>{
      this.props.dispatch(editPost(this.props.editValues));
    };
     const { handleSubmit,pristine, submitting } = this.props;
    let options=[];
    if(this.props.categories!==null && this.props.categories!==undefined){
      options= this.props.categories.reduce(function(options, categorie){
          options.push({ 'key': categorie.name, 'value': categorie.name, 'text': categorie.name});
          return options;
        },[]);
    }

    return (
      <Container>
      <Grid className="EditPost" columns={3}
      style={{ height: '100%'}}
      verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form onSubmit={handleSubmit(save)}>
          <Field name='title' component={LabelInputField} placeholder='Title' />
          <Field name='author' component={LabelInputField} placeholder='Author' />
          <Field name='body' component={TextAreaField} placeholder='Body' />
          <Field name='category' component={SelectField} placeholder='Select category' options={options} />
          <Form.Field control={Button} primary className='submit-btn'
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

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Title is Required'
  }

  if (!values.author) {
    errors.author = 'Author is Required'
  }

  if (!values.body) {
    errors.body = 'Body is Required'
  }

  if (!values.category) {
    errors.category = 'Category is Required'
  }
  return errors;
}
function mapStateToProps (state) {
  return {
    categories: state.categoriesReducer.categories,
    submitSuccess:state.form.editPostForm.submitSucceeded,
    editValues:state.form.editPostForm.values,
    post: state.postsReducer.post
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

EditPost = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost);

export default reduxForm({
    form: 'editPostForm',
    enableReinitialize : true ,
    validate
})(EditPost);
