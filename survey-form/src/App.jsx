import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, useFBX, useGLTF } from '@react-three/drei'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

/*function Box() {
  return(
    <mesh position={[40,20,10]}>
       <sphereGeometry args={[4, 20, 20]} />
       <meshStandardMaterial color="orange" />
   
       <hemisphereLight intensity={2} groundColor="gray"/>

       
    </mesh>
  );
}
function Box1() {
  return(
    <mesh position={[3,3,0]}>
       <sphereGeometry args={[2, 20, 20]} />
       <meshStandardMaterial color="white" />
   
       <hemisphereLight intensity={2} groundColor="black"/>

       
    </mesh>
  );
}
function Sphere() {
  return(
    <mesh position={[7,5,0]} >
       <sphereGeometry args={[1, 20, 20]} />
       <meshStandardMaterial color="white" />
   
       <hemisphereLight intensity={2} groundColor="black"/>

       
    </mesh>
  );
}
function Sphere1() {
  return(
    <mesh position={[0.5,4,0]} >
       <sphereGeometry args={[1, 20, 20]} />
       <meshStandardMaterial color="white" />
   
       <hemisphereLight intensity={2} groundColor="black"/>

       
    </mesh>
  );
}
function Sphere2() {
  return(
    <mesh position={[0.5,6,0]} >
       <sphereGeometry args={[1, 20, 20]} />
       <meshStandardMaterial color="white" />
   
       <hemisphereLight intensity={2} groundColor="black"/>

       
    </mesh>
  );
}

function Plane() {
  return(
    <mesh position={[0,-0.09,0]} rotation={[-Math.PI /2 ,0,0]}>
       <planeGeometry args={[100,100]} />
       <meshStandardMaterial color="gray" />
   
       <hemisphereLight intensity={0.5} groundColor="black"/>

       
    </mesh>
  );
}*/





import { useLayoutEffect,useRef } from 'react';
import gsap from 'gsap';
import { db } from './firebase.jsx'
import { push,ref } from 'firebase/database';


function Form(){
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const contactForm = async (e) => {
    e.preventDefault();
  
    try {
      await push(ref(db, "contactList"), {
        firstname: firstName,
        lastname: lastName,
        email: email,
        message: message,
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    window.location.reload();
  };

  return(
    <div className='h-auto w-auto max-w-96 sticky left-[45rem] z-1'>
      <form action="" method=''>
      <div className='flex flex-col h-screen justify-center px-10 text-white'>
        <input onChange={(e)=>setFirstName(e.target.value)} id='input1' className='py-2 px-2 my-2 bg-transparent shadow-md shadow-cyan-100 ' type="text" placeholder='firstname' />
        <input onChange={(e)=>setLastName(e.target.value)} id='input1' className='py-2 px-2 my-2 bg-transparent shadow-md shadow-cyan-100 '  type="text" placeholder='lastname' />
        <input onChange={(e)=>setEmail(e.target.value)} id='input1' className='py-2 px-2 my-2 bg-transparent shadow-md shadow-cyan-100 ' type="email" placeholder='email' />
        <input onChange={(e)=>setMessage(e.target.value)} id='input1' className='py-2 px-2 my-2 bg-transparent shadow-md shadow-cyan-100' type="text" placeholder='message' />
        <button onClick={contactForm} id='input1' className='mt-2 hover:text-cyan-200' type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}

function App() {

  const comp = useRef(null)
 
  useLayoutEffect(()=>{
    let context = gsap.context(()=>{
      const t1 =gsap.timeline()
      
      t1.from("#intro",{
        xPercent:"-100",
        duration:1.3,
        delay:0.3,
      }).from(["#n1","#n2","#n3","#n4"],{
        opacity:0,
        y:"+=30",
        stagger:0.5
      }).to(["#n1","#n2","#n3","#n4"],{
        opacity:0,
        y:"-=30",
        delay:0.3,
        stagger:0.5
      }).to("#intro",{
        xPercent:"-100",
        duration:1.3,
        delay:0.3
      }).from("#input1",{
        opacity:0,
        duration:0.5
      })
    },comp)

    return () => context.revert()
  },[])

  return (
    <div className='relative' ref={comp}>
      <div id='intro' className='h-screen p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight font-mono'>
        <h1 id='n1' className='text-7xl'>Harvey Dave de Gracia</h1>
        <h1 id='n2' className='text-7xl'>Jetch Merald Madaya</h1>
        <h1 id='n3' className='text-7xl'>Raven De Leon</h1>
        <h1 id='n4' className='text-7xl'>Natty Nacario</h1>
        <h1 id='n4' className='text-7xl'>Justin Commendador</h1>
      </div>
    <div className='bg-gray-950 h-screen place-items-center'>
 
  
   <Canvas camera={{position:[2,5,15]}} style={{position:'absolute'}}>
    <OrbitControls maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI /2}/>
    <Stars/>   
   </Canvas>
   <Form/>
  
 
   </div>
   </div>
  )
}

export default App
