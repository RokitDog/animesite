import Link from 'next/link';

async function notFound(){

  return (
    <div className='w-full my-[64px] flex justify-center items-center flex-col'>
        <h1 className='font-medium text-4xl'>Episode Not Found</h1>
        <Link href='/' className='mt-[32px] inline-flex items-center py-2 px-4 mr-3 text-lg font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              Home
        </Link>
    </div>
  )
}

export default notFound