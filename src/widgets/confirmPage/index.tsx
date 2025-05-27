"use client"

import { otpSchema } from '@/shared/hooks/formik';
import { usePhoneNumber } from '@/shared/hooks/phoneStore';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { Form, FormField } from '@/shared/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp';
import { zodResolver } from '@hookform/resolvers/zod';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ConfirmPage = () => {
    const { phone } = usePhoneNumber()
    const form = useForm<z.infer<typeof otpSchema>>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otp: '',
            phoneNumber: '',
        },
    });

    useEffect(() => {
        form.setValue("phoneNumber", phone)
    }, [phone])

    function onSubmit(values: z.infer<typeof otpSchema>) {
        const payload = {
            phoneNumber: values.phoneNumber,
            otp: values.otp
        }
        console.log(payload, "otp");
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Tasdiqlash kodini kiriting</CardTitle>
                    <CardDescription>Telefon nomeringizga kelgan tasdiqlash kodini kiriting</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name='otp'
                                render={({ field }) => (
                                    <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} {...field}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                )}
                            />
                            <Button type="submit" className="w-full bg-gray-300/40 shadow" variant="ghost">
                                Tasdiqlash
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default ConfirmPage
