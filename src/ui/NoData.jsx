
function NoData({ error }) {
    return (
        <div className="grid h-screen px-4 bg-white place-content-center dark:bg-gray-900">
            <h1 className="tracking-widest text-gray-500 uppercase dark:text-gray-400">
                Error | No {error} could be found.
            </h1>
        </div>
    )
}

export default NoData
