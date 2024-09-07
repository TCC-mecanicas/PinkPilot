import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../Services/firebaseConfig";

import logoImg from "../../public/logo.svg";
import arrowImg from "../../public/arrow.svg";
import { Link, useNavigate } from "react-router-dom";

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
        <>
            <div className="container flex items-center justify-center min-h-screen">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <header className="text-center mb-8">
                        <img src={logoImg} alt="Workflow" className="w-30 mx-auto mb-4" />
                        <span className="text-lg font-semibold text-gray-700">
                            Por favor, digite suas informações de cadastro
                        </span>
                    </header>

                    <form onSubmit={handleSignOut}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Seu e-mail"
                                className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-margentinha focus:border-margentinha`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">
                                Confirme seu E-mail
                            </label>
                            <input
                                type="text"
                                name="confirmEmail"
                                id="confirmEmail"
                                placeholder="Confirme seu e-mail"
                                className={`mt-1 block w-full px-3 py-2 border ${errors.confirmEmail ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-margentinha focus:border-margentinha`}
                                onChange={(e) => setConfirmEmail(e.target.value)}
                            />
                            {errors.confirmEmail && <p className="text-red-500 text-sm mt-1">{errors.confirmEmail}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Sua senha"
                                className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-margentinha focus:border-margentinha`}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirme sua Senha
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirme sua senha"
                                className={`mt-1 block w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-margentinha focus:border-margentinha`}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-margentinha text-white font-semibold rounded-lg flex items-center justify-center hover:bg-rosinha transition duration-300"
                        >
                            Cadastrar
                            <img src={arrowImg} alt="->" className="ml-2" />
                        </button>

                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">Você já tem uma conta?</p>
                            <Link to="/login" className="text-margentinha hover:underline">
                                Acesse sua conta aqui
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Cadastro;