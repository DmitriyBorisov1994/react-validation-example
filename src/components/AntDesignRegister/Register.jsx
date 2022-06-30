import React, { useState, useEffect, useRef } from "react";
import { Space, Typography, Button, Form, Input } from "antd";
import { PWD_REGEX, USER_REGEX } from "../../utils/regexPatterns";

const { Paragraph, Title } = Typography;

const Register = () => {

  const userRef = useRef();

  const [user, setUser] = useState("");

  const [pwd, setPwd] = useState("");

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const submitHandler = (values) => {
    const { username, password } = values;
    setUser(username)
    setPwd(password)
    console.log(pwd)
    setSuccess(true)
  };

  return (
    <Space direction="vertical">
      <Title>Регистрация</Title>
      {success ? (
        <Paragraph>
          Регистрация {user} прошла успешно.
        </Paragraph>
      ) : (
        <>
          <Form onFinish={(values) => submitHandler(values)}>
            <Form.Item
              label="Ваше имя"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Введите имя!",
                },
                {
                  pattern: USER_REGEX,
                  message:
                    "Имя должно начинаться с буквы. В имени допускаются буквы, цифры, тире и нижнее подчеркивание. От 4х до 24х символов.",
                },
              ]}>
              <Input
                autoComplete="off"
                ref={userRef}
              />
            </Form.Item>
            <Form.Item
              label="Пароль"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Введите пароль!",
                },
                {
                  pattern: PWD_REGEX,
                  message:
                    "Пароль должен содержать покрайней мере одну строчную букву, одну заглавную букву, одну цифру и один из символов: !@#$%. От 8ми до 24х символов.",
                },
              ]}>
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Подтвердите пароль"
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Подтвердите пароль!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Пароли не совпадают!"));
                  },
                }),
              ]}>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </Space>
  );
};

export default Register;
