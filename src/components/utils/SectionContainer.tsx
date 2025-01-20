'use client';

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-3/4 h-full lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16">
      {children}
    </section>
  );
};

export default SectionContainer;
