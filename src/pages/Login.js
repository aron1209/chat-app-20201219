import React from "react";
import { auth } from "../config/firebase";
import { useForm } from "react-hook-form";

const Login = () => {
	const { register, handleSubmit, errors } = useForm();
	const login = (data) => {
		auth.signInWithEmailAndPassword(data.email, data.password).catch((err) => {
			console.log(err);
		});
	};
	return (
		<>
			<h1>This is chat app</h1>
			<form onSubmit={handleSubmit(login)}>
				<div>
					<label htmlFor="email">メールアドレス</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="Your E-Mail"
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
				<button type="submit">ログイン</button>
			</form>
		</>
	);
};

export default Login;
