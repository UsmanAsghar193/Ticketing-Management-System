"use client"
import React from 'react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import Password from 'antd/es/input/Password';
import bcrypt from 'bcryptjs';
import { handleRegister } from '@/lib/serverActions';


const Register = () => {
  
  const onFinish = (values) => {

    const encryptedPassword = bcrypt.hashSync(values.password, 10); // Use bcrypt to hash the password
    values.password = encryptedPassword;
    console.log('Received values of form: ', values);
    handleRegister(values)
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center w-screen h-screen'>
        <div className='flex flex-col justify-center items-center border border-slate-700 shadow-2xl shadow-slate-900 rounded-md'>
          <h1 className='m-5 font-mono font-bold text-4xl text-neutral-200'>Register</h1>
          <div className='mx-10'>
            <Form
              method='post'
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                hasFeedback
                rules={[
                  // {
                  //   type: 'string',
                  //   message: 'Not a valid Name',
                  // },
                  {
                    required: true,
                    message: 'Please input your Name!',
                  },
                  {
                    pattern: /^[a-zA-Z\s]*$/,
                    message: 'Name should not contain numbers and special characters',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
              </Form.Item>
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
                    min: 10,
                    message: 'Password must be at least 10 characters!',
                  },
                  {
                    pattern: /[A-Z]/,
                    message: 'Password must contain at least one capital letter!',
                  },
                  {
                    pattern: /[!@#$%^&*]/,
                    message: 'Password must contain at least one special character!',
                  },
                ]}
              >
                <Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
              </Form.Item>
              {/* <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password" />
              </Form.Item> */}


              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button ant-btn-cstm">
                  Register
                </Button>
              </Form.Item>
            </Form>

          </div>
          <div className='mb-5 text-sm'>
            <span className='text-neutral-200'>Already Have An Account ? </span><Link className='text-blue-500' href={'/login'}>Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register



