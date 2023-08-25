import React, { useEffect, useState } from 'react';
import Card from './Card/Card';


const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(() =>{
        setLoading(true)
        fetch('./blogDetails.json')
        .then(res =>res.json())
        .then(data =>{ 
            setBlogs(data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    },[])
    return (
        <div className='pt-12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-8'>
            {blogs.map((blog,index)=> 
          
             <Card key={index} blog={blog} />
             
           
                
            )}
        </div>
    );
};

export default Blogs;