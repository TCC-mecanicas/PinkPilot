import logoImg from "../../public/logo.svg";
import arrowImg from "../../public/arrow.svg";
import fundCadLog from "../../public/fundCadLog.png"

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
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src={logoImg} alt="Workflow" className="w-64 mx-auto mb-4" />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold text-margentinha">Olá, bem-vinda!</h1>
                        <div className="w-full flex-1 mt-8">
                            <form onSubmit={handleSignIn} className="mx-auto max-w-xs">
                                <input
                                    className={`w-full px-8  placeholder:text-margentinha py-4 rounded-lg font-medium bg-gray-100 border ${errorMessage ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className={`w-full px-8 py-4 placeholder:text-margentinha rounded-lg font-medium bg-gray-100 border ${errorMessage ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                                    type="password"
                                    placeholder="Senha"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errorMessage && (
                                    <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
                                )}
                                <button
                                    type="submit"
                                    className="mt-5 tracking-wide font-semibold bg-margentinha text-gray-100 w-full py-4 rounded-lg hover:bg-rosinha transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <img src={arrowImg} alt="->" className="w-6 h-6 -ml-2" />
                                    <span className="ml-3">Entrar</span>
                                </button>
                                <div className="mt-6 text-xs text-gray-600 text-center">
                                    <p>Esqueceu sua senha?</p>
                                </div>
                            </form>

                            <div className="mt-4 text-center">
                                <p className="text-sm text-gray-600">Não tem uma conta?</p>
                                <Link to="/cadastro" className="text-margentinha hover:underline">Crie sua conta aqui</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-margentinha text-center hidden lg:flex">
                    <img className="size-fit mt-14 bg-contain bg-center bg-no-repeat"
                        src={fundCadLog}>
                    </img>
                </div>
            </div>
        </div>
    );
}

export default Login;
