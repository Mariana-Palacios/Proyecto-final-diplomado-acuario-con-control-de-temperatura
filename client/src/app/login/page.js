import Link from 'next/link'
import '../../styles/styles.css'

const Login = () => {
    return (
        <main className='login flex flex-j-c flex-a-i'>
            <form action="/send-data-here" method="post" className='form flex flex-j-c flex-a-i flex-f-d-c'>
                <h1 className='form__title'>Login</h1>
                <label for="first" className='form__label'>Email</label>
                <input type="text" id="first" name="first" className='form__input'/>
                <label for="last" className='form__label'>Password</label>
                <input type="password" id="last" name="last" className='form__input'/>
                <button type="submit" className='form__button'>Submit</button>
                <p>No account? Create one!</p>
            </form>
        </main>
  )
}


export default Login