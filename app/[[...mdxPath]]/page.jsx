import { buildDynamicMDX } from 'nextra/content';

export default function Page(props) {
  return buildDynamicMDX(props);
}

export { generateStaticParams, generateMetadata } from 'nextra/content';
