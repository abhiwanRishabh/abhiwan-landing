/* eslint-disable @next/next/no-img-element */
// app/blog/[slug]/page.jsx

import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { BASE_URL } from "@/lib/base_url";

async function getBlogData(slug) {
  const res = await fetch(`${BASE_URL}/getBlog/${slug}`, {
    cache: "no-store", // or "force-cache" for static
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }
  const data = await res.json();
  console.log("data", data);
  return data.Response;
}

export async function generateMetadata({ params }) {
  const { blog } = await getBlogData(params.slug);
  console.log("params", blog);

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

let phoneNumber = "+12364121644";
const whatsappURL = `https://wa.me/${phoneNumber}`;

export default async function BlogPost({ params }) {
  const { blog, relatedBlogs } = await getBlogData(params.slug);

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

      <div className="min-h-screen bg-gradient-to-r from-purple-800 to-purple-900">
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
                className="w-full h-full object-contain"
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

                <div className="flex items-center gap-2">
                  <a href={whatsappURL} target="_blank">
                    <button className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white px-6 py-3 rounded-lg transition-colors font-medium">
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </header>

            <div className="prose prose-lg prose-invert max-w-none text-white">
              <div
                className="blog-preview"
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

          <div className="max-w-6xl m-auto py-3">
            {relatedBlogs?.length > 0 && (
              <h2 className="py-3 text-white text-2xl">Related Blogs</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {relatedBlogs?.map((post) => (
                <article key={post._id} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-[350px] overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.thumbnailImage || "/placeholder.svg"}
                        alt={post.blogName}
                        className="w-full h-[300px] object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="px-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-purple-300">
                          {/* {post.readTime} */}
                        </span>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors group/link"
                        >
                          Read More
                          <ArrowRight
                            size={16}
                            className="group-hover/link:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
