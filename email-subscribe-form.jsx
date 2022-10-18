import React, { useState } from 'react'
import { emailSignup } from '@redux/modules/email-subscribe'
import { useSelector, useDispatch } from 'react-redux'
import { validateEmail, validateZip } from '@helpers/string-helper'
import { useInjectSaga } from '@redux/injectSaga'
import saga from '@redux/coreSaga'
import Input from '@shared/input'
import loaderLight from '../../assets/images/loader-light.svg'

export const generateErrorMessage = (isEmailValid, isZipValid) => {
  if (!isEmailValid) {
    return { message: '*Invalid email address.', id: 'email-eror' }
  }
  if (!isZipValid) {
    return { message: '*Invalid zip code', id: 'zip-error' }
  }
  return {}
}

export const EmailSubscribeForm = () => {
  useInjectSaga({ key: 'email-subscribe', saga })
  const error = useSelector(state => state.emailSubscribe.error)
  const success = useSelector(state => state.emailSubscribe.success)
  const loading = useSelector(state => state.emailSubscribe.loading)
  const [isEmailValid, setEmailValid] = useState(true)
  const [isZipValid, setZipValid] = useState(true)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [zipCode, setZipCode] = useState('')

  const onFormSubmit = event => {
    if (event && event.preventDefault) event.preventDefault()
    const validEmail = validateEmail(email)
    const validZip = validateZip(zipCode)
    setEmailValid(validEmail)
    setZipValid(validZip)
    if (validEmail && validZip) {
      dispatch(emailSignup(email, zipCode))
      setupAnalytics(email)
      setEmail('')
      setZipCode('')
    }
  }

  const setupAnalytics = uEmail => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'footer_email_sign-up', user: { email: uEmail } })
    }
  }

  const info = {
    email,
    zip: zipCode,
  }

  const invalidFields = []
  if (!isEmailValid) invalidFields.push('email')
  if (!isZipValid) invalidFields.push('zip')
  const { message, id } = generateErrorMessage(isEmailValid, isZipValid)
  return (
    <>
      <fieldset>
        <legend className="email-label">Enter your email and ZIP code to receive special offers and more!</legend>
        <form>
          {success && <p className="success">Signed up for emails!</p>}
          {error && <p className="error">*Unable to sign up for emails.</p>}
          <p className="error" id={id}>
            {message}
          </p>
          <div className="email-container">
            <label className="signup-email-label" htmlFor="signup_email">
              Email Address
            </label>
            <Input
              type="text"
              textType
              className="signup-email"
              id="signup_email"
              autoComplete="email"
              field="email"
              info={info}
              setInfo={setEmail}
              invalidFields={invalidFields}
              required
              noLabel
            />
          </div>
          <div className="zip-container">
            <label className="signup-zip-label" htmlFor="zip">
              ZIP Code
            </label>
            <input
              aria-required="true"
              aria-invalid={!isZipValid}
              type="text"
              className="signup-zip"
              id="zip"
              autoComplete="postal-code"
              field="zip"
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
            />
          </div>
          <button
            type="button"
            value="Sign Up"
            name="signup_btn"
            className="signup-btn"
            id="signup-btn"
            gtm-category="footer"
            gtm-action="email signup"
            onClick={onFormSubmit}
          >
            {loading ? <img className="loader" alt="Sign Up" src={loaderLight} /> : 'Sign Up'}
          </button>
        </form>
      </fieldset>
    </>
  )
}

export default EmailSubscribeForm
