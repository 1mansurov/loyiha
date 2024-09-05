import React, { useState } from 'react';
import axios from '../../api/axios.js'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Typography, Form, Input } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "../login/Login.css"; 

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true); 
    try {
      const response = await axios.post('auth/login', values);
      dispatch({ type: "LOGIN", token: response.data.access_token });
      navigate("/profile");

      toast.success('Login successful!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
      
      toast.error('Login failed. Please try again.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } finally {
      setLoading(false); 
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Validation Failed:', errorInfo);
    toast.error('Validation failed! Please check your input.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div className="login-container">
      <ToastContainer />
      
      <div className="login-form-wrapper">
        <Form className='w-[700px]'
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 400,
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '10px',
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
       <Link to="/home">
       <Typography.Title
            level={1}
            style={{
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '24px',
            }}
          >
            LOGIN
          </Typography.Title>
       </Link>
          <br />

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder="EMAIL" className="custom-input" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="PASSWORD" className="custom-input" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-button"
              block
              loading={loading}
            >
              {loading ? 'Logging in...' : 'SUBMIT'}
            </Button>
          </Form.Item>

          <div className="login-links">
            <Typography.Link href="#" style={{ color: '#ffffff' }}>
              REGISTER
            </Typography.Link>
            <Typography.Link href="#" style={{ color: '#ffffff' }}>
              FORGOT PASSWORD
            </Typography.Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
