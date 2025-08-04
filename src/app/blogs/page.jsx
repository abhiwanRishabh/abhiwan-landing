"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import { BASE_URL } from "@/lib/base_url";
import axios from "axios";
import moment from "moment";



export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs`);
        const result = response?.data;
        setBlogs(result?.Response?.blogs || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllBlogs();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Pagination Logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-purple-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <Image width={150} height={150} src="/abhiwan.png" alt="logo" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {loading && blogs?.length === 0 && (
        <p className="text-md text-white mb-6 text-center">Fetching Blogs...</p>
      )}

      {!loading && blogs?.length === 0 && (
        <p className="text-md text-white mb-6 text-center">No blogs posted yet</p>
      )}

      {!loading && blogs?.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover insights, tutorials, and the latest trends in technology,
              design, and innovation.
            </p>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedBlogs.map((post) => (
              <article key={post._id} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-[500px] overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
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

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{moment(post.createdAt).fromNow()}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {post.blogName}
                    </h2>

                    <p className="text-white/70 mb-4 line-clamp-3">{post.description}</p>

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

          {/* Pagination UI */}
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-purple-500 text-white border-purple-600"
                      : "bg-white/10 text-white border-white/20 hover:bg-purple-600/20"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">© 2025 Abhiwan Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
