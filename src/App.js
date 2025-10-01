import React from "react";
import Products from "./Products";


// import product data from js file
import { elect_products, other_products } from './productsData.js'
console.log(elect_products)

export default class App extends React.Component {


  constructor() {
    super()
    this.state = ({

      // 1 state defined

      electronics_product: true,
      other_products_data: true,

      all_product_data: true

    })
  }


  // 3 step

  elect_handler = () => {
    // alert()

    this.setState({
      electronics_product: true,
      other_products_data: false
    })
  }



  other_handler=()=>{
    // alert()

    this.setState({
      other_products_data:true,
      electronics_product:false,
    })
  }


  All_Handler=()=>{
    this.setState({
      other_products_data:true,
      electronics_product:true
    })
  }

  render() {
    return (
      <>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="bg-dark p-4 mb-3 fw-bold text-center text-primary">Ecommerce Products </h1>
            </div>


            <div className="col-md-12 text-center my-2">
              <button className="btn btn-sm fw-bold mx-2 btn-dark"  onClick={()=>this.All_Handler()}>All Products</button>
              <button className="btn btn-sm fw-bold mx-2 btn-outline-primary" onClick={() => this.elect_handler()}>Electronics Products</button>
              <button className="btn btn-sm fw-bold mx-2 btn-info"  onClick={()=>this.other_handler()}>Other Products</button>
            </div>




            <div className="col-md-12">
              <div className="row">

                {



                  this.state.electronics_product ?

                    elect_products.map((val, index) => {
                      return (
                        <div className="col-md-3" key={index}>
                          <Products
                            name={val.name}
                            img={val.img}
                            btn1={val.btn1}
                            btn2={val.btn2}

                          />
                        </div>
                      )
                    }) : null
                }



                {/* other pproducts iterating */}

                {

                  this.state.other_products_data &&

                  other_products.map((val, index) => {
                    return (

                      <div className="col-md-3" key={index}>
                        <Products

                          name={val.name}
                          img={val.img}
                          btn1={val.btn1}
                          btn2={val.btn2}


                        />
                      </div>
                    )
                  })

                }
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}