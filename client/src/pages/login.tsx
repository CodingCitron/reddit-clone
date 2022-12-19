import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import InputGroup from '../components/InputGroup'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useAuthDispatch } from '../context/auth'

const Login = () => {
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<any>({})

    const dispatch = useAuthDispatch()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    
    try {
      const res = await axios.post('auth/login', {
        username,
        password
      },
      {
        withCredentials: true
      })

      dispatch('LOGIN', res.data?.user)
      router.push('/')
    } catch (error: any) {
      console.log(error)
      setErrors(error.response.data || {})
    }
  }

  return (
    <div>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
            <InputGroup 
              placeholder='username'
              value={username}
              setValue={setUsername}
              error={errors.username}
            />
            <InputGroup 
              type='password'
              placeholder='password'
              value={password}
              setValue={setPassword}
              error={errors.password}
            />
            <button>로그인</button>
        </form>
        <small>
            아직 아이디가 없나요?
            <Link href="/register" className='text-red-500'>
              회원가입
            </Link>
        </small>
    </div>
  )
}

export default Login