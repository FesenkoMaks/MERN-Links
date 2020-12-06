import React, {useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";



export const AuthPage = () => {
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    // useEffect(() => {
    //     alert(error)
    //     clearError()
    // }, [error])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('http://localhost:5000/api/auth/register', 'POST', {...form})
            console.log('Data: ', data)
            clearError()
        } catch (e) {

        }
    }

    return (
        <div>
            <div>
                <h1>Авторизация</h1>
            </div>
            <input
                type="text"
                name="email"
                id="email"
                placeholder="Введите email"
                onChange={changeHandler}
            />
            {error ? <div>{error}</div> : null}
            <input
                type="text"
                name="password"
                id="password"
                placeholder="Введите пароль"
                onChange={changeHandler}
            />
            <div>
                <button
                    disabled={loading}
                >
                    Войти
                </button>
                <button
                    onClick={registerHandler}
                    disabled={loading}
                >
                    Регистрация
                </button>
            </div>
        </div>
    );
};