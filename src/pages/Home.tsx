
import NavBar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='flex justify-center items-center h-3/5 sm'>
        <h1 className='text-4xl text-purple-500'>Seja bem vindo a Finance !</h1>
      </div>
    </>
  )
}

export default Home