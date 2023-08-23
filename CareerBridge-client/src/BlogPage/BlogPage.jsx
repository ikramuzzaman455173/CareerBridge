import React from "react";

const BlogPage = () => {
  return (
    <div>
      <section class="bg-secondary dark:bg-accent py-12  border-b-[.5px]  dark:border-gray-600">
        <div class="flex justify-center items-center">
          <div class="text-center">
            <h1 class="uppercase text-4xl font-bold text-accent dark:text-secondary mb-4">
              Blogs
            </h1>
          </div>
        </div>
      </section>
      <section class="dark:bg-accent py-20 ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href="/">
            <div class="duration-500 transform  hover:scale-125 transition-all  absolute -top-32 left-8 text-accent dark:text-secondary ">
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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              data-aos="flip-left"
              class="bg-secondary rounded-lg p-5 transition-all aos-init aos-animate"
            >
              <div class="mb-5 overflow-hidden  rounded-lg   ">
                <img
                  class="rounded-lg object-cover hover:scale-[1.1] duration-500"
                  src="https://i.ibb.co/4ttvcdJ/interview.jpg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-8">
                <div>March 25, 2023</div>
                <div class="flex flex-col   gap-8">
                  <div>
                    <h3 class="text-xl font-semibold mb-5">
                      5 Tips For A Successful Job Interview
                    </h3>
                    <p class="text-md">
                      If you want to ace your next job interview, make sure to
                      research the company beforehand, practice ....
                    </p>
                  </div>
                  <div>
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
              </div>
            </div>
            <div
              data-aos="flip-left"
              class="bg-secondary rounded-lg p-5 transition-all aos-init aos-animate"
            >
              <div class="mb-5 overflow-hidden  rounded-lg   ">
                <img
                  class="rounded-lg object-cover hover:scale-[1.1] duration-500"
                  src="https://i.ibb.co/wrpR8RD/networking.jpg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-8">
                <div>March 23, 2023</div>
                <div class="flex flex-col   gap-8">
                  <div>
                    <h3 class="text-xl font-semibold mb-5">
                      Networking Tips For Job Seekers
                    </h3>
                    <p class="text-md">
                      Networking is a powerful tool for job seekers. Attend
                      industry events and join professional groups ....
                    </p>
                  </div>
                  <div>
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
              </div>
            </div>
            <div
              data-aos="flip-left"
              class="bg-secondary rounded-lg p-5 transition-all aos-init aos-animate"
            >
              <div class="mb-5 overflow-hidden  rounded-lg   ">
                <img
                  class="rounded-lg object-cover hover:scale-[1.1] duration-500"
                  src="https://i.ibb.co/84VB2f7/remote-job.jpg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-8">
                <div>March 21, 2023</div>
                <div class="flex flex-col   gap-8">
                  <div>
                    <h3 class="text-xl font-semibold mb-5">
                      Tips For Succeeding In A Remote Job
                    </h3>
                    <p class="text-md">
                      Working remotely can be a great way to achieve work-life
                      balance, but it requires discipline and go....
                    </p>
                  </div>
                  <div>
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
              </div>
            </div>
            <div
              data-aos="flip-left"
              class="bg-secondary rounded-lg p-5 transition-all aos-init"
            >
              <div class="mb-5 overflow-hidden  rounded-lg   ">
                <img
                  class="rounded-lg object-cover hover:scale-[1.1] duration-500"
                  src="https://i.ibb.co/7JwKWM5/career.jpg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-8">
                <div>March 20, 2023</div>
                <div class="flex flex-col   gap-8">
                  <div>
                    <h3 class="text-xl font-semibold mb-5">
                      How To Choose A Career That Fits
                    </h3>
                    <p class="text-md">
                      Choosing a career is a big decision, so it's important to
                      take the time to explore your options and....
                    </p>
                  </div>
                  <div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
