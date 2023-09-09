import React, { useState } from 'react';
const Contact = () => {
  const [data,setData] = useState({
       fullname: "",
       phone: "",
       email: "",
       message: "",
  });

const InputEvent = (event) =>{
       const {name,value} = event.target;

       setData((preVal)=>{
         return {
           ...preVal,
           [name]:value,
         }
       })
}
  return (
    <>

      <div className='my-5'>
        <h1 className='text-center'>Login</h1>
      </div>
      <div className='container contact_div'>

        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>

            <form action='/service'>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"
                name='fullname'
                value={data.fullname}
                onChange={InputEvent} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div className='col-12'>
                <button className='btn btn-outline-primary' type='submit'>Submit</button>
              </div>
            </form>


          </div>
        </div>
      

      </div>


    </>
  )
}

export default Contact;