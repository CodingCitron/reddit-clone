import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import InputGroup from '../components/InputGroup'
import axios from 'axios'
import { useRouter } from 'next/router'

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<any>({})

  const router = useRouter()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    
    try {
      const res = await axios.post('auth/register', {
        email,
        username,
        password
      })

      router.push('login')
    } catch (error: any) {
      console.log(error)
      setErrors(error.response.data || {})
    }
  }

  return (
    <div>
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit}>
            <InputGroup 
              placeholder='email'
              value={email}
              setValue={setEmail}
              error={errors.email}
            />
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
            <button>회원가입</button>
        </form>
        <small>
            이미 가입하셨나요?
            <Link href="/login">
              로그인
            </Link>
        </small>
    </div>
  )
}

export default Register