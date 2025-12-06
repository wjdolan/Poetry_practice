import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Chart from "../../components/chart";

type Params = {
  slug: string;
};

const postsDir = path.join(process.cwd(), "app/insights/posts");

export async function generateStaticParams(): Promise<Params[]> {
  if (!fs.existsSync(postsDir)) {
    return [];
  }

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export default async function InsightPage({ params }: { params: Params }) {
  const filePath = path.join(postsDir, `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);

  return (
    <article className="prose lg:prose-lg prose-slate max-w-none bg-white p-6 rounded-xl border border-slate-200">
      <MDXRemote source={content} components={{ Chart }} />
    </article>
  );
}
