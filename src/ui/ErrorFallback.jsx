
function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="text-center flex items-center justify-center flex-col h-screen px-4 bg-white dark:bg-gray-900">
            <h1 className="text-2xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
                Something went wrong 💀
            </h1>
            <p className="mt-4 font-Inter tracking-tight dark:text-gray-600 text-gray-900">
                {error.message}
            </p>
            <button
                onClick={resetErrorBoundary}
                className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
            >
                Try again
            </button>
        </div>
    )
}

export default ErrorFallback
