import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Item, Label , Container , Grid, Form, TextArea, Select} from 'semantic-ui-react'
import { LabelInputField,TextAreaField,SelectField } from 'react-semantic-redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addPost} from './postsActions';



export class AddPost extends Component{

  componentDidMount() {
  }




  render (){
    let options=[];
    if(this.props.categories!==null && this.props.categories!==undefined){
      options= this.props.categories.reduce(function(options, categorie){
          options.push({ 'key': categorie.name, 'value': categorie.name, 'text': categorie.name});
          return options;
        },[]);
    }
    console.log(options);
    return (
      <Container>
      <Grid className="AddPost" columns={3}
      style={{ height: '100%'}}
      verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form>
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
    categories: state.categoriesReducer.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

AddPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);

export default reduxForm({
    form: 'addPostForm',
     enableReinitialize: true,
    validate
})(AddPost);
