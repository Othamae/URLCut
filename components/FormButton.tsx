import { Button } from './ui/button'

const FormButton = ({ text }: { text: string }) => {
	return (
		<Button type="submit" size="lg" className="bg-pink-600 text-white hover:bg-pink-600/75 transition text-xl">
			{text}
		</Button>
	)
}

export default FormButton
