import { useCallback, useState } from '@lynx-js/react'
import './Login.scss'

import studyingGirl from '../../assets/icons/studyingGirl.png';
import heslbRoundLogo from './../../assets/icons/heslbRoundLogo.png';
import lock from './../../assets/icons/lock.png';

export function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleLogin = useCallback(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }
        , [username, password])


    return (
        <view style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <view className='loginApp'>
                <view className='loginForm'>
                    <view className='upperHeaderBanner'>
                        <text className='headerTwo'>Welcome Back !</text>
                        <text className='p'>Sign in to continue to OLAMS.</text>
                        <image src={`${heslbRoundLogo}`} className='logo' />
                        <image src={`${studyingGirl}`} className='bannerImage' />
                    </view>
                    <view className='innerForm'>
                        <view className='formField'>
                            <text className='formLabel'>Username</text>
                            <input type="text" className='inputField' />
                        </view>
                        <view className='formField'>
                            <text className='formLabel'>Password</text>
                            <input type="password" className='inputField' />
                        </view>
                        <view className='loginBtn' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} bindtap={handleLogin}>
                            {loading ? <text style={{ color: 'white' }}>Loading...</text> : <text style={{ color: 'white' }}>Log In</text>}
                        </view>

                        <view style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                            <view style={{ display: 'flex', alignItems: 'center' }}>
                                <image src={`${lock}`} style={{ width: '15px', height: '15px', marginRight: '5px' }} />
                                <text style={{ cursor: 'pointer', color: '#6c757d', fontWeight: '300', opacity: '80%' }}>Forgot your password?</text>
                            </view>
                        </view>
                    </view>


                </view>


            </view>
            <view style={{ padding: '10px', fontSize: '14px', display: 'flex', justifyContent: 'center'}}>
                    <text style={{ cursor: 'pointer', color: '#6c757d', fontWeight: '400' }}>Don't have an account? </text>
                     <text style={{ color: '#4c6ef5', cursor: 'pointer' }}> Signup now</text>
            </view>
            <text style={{cursor: 'pointer', color: '#6c757d', fontWeight: '400', marginBottom: '20px', paddingTop: '7px'}}>© 2025 HESLB. All Rights Reserved</text>
        </view>
    )
}
