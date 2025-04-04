import Container from "@/utils/Container";

export default function AboutHero() {
  return (
    <Container>
      <div className="py-24 relative bg-white dark:bg-gray-900">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            {/* Изображения */}
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="About Us"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="About Us"
              />
            </div>

            {/* Текстовая часть */}
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-900 text-4xl font-bold leading-normal lg:text-start text-center dark:text-white">
                    Empowering Each Other to Succeed
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center dark:text-gray-400">
                    Every project we've undertaken has been a collaborative
                    effort, where every person involved has left their mark.
                    Together, we've not only constructed buildings but also
                    built enduring connections that define our success story.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-900 text-4xl font-bold leading-normal dark:text-white">
                      33+
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed dark:text-gray-400">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold leading-normal dark:text-white">
                      125+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed dark:text-gray-400">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold leading-normal dark:text-white">
                      52+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed dark:text-gray-400">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-md justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Read More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
