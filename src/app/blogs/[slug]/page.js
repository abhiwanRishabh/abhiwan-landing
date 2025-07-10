/* eslint-disable @next/next/no-img-element */
// app/blog/[slug]/page.jsx

import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { BASE_URL } from "@/lib/base_url";

async function getBlogData(slug) {
  const res = await fetch(`${BASE_URL}/getBlog/${slug}`, {
    cache: "no-store", // or "force-cache" for static
  });
  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }
  const data = await res.json();
  return data.Response;
}

export async function generateMetadata({ params }) {
  const blog = await getBlogData(params.slug);

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.metaKeywords,
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.featuredImage],
      type: "article",
    },
    robots: blog.robotDirectives,
  };
}

export default async function BlogPost({ params }) {
  const blog = await getBlogData(params.slug);

  const published = moment(blog.createdAt).format("YYYY-MM-DD");
  const updated = moment(blog.updatedAt).format("YYYY-MM-DD");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.blogName,
    image: blog.featuredImage,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "The Kundli Pro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.thekundlipro.com/assets/main_logo-DX-yx5ib.png",
      },
    },
    datePublished: published,
    dateModified: updated,
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900">
        <header className="relative z-10 px-6 py-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image width={150} height={150} src="/abhiwan.png" alt="logo" />
            </Link>
          </div>
        </header>

        <div className="px-6 py-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Blogs
            </Link>
          </div>
        </div>

        <article className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8 rounded-2xl overflow-hidden">
              <img
                src={blog.featuredImage || "/placeholder.svg"}
                alt={blog.blogName}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-purple-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
              </div>
            </div>

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {blog.blogName}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/70 mb-6">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg prose-invert max-w-none text-white">
              <div
                dangerouslySetInnerHTML={{ __html: blog.blogContent }}
              />
            </div>

            <footer className="mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center justify-between">
                <p className="text-white/60">
                  Written by{" "}
                  <span className="text-purple-300 font-medium">
                    {blog.author}
                  </span>
                </p>
                <Link
                  href="/blogs"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Read More Articles
                </Link>
              </div>
            </footer>
          </div>
        </article>

        <footer className="px-6 py-12 border-t border-white/10 mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60">
               © 2025 Abhiwan Technology. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
