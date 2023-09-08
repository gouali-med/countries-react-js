import React from 'react';
import {useState} from 'react'
import {v4  as uuid} from 'uuid'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
function Product() {
   // let showlist="true";

const [label,setLabel]=useState("");
const [price,setPrice]=useState("");
const [message,setMessage]=useState("");



  let productsArray=[
    {
        id:1,
        label:"iphone",
        price:2000
    },
    {
        id:2,
        label:"sumsang",
        price:3000
    },
    {
        id:3,
        label:"huwawei",
        price:4000
    }
]
let [products, setProducts]= useState(productsArray)





const nameInput=(e)=>{
    if(e.target.value ===""){
        setMessage("Title is required");
    }
    else if(e.target.value.trim().length <3){
        setMessage("Please tape more than 3 caracters");
    }
    else{
        setMessage(null)
        setLabel(e.target.value);
    }
    
}

const priceInput=(e)=>{
    setPrice(e.target.value);
}

const addProduct =(e)=> {
    e.preventDefault();
    let myProduct=
    {
        id:uuid(),
        label,
        price
    }
    setProducts([myProduct,...products]);

    setLabel("");
    setPrice(0);
}








const deleteProduct = (id) =>{
    let myList=products.filter(product => product.id !== id)
    setProducts((prev)=>{
        console.log(prev)
        return myList
    })
}





  return (
    <>
<div className=' d-flex justify-content-center'>


    <div className='card w-50 p-3 m-5 d-inline-block'>

        <form onSubmit={addProduct}>
            <div className="form-inline ">
                <label htmlFor="">ProductName :  </label>
                <input type="text" defaultValue={ label } onChange={nameInput}  className="form-control m-2"   ></input>
                
                <label htmlFor="">Price :  </label>
                <input type="number" defaultValue={ price } onChange={priceInput}  className="form-control m-2"  ></input>
            
                {
                    message &&(
                        <div className="alert alert-danger">{message}</div>
                    )
                } 
                <div className='text-center m-3'>
                <button className='btn btn-success' type='submit' >Add</button>

                </div>
            </div> 
        </form>
    
    
    </div>

    <br />
    <br />
    <div className='card w-50 p-3 m-5 d-inline-block'>
        <h1>List of products</h1>  <br />
        <table className='table table-striped table-dark'>
            <tbody>
                <tr >
                    <th>label</th>
                    <th>price</th>
                    <th></th>

                </tr>
        
                { products.map(product => 
                    (
                    <tr key={product.id}>
                        <td>{product.label}</td>
                        <td>{product.price}</td>
                        <td> <i className="bi bi-trash-fill" onClick={()=>deleteProduct(product.id)}></i></td>        
                    </tr>
                )   
                )}

            </tbody>
        

        </table>
    </div>
 
</div>
    </>

  )
}

export default Product