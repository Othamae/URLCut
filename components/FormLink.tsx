'use client'
import { createShortURL } from '@/actions/actions'
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import FormButton from './FormButton'
import InputError from './InputError'
import { CardContent, CardFooter } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'

const FormLink = () => {
	const [shortURL, setShortURL] = useState('')
	const [error, setError] = useState('')
	const onSubmit = async (formData: FormData) => {
		const longURL = formData.get('longURL') as string
		if (!longURL) {
			setError('Please insert a long URL')
			return
		}
		const link = await createShortURL(longURL)
		setShortURL(link)
		setError('')
	}
	return (
		<form action={onSubmit}>
			<CardContent>
				<div className="grid w-full items-center gap-8">
					<div className="flex flex-col space-y-2">
						<Label htmlFor="longURL" className="text-base">
							Long URL
						</Label>
						<Input name="longURL" id="longURL" placeholder="Insert a long URL" />
						{error && <InputError id='longURL' error={error} />}
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-start gap-4 mt-4 md:flex-row flex-col">
				<FormButton text="Short it!" />

				{shortURL && (
					<Link
						href={shortURL}
						target="_blank"
						className="flex h-10 w-full px-1 rounded-md border border-input bg-background md:px-3 py-2 md:text-xl ring-offset-background items-center hover:text-blue-600"
					>
						<LinkIcon className="h-4 w-4 mr-2 md:block hidden " />
						{shortURL}
					</Link>
				)}
			</CardFooter>
		</form>
	)
}

export default FormLink
