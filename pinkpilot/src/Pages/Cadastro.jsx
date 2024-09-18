import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../Services/firebaseConfig";

import logoImg from "../../public/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import fundCadLog from "../../public/fundCadLog.png"
 
function Cadastro() {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [createUserWithEmailAndPassword, loading, user] = useCreateUserWithEmailAndPassword(auth);

    const [errors, setErrors] = useState({
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    function handleSignOut(e) {
        e.preventDefault();

        const newErrors = { email: '', confirmEmail: '', password: '', confirmPassword: '' };

        if (!validateEmail(email)) {
            newErrors.email = 'Por favor, insira um e-mail válido.';
        }

        if (email !== confirmEmail) {
            newErrors.confirmEmail = 'Os e-mails não correspondem.';
        }

        if (password.length < 6) {
            newErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'As senhas não correspondem.';
        }

        setErrors(newErrors);

        if (newErrors.email || newErrors.confirmEmail || newErrors.password || newErrors.confirmPassword) {
            return;
        }

        createUserWithEmailAndPassword(email, password)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log('Erro ao cadastrar:', error.message);
            });
    }

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="text-center mb-8">
                        <img src={logoImg} alt="Workflow" className="w-64 mx-auto" />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold text-margentinha">Cadastre-se</h1>

                        <form onSubmit={handleSignOut} className="w-full flex-1 mt-8">
                            <div className="mx-auto max-w-xs">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Seu e-mail"
                                    className={`w-full px-8 py-4 rounded-lg bg-gray-100 border ${errors.email ? 'border-red-500' : 'border-gray-200'} placeholder:text-margentinha  text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

                                <input
                                    type="text"
                                    name="confirmEmail"
                                    placeholder="Confirme seu e-mail"
                                    className={`w-full px-8 py-4 rounded-lg bg-gray-100 border ${errors.confirmEmail ? 'border-red-500' : 'border-gray-200'} placeholder:text-margentinha  text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                                    onChange={(e) => setConfirmEmail(e.target.value)}
                                />
                                {errors.confirmEmail && <p className="text-red-500 text-sm mt-1">{errors.confirmEmail}</p>}

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Sua senha"
                                    className={`w-full px-8 py-4 rounded-lg bg-gray-100 border ${errors.password ? 'border-red-500' : 'border-gray-200'} placeholder:text-margentinha  text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirme sua senha"
                                    className={`w-full px-8 py-4 rounded-lg bg-gray-100 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'} placeholder:text-margentinha text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}

                                <button
                                    type="submit"
                                    className="mt-5 tracking-wide font-semibold bg-margentinha text-gray-100 w-full py-4 rounded-lg hover:bg-rosinha transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3 ">Cadastrar</span>
                                </button>
                            </div>
                        </form>

                        <p className="mt-6 text-xs text-gray-600 text-center">
                            Já tem uma conta?{' '}
                            <Link to="/login" className="text-margentinha hover:underline">
                                Acesse sua conta aqui
                            </Link>
                        </p>
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

export default Cadastro;
