import React from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
import { FacebookLogin, FacebookLoginAuthResponse } from 'react-facebook-login-lite'

import { googleLogin } from '../../redux/actions/authAction'

const SocialLogin = () => {
  const dispatch = useAppDispatch()

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token
    dispatch(googleLogin(id_token))
  }
  
  

  return (
    <>
      <div className="my-2">
        <GoogleLogin 
        client_id='' // 수정
        onSuccess={onSuccess}
        />
      </div>

      <div className="my-2">
        <FacebookLogin 
        appId="ayour-facebook-app-id"
        onSuccess={onSuccess}
        onFailure={onFailure}
        />
      </div>
    </>
  )
}

export default SocialLogin