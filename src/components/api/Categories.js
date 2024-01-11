import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CategoryTemplate from '../templates/CategoryTemplate'
import "./category.css";

const urlApi = "https://fakestoreapi.com/products/categories"

function Categories() {
    
    const [categorys, setCategorys] = useState([])

    useEffect(()=>{
        axios.get(urlApi).then((response)=>{
            setCategorys(response.data)
        })
    },[])

    const categoryResult = categorys.map((e,i)=>{
        return <CategoryTemplate key={i} category={e}/>
    })

  return (
<ul className='categories'>
    {categoryResult}
</ul>
  )
}

export default Categories