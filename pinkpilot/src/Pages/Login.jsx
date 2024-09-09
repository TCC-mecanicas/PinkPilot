import logoImg from "../../public/logo.svg";
import arrowImg from "../../public/arrow.svg";
   
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../Services/firebaseConfig";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); 


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage("Por favor, preencha todos os campos.");
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Por favor, insira um email válido.");
            return;
        }

        signInWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    useEffect(() => {
        if (error) {
            setErrorMessage("Verifique o seu email ou a sua senha.");
        }
    }, [error]);

    return (
        <>
            <div className="container flex items-center justify-center min-h-screen">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <header className="text-center mb-8">
                        <img src={logoImg} alt="Workflow" className="w-30 mx-auto mb-4" />
                        <span className="text-lg font-semibold text-gray-700">Bem Vinda(o) de volta!</span>
                    </header>

                    <form onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Seu email"
                                className={`mt-1 block w-full px-3 py-2 border ${errorMessage ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-margentinha focus:border-margentinha`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Sua senha"
                                className={`mt-1 block w-full px-3 py-2 border ${errorMessage ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-margentinha focus:border-margentinha`}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-red-500 text-sm mb-4 text-center">{errorMessage}</p>
                        )}

                        <div className="mb-2 text-center">
                            <p className="text-sm text-gray-600">Esqueceu sua senha?</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 font-semibold rounded-lg flex items-center justify-center transition duration-300  bg-margentinha text-white hover:bg-rosinha"                     
                        >
                            Entrar
                            <img src={arrowImg} alt="->" className="ml-2" />
                        </button>

                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">Não tem uma conta?</p>
                            <Link to="/cadastro" className="text-margentinha hover:underline">Crie sua conta aqui</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
