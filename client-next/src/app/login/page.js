import Link from 'next/link'
import '../../styles/styles.css'
import { MdOutlineEmail, MdPassword } from "react-icons/md";

const Login = () => {
    return (
        <main className='login flex flex-j-c flex-a-i'>
            <form action="/send-data-here" method="post" className='form flex flex-j-s-b flex-a-i-s-b flex-f-d-c'>
                <h1 className='form__title'>Login</h1>
                <label for="email" className='form__label'><MdOutlineEmail/> Email</label>
                <input type="email" id="email" name="email" className='form__input'/>
                <label for="password" className='form__label'><MdPassword/>Password</label>
                <input type="password" id="password" name="password" className='form__input'/>
                <button type="submit" className='form__button'>Submit</button>
                <p>No account? <Link href='/singUp'><span>Create one!</span></Link></p>
            </form>
        </main>
  )
}


export default Login