import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

const CardComponent = ({
	children,
	title,
	description,
}: {
	children: React.ReactNode
	title: string
	description?: string
}) => {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle className="text-3xl ">{title}</CardTitle>
				<CardDescription className="text-base">{description}</CardDescription>
			</CardHeader>
			{children}
		</Card>
	)
}

export default CardComponent
