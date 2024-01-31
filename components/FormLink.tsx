'use client'
import Form from './Form'
import UrlShorter from './UrlShorter'

const FormLink = () => {
	return (
		<Form label='Long URL' input='longURL' type='urlCut' >
			<UrlShorter />
		</Form>
	)
}

export default FormLink
