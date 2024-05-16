import React ,{useState , useEffect} from 'react'
import { createClient } from 'contentful'
import '../index.css'

const client = createClient({
    space: 'u5eccfvvw0k2',
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_API_KEY,
})


const Content = () => {
    const [loading , setloading] = useState(true)
    const [content , setcontnet] = useState([])
     
    const fetchcontent = async ()  =>{
     try {
        const response = await client.getEntries({
            content_type:'projects' })
            setloading(false)
        const projects = response.items.map((items) =>{
            const { title , url , image } = items.fields
            const id = items.sys.id
            const img = image?.fields?.file?.url 
            return {title , id , img , url}
        })
        setcontnet(projects)
     } catch (error) {
       console.log(error);
       setloading(false) 
     }

    }
    useEffect(() =>{
        fetchcontent()
    },[])
    console.log(content);
  return (
    <div className='content-project'>
        {
            content.map((item) =>{
                const {id , url , title , img} = item
                return (
                    <div className='each-item' key={id}>
                        <a href={url}>
                            <img src={img} alt={title} className='project-images' />
                            
                            <h3>{title}</h3>
                        </a>
                    </div>
                )
            })
        } 
    </div>
  )
}

export default Content
