import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'
import React from 'react'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'

const LoginPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Hisobga kirish</TabsTrigger>
                    <TabsTrigger value="register">Ro‘yxatdan o‘tish</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <LoginForm />
                </TabsContent>
                <TabsContent value='register'>
                    <RegisterForm />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default LoginPage
