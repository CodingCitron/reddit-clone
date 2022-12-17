import React from 'react'

const register = () => {
  return (
    <div>
        <form>
            <button>회원가입</button>
        </form>
        <small>
            <Link href="/login">
                <a>로그인</a>
            </Link>
        </small>
    </div>
  )
}

export default register