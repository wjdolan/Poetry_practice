import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
};

function getPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "app/insights/posts");
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data } = matter(raw);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title as string,
        summary: data.summary as string,
        date: data.date as string,
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function Insights() {
  const posts = getPosts();

  return (
    <div className="py-10 space-y-6">
      <h1 className="text-4xl font-bold">Insights and research</h1>
      <p className="text-muted max-w-2xl">
        Brief market updates, scenarios, and technical notes from our team.
      </p>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/insights/${post.slug}`}>
            <div className="p-5 border border-slate-200 rounded-lg bg-white hover:border-brand-500 transition">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-muted">{post.summary}</p>
              <span className="text-sm text-slate-500">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
