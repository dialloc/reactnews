import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container} from 'semantic-ui-react';
import { connect } from 'react-redux';
import  {fetchCategories}  from '../categories/categoriesActions';

export class NavBar extends Component{

  componentDidMount() {

    this.props.dispatch(fetchCategories());

  }

  render (){
    return (
        <NavBarItems categories={this.props.categories} />
    )
  }
}
const NavBarItems = ({categories})=>{
  return (
        <Container className="NavBar">
          <Menu stackable>
           <Menu.Item as={Link} to='/' name='ReactNews' />
           {categories && categories
             .map( (cat)=>(
               <Menu.Item  key={cat.path} as={Link} to={'/category/'+cat.path} name={cat.name} />
             ))
           }
           <Menu.Menu position='right'>
             <Menu.Item>
               <Link to='/add-post' name='Add Post'>Add Post</Link>
             </Menu.Item>
         </Menu.Menu>
          </Menu>
        </Container>
  )
}

function mapStateToProps ({categoriesReducer}) {
  return {
    categories: categoriesReducer.categories
  }
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
