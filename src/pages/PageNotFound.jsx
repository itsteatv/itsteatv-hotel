import { useNavigate } from 'react-router-dom';

function PageNotFound() {

  const navigate = useNavigate();

  const handleGoBackToDashboard = () => {
    navigate('/');
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <main>
      <div className="bg-red-700 mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-white font-semibold">
            404 Error
          </h3>
          <p className="text-black text-4xl font-extrabold sm:text-5xl">
            Page not found
          </p>
          <p className="text-black">
            Sorry, the page you are looking for could not be found or has been removed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                handleGoBackToDashboard();
                reloadPage();
              }}
              className="block py-2 px-4 text-white font-medium bg-black duration-150 hover:bg-gray-50 hover:text-black active:bg-gray-100 active:text-black rounded-lg"
            >
              Go back
            </button>
            <a href="https://github.com/itsteatv" target="_blank" rel="noreferrer" className="block py-2 px-4 text-black hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg dark:text-white">
              Contact support
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PageNotFound
