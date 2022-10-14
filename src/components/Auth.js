import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { authActions } from './../store/authSlice'
import BlueButton from './BlueButton'

import axios from 'axios'

const Auth = () => {
	const [error, setError] = useState('')
	const register = useSelector(state => state.auth.isRegister)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const url = 'http://localhost:4040'

	const formInitialValues = {
		username: '',
		password: '',
	}

	const handleSubmit = async values => {
		try {
			const response = await axios.post(
				register ? `${url}/register` : `${url}/login`,
				values
			)
			const data = response.data
			dispatch(
				authActions.login({
					token: data.token,
					sessionExp: data.expirationTime,
					userId: data.userId
				})
			)
			navigate('/')
		} catch (err) {
			console.log(err)
			setError(err.response.data)
			if (register) {
				setTimeout(() => {
					setError('')
				}, 8000)
			} else {
				setTimeout(() => {
					setError('')
				}, 2000)
			}
		}
	}

	return (
		<div >
			<h1>{!register ? 'Login' : 'Register for an account'}</h1>

			<Formik
				initialValues={formInitialValues}
				onSubmit={(values, { resetForm }) => {
					handleSubmit(values)
					resetForm({ values: '' })
				}}
			>
				{({ isSubmitting, dirty }) => (
					<Form >
						<div >
							<label htmlFor="username">
								Username
							</label>
							<Field
								
								name="username"
								placeholder="Email or username"
							/>
							<label htmlFor="password">
								Password
							</label>
							<Field
								
								type="password"
								name="password"
								placeholder="Password"
							/>
						</div>
						<div >
							<p >
								{register ? 'Need to log in?' : 'No Account?'}
							</p>
							<button
								
								type="button"
								onClick={() => dispatch(authActions.toggleRegister())}
							>
								{register ? 'Login here.' : 'Register here.'}
							</button>
						</div>
						<BlueButton
							loading={isSubmitting}
							disabled={!dirty}
							type={'submit'}
						>
							{!register ? 'Login' : 'Register'}
						</BlueButton>
					</Form>
				)}
			</Formik>
			<p >{error}</p>
		</div>
	)
}

export default Auth
