

const Card = ({blog}) => {
  return (
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={blog.image}
            alt='blog'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
            
          </div>
        </div>
        <div className='font-semibold text-lg'>{blog.date}</div>
        <div className='font-bold'>
          {blog.title}
        </div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-medium'>{blog.details}</div>
          
        </div>
        <br />
        <a
                      class=" duration-500 text-primary text-xl font-semibold flex gap-2 items-center hover:translate-x-1"
                      href="/blog-details"
                    >
                      <span class="hover:translate-x-0 ">Read More</span>
                      <div class="transform-gpu transition-transform mt-[2px]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                        </svg>
                      </div>
                    </a>
      </div>
    </div>
  )
}

export default Card