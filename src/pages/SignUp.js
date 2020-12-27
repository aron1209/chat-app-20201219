import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "../config/firebase";

const SignUp = () => {
	const { register, handleSubmit, errors } = useForm();
	const signUp = (data) => {
		auth
			.createUserWithEmailAndPassword(data.email, data.password)
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<h1>Sign up</h1>
			<form onSubmit={handleSubmit(signUp)}>
				<div>
					<label htmlFor="email">メールアドレス</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="Your E-mail"
						ref={register({ required: true })}
					></input>
				</div>
				<div>
					<label htmlFor="password">パスワード</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Your Password"
						ref={register({ required: true })}
					></input>
				</div>
				<button type="submit">アカウント作成</button>
			</form>
		</div>
	);
};

export default SignUp;
