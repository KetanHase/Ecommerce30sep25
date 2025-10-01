import React from "react";

export default class Condtionally_Rendering extends React.Component {

    constructor() {
        super()
        this.state = ({
            show: true
        })
    }



    ToggleData = () => {
        // alert()

        // this.setState({
        //     show:false
        // })


        // toggle data
        // if(this.state.show)
        // {
        //     this.setState({
        //         show:false
        //     })
        // }
        // else{
        //     this.setState({
        //         show:true
        //     })
        // }

        // *****************************************

        this.setState({
            show: !this.state.show
        })
    }

    render() {
        console.log(this.state.show)

        return (
            <>

                <h1>Conditionally Rendering In React Using State Object with Ternary and logical && </h1>
                <hr />


                <button onClick={() => this.ToggleData()}>Toggle Data  </button>



                {

                    this.state.show ? <p>Lom dignissimos odit quisquam earum. Nihil?</p> : null
                }

                {

                    this.state.show && <p>Lom dignissimos odit quisquam earum. Nihil?</p>
                }

            </>
        )
    }
}