import LoginForm from '../components/forms/LoginForm';

function LoginView() {
	return (
		<main className="p-4 sm:w-1/2 xl:w-1/3 m-auto mt-80">
			<h1 className="text-3xl font-bold text-center mb-4">Instalike</h1>
			<LoginForm />
		</main>
	);
}

export default LoginView;
