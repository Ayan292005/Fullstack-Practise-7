import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
let DBurl = "http://localhost:1010/music"


function Add() {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      desc: ''

    },
    onSubmit: values => {
      axios.post("http://localhost:1010/music", values)
    },
  })

  let [data, setData] = useState([])

  function getData() {
    axios.get(DBurl)
      .then(res => {
        setData(res.data)

      })
  }

  useEffect(() => {
    getData()
  }, [])

  function deleteData(id) {
    let dataId = data.filter(el => el._id !== id)
    setData(dataId)

    // axios.delete(`${DBurl}/${id}`)
    //   .then(() => {
    //     getData()
    //   })
  }



  return (
    <div style={{paddingTop:"150px", backgroundColor:"#f8f9fa"}}>
      <form onSubmit={formik.handleSubmit} className='container add-form'>
   
        <div className='input-wrapper'>
          <label htmlFor="image">Image</label>
          <input className='border'
            required
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </div>

        <div className='input-wrapper'>
          <label htmlFor="name">Name</label>
          <input className='border'
            required
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div className='input-wrapper'>
          <label htmlFor="desc">Description</label>
          <input className='border'
            required
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.desc}
          />
        </div>

        <button type="submit" onClick={() => navigate("/guests")} className='submit-btn'>Submit</button>
      </form>

      <table className='container' style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th>image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            data && data.map(product => (
              <tr key={product.id}>
                <td><img src={product.image} alt="" style={{ width: "80px", height: "80px", objectFit: "contain" }} /></td>
                <td>{product.name}</td>
                <td>{product.desc}</td>
                <td><button className='delete-btn' onClick={() => deleteData(product._id)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Add
