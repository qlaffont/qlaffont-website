export const PageTitle = ({ title, description }: { title: string; description: string }) => (
  <h1 className="my-12">
    <span className="block text-center text-base font-semibold uppercase text-sky-500">{title}</span>
    <span className="mx-auto mt-2 block max-w-2xl text-center text-4xl font-bold leading-10 sm:text-5xl">
      {description}
    </span>
  </h1>
);
