'use client'
import { useForm } from '@/hooks/useForm'
import React from 'react'
import FormButton from './FormButton'
import InputError from './InputError'
import { CardContent, CardFooter } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'

const Form = ({ label, input, children, placeholder = "Insert a long URL", type }: {
    label: string,
    input: string,
    children: React.ReactNode,
    placeholder?: string
    type: 'urlCut' | 'QR'
}) => {
    const { error, onSubmit, urlCut: shortURL } = useForm({ type })
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement<{ shortURL: string }>(child)) {
            return React.cloneElement(child, ({ shortURL: shortURL }))
        }
        return child
    })
    return (
        <form action={onSubmit}>
            <CardContent>
                <div className="grid w-full items-center gap-8">
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="longURL" className="text-base">
                            {label}
                        </Label>
                        <Input name={input} id={input} placeholder={placeholder} />
                        {error && <InputError id={input} error={error} />}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-start gap-4 mt-4 md:flex-row flex-col">
                <FormButton text="Short it!" />
                {childrenWithProps}
            </CardFooter>
        </form>
    )
}

export default Form