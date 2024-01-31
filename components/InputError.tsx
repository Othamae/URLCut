import { XCircle } from 'lucide-react'

const InputError = ({ id, error }: { id: string, error: string }) => {
    return (
        <div
            id={`${id}-error`}
            aria-live="polite"
            className="mt-2 text-sm text-rose-500"
        >
            <p className="flex items-center font-medium p-2 border border-rose-500 bg-rose-500/10 rounded-sm">
                <XCircle className="h-4 w-4 mr-2" />
                {error}
            </p>

        </div>
    )
}

export default InputError