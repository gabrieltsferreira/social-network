
export default function Home() {


  function navigate() {
    window.location.href = '/login';
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="space-y-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Welcome to the Social Network!
        </h1>
      </div>
      
      <button type="button" onClick={() => navigate()} className="p2 text-white bg-red-500 rounded h-10">
            Login and Registration Here!
      </button>
    </main>
  )
};