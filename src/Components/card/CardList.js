import React, { Component } from 'react'
import CardItem from './CardItem'
import callApi from '../../callApi/CallerApi'
import {actFetchProduct} from '../../actions/index'
import { connect } from 'react-redux'

 class CardList extends Component {
  componentDidMount(){
   callApi('users','GET',null).then(res => {
    this.props.fetchAllproduct(res.data)
  })
  }
  
  render() {
    console.log(this.props.products)
    return (
      <div>
          <CardItem name="Roronoa Zoro" image="https://www.dungplus.com/wp-content/uploads/2019/02/Roronoa-zoro-2.jpg" total_like="10" total_comment="2356" images="https://tanoshiishop.com/wp-content/uploads/2020/03/O1CN01itogVl2DM6NU4S2KW_80578594.jpg"/>
          <CardItem name="Roronoa Zoro" image="https://www.dungplus.com/wp-content/uploads/2019/02/Roronoa-zoro-2.jpg" total_like="20" total_comment="56" images="https://thegioimohinh.vn/wp-content/uploads/2019/11/O1CN01fjnQuO1zO1K3dMUMu_194786703.jpg"/>
          <CardItem name="Roronoa Zoro" image="https://www.dungplus.com/wp-content/uploads/2019/02/Roronoa-zoro-2.jpg" total_like="30" total_comment="5756" images="https://tanoshiishop.com/wp-content/uploads/2018/12/7a3ff7ab-2195-4616-b1b3-2f685f877dc9.jpg"/>
          <CardItem name="Roronoa Zoro" image="https://www.dungplus.com/wp-content/uploads/2019/02/Roronoa-zoro-2.jpg" total_like="40" total_comment="75859" images="https://i.pinimg.com/originals/92/41/f6/9241f69741ff3acd64bee0f68f590f30.jpg"/>
      </div>
  );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllproduct: (products) => {
      dispatch(actFetchProduct(products))
    }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(CardList)
