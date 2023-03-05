import Link from 'next/link'
import '../../styles/styles.css'
import { MdOutlineEmail, MdPassword } from "react-icons/md";

const SingUp = () => {
    return (
        <main className='login flex flex-j-c flex-a-i'>
            <form action="/send-data-here" method="post" className='form flex flex-j-s-b flex-a-i-s-b flex-f-d-c'>
                <h1 className='form__title'>Sing Up</h1>
                <label for="first" className='form__label'><MdOutlineEmail/> Email</label>
                <input type="text" id="first" name="first" className='form__input'/>
                <label for="last" className='form__label'><MdPassword/>Password</label>
                <input type="password" id="last" name="last" className='form__input'/>
                <label for="last" className='form__label'><MdPassword/>Confirmation</label>
                <input type="password" id="last" name="last" className='form__input'/>
                <button type="submit" className='form__button'>Submit</button>
                <p>Already have an account? <Link href='/login'><span>Log in now!</span></Link></p>
            </form>
        </main>
  )
}


export default SingUp