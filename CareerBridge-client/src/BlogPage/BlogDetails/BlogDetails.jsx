import React from "react";

const BlogDetails = () => {
  return (
    <div>
      <section className="bg-secondary dark:bg-accent">
        <div className="relative flex justify-center items-center flex-col  pt-16 pb-10 text-accent dark:text-secondary">
          <a href="/blog">
            <div className="duration-500 transform  hover:scale-125 transition-all  absolute bottom-5 left-[22%] text-accent dark:text-secondary ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fontSize: "1.8em" }}
              >
                <path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"></path>
              </svg>
            </div>
          </a>
          <h3 className="text-3xl font-semibold mb-7">
            5 Tips For A Successful Job Interview
          </h3>
          <div className="flex justify-center items-center gap-4">
            <div className="w-10 h-10 border-[0.08rem] border-accent dark:border-secondary rounded-full overflow-hidden dark:bg-secondary">
              <img
                src="/static/media/rayhan-al-kavey.be11f2e1e395d9d92c14.png"
                alt=""
                className=" rounded-full object-cover w-full h-full hover:scale-[1.1] duration-500"
              />
            </div>
            <div>Rayhan Al Kavey</div>
            <p className="text-5xl font-bold"> ·</p>
            <div>March 25, 2023</div>
          </div>
        </div>
        <div className="pb-24 text-accent dark:text-secondary bg-base-100 dark:bg-accent ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col justify-center items-center w-full gap-4 ">
              <div className="my-5">
                {
                    
                }
                <img
                  className="rounded-lg"
                  src="https://i.ibb.co/4ttvcdJ/interview.jpg"
                  alt=""
                />
              </div>
              <div className="mb-8">
                <p className="text-md">
                  If you want to ace your next job interview, make sure to
                  research the company beforehand, practice common interview
                  questions, and dress professionally. During the interview,
                  make eye contact, listen carefully to the interviewer, and
                  showcase your skills and accomplishments. Remember to follow
                  up with a thank-you note afterwards to leave a lasting
                  impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
