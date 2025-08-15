import { importPage } from "nextra/pages";

export default async function Page({ params, searchParams }) {
  const { mdxPath } = await params;

  try {
    const { default: MDXContent } = await importPage(mdxPath);

    return (
      <MDXContent params={await params} searchParams={await searchParams} />
    );
  } catch (error) {
    return <div>Page not found</div>;
  }
}
