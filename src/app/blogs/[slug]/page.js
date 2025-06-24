/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BASE_URL } from "@/lib/base_url";
import moment from "moment";
import Head from "next/head";

// Mock blog data - in a real app, this would come from a database or CMS

const BlogSEO = ({ blog }) => {
  const formatPublishedDate = moment(blog?.createdAt).format("YYYY-MM-DD");
  const formatModifiedDate = moment(blog?.updatedAt).format("YYYY-MM-DD");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog?.blogName || "",
    image: blog?.featuredImage || "",
    author: {
      "@type": "Person",
      name: blog?.author || "",
    },
    publisher: {
      "@type": "Organization",
      name: "The Kundli Pro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.thekundlipro.com/assets/main_logo-DX-yx5ib.png",
      },
    },
    datePublished: formatPublishedDate,
    dateModified: formatModifiedDate,
  };

  const directives = blog?.robotDirectives?.split(" ")?.join(",");

  return (
    <Head>
      <title>{blog?.metaTitle}</title>
      <meta name="description" content={blog?.metaDescription} />
      <meta name="keywords" content={blog?.metaKeywords} />
      <meta name="robots" content={directives} />
      <meta property="og:title" content={blog?.metaTitle} />
      <meta property="og:description" content={blog?.metaDescription} />
      <meta property="og:image" content={blog?.featuredImage} />
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={formatPublishedDate} />
      <meta property="article:modified_time" content={formatModifiedDate} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </Head>
  );
};

export default function BlogPost({ params }) {
  // const { id } = useParams();
  const [post, setSingleBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);

  useEffect(() => {
    params.then((val) => {
      console.log("first", val);
      setId(val.slug);
    });
  }, [params]);

  // console.log("isEdited", isEdited);
  useEffect(() => {
    const loadSignleBlog = async (id) => {
      try {
        try {
          const response = await axios.get(`${BASE_URL}/getBlog/${id}`);
          const result = response.data;
          setSingleBlog(result?.Response || []); // depends on your API shape (e.g. response.data.blogs)
        } catch (error) {
          console.error("Failed to fetch blogs:", error);
          throw error?.response?.data || error;
        }
        // setSingleBlog(result.Response || []); // depends on your API response shape
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      loadSignleBlog(id);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image width={150} height={150} src="/abhiwan.png" alt="logo" />
            </Link>
            {/* <nav className="hidden md:flex space-x-8 hidden">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link href="/blogs" className="text-white font-medium">
                Blogs
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav> */}
          </div>
        </div>
      </header>

      {/* Back Button */}
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

      {!post && !loading && <p>Blog Content Not Found</p>}

      {post && <BlogSEO blog={post} />}

      {/* Article */}
      {post && (
        <article className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="relative mb-8 rounded-2xl overflow-hidden">
              <img
                src={post.featuredImage || "/placeholder.svg"}
                alt={post.blogName}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-purple-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.blogName}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/70 mb-6">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <Clock size={18} /> */}
                  {/* <span>{post.readTime}</span> */}
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* <button className="flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg transition-colors">
                <Share2 size={18} />
                Share
              </button> */}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none text-white">
              <div
                className="text-white"
                dangerouslySetInnerHTML={{ __html: post.blogContent }}
              />
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="text-white/60">
                  <p>
                    Written by{" "}
                    <span className="text-purple-300 font-medium">
                      {post.author}
                    </span>
                  </p>
                </div>
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
      )}

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Abhinav Technology. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
