import React, { useState } from 'react';
import { Button, Input, Card, Form, InputNumber } from 'antd'
import Logo from "./images/Logo.png";
import BgImage from "./images/Donate-banner.png";
import { Link } from 'react-router-dom';

const DonatePage = () => {

    const [form] = Form.useForm();
    const [successful, setSuccessful] = useState(false);
    const prefixSelector = (
        <Form.Item
            name="prefix"
            rules={[
                {
                    required: true
                },
                {
                    validator(rule, value) {
                        if ((/[0-9]/).test(value)) {
                            return Promise.resolve();
                        } else {
                            return Promise.reject(new Error('Should be combination Numbers!'));
                        }
                    }
                }
            ]}>
            <Input style={{ width: 100 }} />
        </Form.Item>
    );
    const handleOnFinish = value => {
        form.resetFields();
        setSuccessful(true);
    }

    return (
        <div className="donation-page" >
            <header style={{backgroundImage: `url(${BgImage})`}} className="donate-page-header">
                <Link to="/"><img className="logo" src={Logo} /></Link>
                <div className="message">
                    <div className="title">Make a donation</div>
                    <div className="content">Your support means that we can continue to fight the bad to protect the world using our superpowers. Any amount, no matter how small shows that you support the cause and makes a huge difference.</div>
                </div>
            </header>
            <Card
                className='donation-card'
                bordered={true}
            >
                <Form
                    form={form}
                    name="control-ref"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 14 }}
                    className='donation-form'
                    layout="vertical"
                    onFinish={handleOnFinish}
                >
                    <Form.Item
                        label={<h2>First Name</h2>}
                        name='firstName'
                        rules={[{ required: true }, {
                            validator(rule, value) {
                                if ((/[a-zA-Z]/).test(value)) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject(new Error('Should be combination alphabets!'));
                                }
                            }
                        }]}>
                        <Input placeholder="Please provide your first name" />
                    </Form.Item>
                    <Form.Item
                        label={<h2>Last Name</h2>}
                        name='lastName'
                        rules={[{ required: true }, {
                            validator(rule, value) {
                                if ((/[a-zA-Z]/).test(value)) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject(new Error('Should be combination alphabets!'));
                                }
                            }
                        }]}>
                        <Input placeholder="Please provide your last name" />
                    </Form.Item>
                    <Form.Item
                        label={<h2>Email ID</h2>}
                        name='emailId'
                        rules={[{ type: 'email', required: true }]}>
                        <Input placeholder="Please provide your last name" />
                    </Form.Item>
                    <Form.Item
                        label={<h2>Mobile number</h2>}
                        name='mobile'
                        rules={[{ required: true }, {
                            validator(rule, value) {
                                if ((/[0-9]/).test(value)) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject(new Error('Should be combination Numbers!'));
                                }
                            }
                        }]}>
                        <Input
                            style={{ width: '40%' }}
                            placeholder='Mobile Number'
                        />
                    </Form.Item>
                    <Form.Item
                        label={<h2>Donation Amount</h2>}
                        name='amount'
                        rules={[{ required: true }, {
                            validator(rule, value) {
                                if ((/[0-9]/).test(value)) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject(new Error('Should be combination Numbers!'));
                                }
                            }
                        }]}>
                        <Input placeholder="Please provide the donation amount" />
                    </Form.Item>
                    <Form.Item
                        label={<h2>Card Number</h2>}
                        name='cardNo'
                        rules={[{ required: true }, {
                            validator(rule, value) {
                                if ((/[0-9]/).test(value)) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject(new Error('Should be combination Numbers!'));
                                }
                            }
                        }]}>
                        <Input placeholder='Provide your card number' />
                    </Form.Item>
                    <Form.Item
                        name='dates'>
                        <InputNumber placeholder='MM' style={{ width: '60px', marginRight: '10px' }} />
                        <Input placeholder='YEAR' style={{ width: '80px' }} />
                    </Form.Item>
                    <Form.Item
                        name='cvv'
                        rules={[{ required: true }, {
                            validator(rule, value) {
                                if ((/[0-9]/).test(value)) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject(new Error('Should be combination Numbers!'));
                                }
                            }
                        }]}>
                        <Input placeholder='CVV' style={{ width: '60px' }} />
                    </Form.Item>
                    <Form.Item
                        label={<h2>Do you have any comments regarding your donation?</h2>}
                        name='feedback'>
                        <Input.TextArea placeholder="Please provide the donation amount" />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
                {successful ? <h1>Thank You!!</h1> : <h1></h1>}
            </Card>
        </div>
    );
}

export default DonatePage;