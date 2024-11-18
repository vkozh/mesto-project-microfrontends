import { lazy } from 'react'

export const Header = lazy(() => import('header/Header').catch(() => {
    return {
        default: () => <div className='error'>Component Header is not available!</div>
    }
}))

export const Login = lazy(() => import('auth/Login').catch(() => {
    return {
        default: () => <div className='error'>Component Login is not available!</div>
    }
}))

export const Register = lazy(() => import('auth/Register').catch(() => {
    return {
        default: () => <div className='error'>Component Register is not available!</div>
    }
}))
