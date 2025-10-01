const Products = (props) => {
    return (
        <>

            <div className="card my-2 shadow-lg">
                <div className="card-header">
                    <h2 className="text-center">{props.name}</h2>
                </div>
                <div className="card-body text-center p-0">
                    <img src={props.img} className="img-fluid" alt="Apple Iphone 15 Pro Max" style={{ height: '250px' }} title="Apple Iphone 15 Pro Max" />
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-sm btn-danger fw-bold px-2 mx-2">{props.btn1}</button>
                    <button className="btn btn-sm btn-outline-dark fw-bold px-2 mx-2">{props.btn2}</button>
                </div>
            </div>
        </>
    )
}

export default Products;