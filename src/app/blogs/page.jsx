"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import { BASE_URL } from "@/lib/base_url";
import axios from "axios";
import moment from "moment";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Virtual Reality in Web Development",
    excerpt:
      "Exploring how VR technologies are revolutionizing the way we build and interact with web applications.",
    author: "Abhinav Tech",
    date: "2024-01-15",
    readTime: "5 min read",
    image:
      "https://imgs.search.brave.com/ilNghX-XjjSnFNSgtKGANNsl2E8shsSMzpW7N8DxWWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudG9wdGFsLmlv/L2ltYWdlcz91cmw9/aHR0cHM6Ly9icy11/cGxvYWRzLnRvcHRh/bC5pby9ibGFja2Zp/c2gtdXBsb2Fkcy9j/b21wb25lbnRzL2Js/b2dfcG9zdF9wYWdl/LzQwODg0NzkvY292/ZXJfaW1hZ2UvcmVn/dWxhcl8xNzA4eDY4/My8xMjgwX3hfNjAw/X19oZWFkZXJfLTcz/ODAyMmY1YjRiZjk1/YzliYWNiNzdkMzBk/OTJiNTkxLmpwZw",
    category: "Technology",
  },
  {
    id: 2,
    title: "Building Immersive User Experiences",
    excerpt:
      "Learn the principles of creating engaging and immersive digital experiences that captivate users.",
    author: "Abhinav Tech",
    date: "2024-01-10",
    readTime: "7 min read",
    image:
      "https://imgs.search.brave.com/YmgfMrQROfQe6Dqo9cSPMg5KebpFhSX6DUXkLYMInXA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZjVkMDZmNDU2MmQy/MzM4OGQwMTFlNzIv/NjRkMWIwODA3OTg0/OTliN2ExMjdjNTkx/X1RhbGVzcGluJTIw/SW1tZXJzaXZlJTIw/RXhwZXJpZW5jZSUy/MEV4YW1wbGVzJTIw/SW1hZ2UlMjA0Lmpw/Zw",
    category: "Design",
  },
  {
    id: 3,
    title: "AI and Machine Learning in Modern Applications",
    excerpt:
      "Discover how artificial intelligence is transforming the landscape of modern web applications.",
    author: "Abhinav Tech",
    date: "2024-01-05",
    readTime: "6 min read",
    image:
      "https://imgs.search.brave.com/sq4BlXRZqzPv90ZyceYvXWl7mpCOdIB9fU5pn8sgycg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NTBhYmZiZDViZjRk/MTliY2JlMmJmODUv/NjZkZGI1YjIxMzMy/ZGFiZjA2MTE0MjAz/X1RvcCUyMEFJJTIw/VHJlbmRzJTIwSG93/JTIwRW50ZXJwcmlz/ZXMlMjBDYW4lMjBT/dGF5JTIwQWhlYWQu/anBn",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "The Metaverse: Beyond Virtual Reality",
    excerpt:
      "Understanding the metaverse ecosystem and its potential impact on digital interactions.",
    author: "Abhinav Tech",
    date: "2023-12-28",
    readTime: "8 min read",
    image:
      "https://imgs.search.brave.com/HEz2x_tuV7uuDM0t1HzfTfgeIYFmUL32GdKBmMo1ri4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vcGFj/ZS5hZ2VuY3kvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDcv/UG9rZW1vbi1Hby1h/bmQtQVItMTAyNHg2/ODMuanBn",
    category: "Metaverse",
  },
  {
    id: 5,
    title: "Blockchain Technology and Web3 Development",
    excerpt:
      "A comprehensive guide to understanding blockchain integration in modern web development.",
    author: "Abhinav Tech",
    date: "2023-12-20",
    readTime: "10 min read",
    image:
      "https://imgs.search.brave.com/eR0JwLbYFwWuyoFNqnj213vSju3Qs8TipPnevTwvzlE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzNq/czJiL3N0eWxlcy9i/YW5uZXJCYWNrZ3Jv/dW5kSW1hZ2Vfa2Y5/M3V4M2lnN3E4MS5q/cGc_Zm9ybWF0PXBq/cGcmcz0wYmZlZmNl/MTczOTFjZmMyNGEw/NGRkODljMDI3Yzc1/ZDM4ZWE5NTE5",
    category: "Blockchain",
  },
  {
    id: 6,
    title: "Responsive Design in the Age of Multiple Devices",
    excerpt:
      "Best practices for creating responsive designs that work seamlessly across all devices.",
    author: "Abhinav Tech",
    date: "2023-12-15",
    readTime: "4 min read",
    image:
      "https://imgs.search.brave.com/BpOzJvFYgQCKAL0hqsgnWThveskll0H-cuidKvUk8LY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMy8wNS9yZXNw/b25zaXZlLWc2MTlk/MzllNTlfMTI4MC5w/bmc",
    category: "Design",
  },
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs`);
        // const response = await axios.get(
        //   `http://localhost:3013/api/admin/blogs`
        // );
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

  console.log("blogs", blogs);

  return (
    <div className="min-h-screen from-indigo-900 via-indigo-800 to-indigo-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image width={150} height={150} src="/abhiwan.png" alt="logo" />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors"
              >
                Home
              </Link>
              {/* <Link href="/blogs" className="text-white font-medium">
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
              </Link> */}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {blogs?.length === 0 && (
        <p className="text-md text-white mb-6 text-center">
          No blogs posted yet
        </p>
      )}

      {blogs?.length > 0 && (
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
            {blogs.length > 0 &&
              blogs.map((post) => (
                <article key={post._id} className="group ">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-[400px] overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.thumbnailImage || "/placeholder.svg"}
                        alt={post.blogName}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
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

                      <p className="text-white/70 mb-4 line-clamp-3">
                        {post.description}
                      </p>

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
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Abhiwan Technology. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
