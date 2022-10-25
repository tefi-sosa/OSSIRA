import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { authActions } from './../store/authSlice'
import LoginBtn from './LoginBtn'

import axios from 'axios'

import classes from './Auth.module.css'

const {PORT} = process.env

const Auth = () => {
	const [error, setError] = useState('')
	const register = useSelector(state => state.auth.isRegister)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const url = `http://localhost:4040`

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
					sessionExp: data.exp,
					userId: data.userId
				})
			)
			navigate('/user')
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
				}, 3000)
			}
		}
	}

	return (
		<section className={classes.auth}>
			<div className={classes.form}>
				<h2>{!register ? 'LOGIN' : 'Register for an account'}</h2>

				<Formik
					initialValues={formInitialValues}
					onSubmit={(values, { resetForm }) => {
						handleSubmit(values)
						resetForm({ values: '' })
					}}
				>
					{({ isSubmitting, dirty }) => (
						<Form>
							<div className={classes.form}>
								<div className={classes.inputs}>
									<label htmlFor="username">
										Username
									</label>
									<Field
										style={{marginBottom: 25}}
										className={classes.field}
										name="username"
										placeholder="Email or username"
									/>
									<label htmlFor="password">
										Password
									</label>
									<Field
										className={classes.field}
										type="password"
										name="password"
										placeholder="Password"
									/>
								</div>
								<LoginBtn

									loading={isSubmitting}
									disabled={!dirty}
									type={'submit'}
								>
									{!register ? 'Login' : 'Register'}
								</LoginBtn>								
							</div>
							<div >
								<p >
									{register ? 'Need to log in?' : 'No Account?'}
								</p>
								<button
									className={classes.toggler_btn}
									type="button"
									onClick={() => dispatch(authActions.toggleRegister())}
								>
									{register ? 'Login Here' : 'Create Account'}
								</button>

								
							</div>
						</Form>
					)}
				</Formik>
				<p className={classes.error}>{error}</p>
			</div>
		</section>
	)
}

export default Auth
