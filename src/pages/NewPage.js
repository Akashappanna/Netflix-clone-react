import React,{useEffect} from 'react'

const NewPage = () => {

    const toggleview=(e)=>{
        console.log(e.offsetX);
    }

    useEffect(()=>{
        window.addEventListener('mouseover',toggleview)

        return (()=>{
            window.removeEventListener('mouseover',toggleview)
        })
    },[])

  return (
    <React.Fragment>
    <div style={{height:'100vh',color:'white',backgroundColor:'black'}} >NewPage</div>
    <div style={{height:'100vh'}}>NewPage</div>
    </React.Fragment>
  )
}

export default NewPage