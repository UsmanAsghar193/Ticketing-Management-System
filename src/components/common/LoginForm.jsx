"use client"
import React from 'react'
import { GithubOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input } from 'antd';
import Link from 'next/link';
import Password from 'antd/es/input/Password';
// import { useCommon } from '@/actions/common';
import bcrypt from 'bcryptjs';
// import { create } from '@/app/actions';
import { handleGithubLogin } from '@/lib/serverActions';
import { handleSignin } from '@/lib/serverActions';
import { useRouter } from 'next/navigation';
import { useCommon } from '@/actions/common';

const LoginForm = () => {
    const { loading, loginData, Login, changeHandler } = useCommon();


    const handleSubmit = (values) => {
        // console.log('This is Event = ',e)
        // e.preventDefault();
        loginData.email = values.email
        loginData.password = values.password
        // console.log(loginData)
        // console.log('Received values of form: ', values);
        Login();
        // create();
    };

    // Temporarily Commented

    // const onFinish = (values) => {

    //     // const encryptedPassword = bcrypt.hashSync(values.password, 10); // Use bcrypt to hash the password
    //     // values.password = encryptedPassword;

    //     console.log('Received values of form: ', values);
    //     handleSignin(values);

    // };

    async function handleLogin() {
        await handleGithubLogin();
    }


    return (
        <>
            <div className='flex flex-col justify-center items-center w-screen h-screen'>
                <div className='flex flex-col justify-center items-center border border-slate-700 shadow-2xl shadow-slate-900 rounded-md'>
                    <h1 className='m-5 font-mono font-bold text-4xl text-neutral-200'>Login</h1>
                    <div className='mx-10'>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={handleSubmit}
                            // onSubmit={handleSubmit}
                            // onSubmit={handleSubmit}
                        >
                            <Form.Item
                                name="email"
                                hasFeedback
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Not a valid email',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                {/* <Input onChange={changeHandler} value={loginData.email} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" /> */}
                                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                    {
                                        min: 6,
                                        message: 'Password must be at least 6 characters!',
                                    },
                                    // {
                                    //     validator: (_, value) => {
                                    //         // Check for at least one capital letter
                                    //         if (!/[A-Z]/.test(value)) {
                                    //             return Promise.reject('Password must contain at least one capital letter!');
                                    //         }
                                    //         return Promise.resolve();
                                    //     },
                                    // },
                                    // {
                                    //     validator: (_, value) => {
                                    //         // Check for at least one special character
                                    //         if (!/[!@#$%^&*]/.test(value)) {
                                    //             return Promise.reject('Password must contain at least one special character!');
                                    //         }
                                    //         return Promise.resolve();
                                    //     },
                                    // },
                                ]}
                            >
                                <Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Password"
                                />
                                {/* <Password
                  value={loginData.password}
                  onChange={changeHandler}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                /> */}
                            </Form.Item>


                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button ant-btn-cstm">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                        <Divider style={{ color: 'rgb(229,229,229)', borderColor: 'rgb(229,229,229)' }}>Or</Divider>
                        <Form name='github_login' className='login-form' onFinish={handleLogin}>
                            <Form.Item>
                                <Button onClick={handleSubmit} type="primary" htmlType="submit" className="login-form-button ant-btn-cstm"> <GithubOutlined /> Sign In with Github</Button>
                            </Form.Item>
                        </Form>
                        {/* <form action={handleLogin}>
                            <button>Login With Github</button>
                        </form> */}

                    </div>
                    <div className='mb-5 text-sm'>
                        <span className='text-neutral-200'>Don't Have An Account ? </span><Link className='text-blue-500' href={'/register'}>Register</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginForm