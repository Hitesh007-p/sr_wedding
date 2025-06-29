"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Star, Mail, Phone, Instagram, Facebook, Twitter, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Define a type for rating feedback
interface RatingFeedback {
  id: number;
  rating: number;
  comment: string;
  name: string;
}

// Define a type for video items
interface VideoItem {
  embedUrl: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

export default function PhotographyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [ratings, setRatings] = useState<RatingFeedback[]>([])
  // const [averageRating, setAverageRating] = useState(4.8)
  const [newRating, setNewRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [activeSection, setActiveSection] = useState("home")

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "services", "shoots", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const submitRating = () => {
    if (newRating > 0 && feedback.trim()) {
      const newFeedback = {
        id: Date.now(),
        rating: newRating,
        comment: feedback,
        name: "Anonymous Client",
      }
      setRatings([...ratings, newFeedback])



      setNewRating(0)
      setFeedback("")
    }
  }

  // const portfolioCategories = [
  //   {
  //     title: "Wedding",
  //     subtitle: "Capturing your perfect day",
  //     images: [
  //       "/placeholder.svg?height=600&width=400",
  //       "/placeholder.svg?height=400&width=600",
  //       "/placeholder.svg?height=500&width=500",
  //       "/placeholder.svg?height=700&width=500",
  //     ],
  //   },
  //   {
  //     title: "Prewedding",
  //     subtitle: "Love stories before the big day",
  //     images: [
  //       "/placeholder.svg?height=500&width=400",
  //       "/placeholder.svg?height=600&width=500",
  //       "/placeholder.svg?height=400&width=600",
  //       "/placeholder.svg?height=550&width=400",
  //     ],
  //   },
  //   {
  //     title: "Maternity",
  //     subtitle: "Celebrating new beginnings",
  //     images: [
  //       "/placeholder.svg?height=600&width=400",
  //       "/placeholder.svg?height=500&width=500",
  //       "/placeholder.svg?height=400&width=600",
  //       "/placeholder.svg?height=650&width=450",
  //     ],
  //   },
  // ]

  const services = [
    {
      name: "Wedding Photography",
      price: "Starting at $2,500",
      description: "Complete wedding day coverage with artistic storytelling",
      features: ["8-10 hours coverage", "500+ edited photos", "Online gallery", "Engagement session included"],
    },
    {
      name: "Portrait Sessions",
      price: "Starting at $450",
      description: "Individual, couple, and family portrait sessions",
      features: ["2 hour session", "50+ edited photos", "Multiple locations", "Wardrobe consultation"],
    },
    {
      name: "Maternity Photography",
      price: "Starting at $350",
      description: "Beautiful maternity portraits celebrating your journey",
      features: ["1.5 hour session", "40+ edited photos", "Studio or outdoor", "Partner & family included"],
    },
  ]

  const testimonials = [
    {
      name: "Yash & Shree",
      text: "Charlotte captured our wedding day perfectly. Every emotion, every detail - it was like having a fairy tale documented.",
      rating: 5,
    },
    {
      name: "riya & bhavesh",
      text: "The maternity photos exceeded all expectations. Charlotte made me feel beautiful and confident throughout the entire session.",
      rating: 5,
    },
    {
      name: "jacky & Lisa",
      text: "Our engagement photos were absolutely stunning. Charlotte has an incredible eye for capturing authentic moments.",
      rating: 5,
    },
  ]

  // const blogPosts = [
  //   {
  //     title: "Planning Your Perfect Wedding Timeline",
  //     excerpt:
  //       "Essential tips for creating a photography timeline that captures every important moment of your special day.",
  //     image: "/placeholder.svg?height=300&width=400",
  //     date: "December 15, 2024",
  //     category: "Wedding Tips",
  //   },
  //   {
  //     title: "What to Wear for Your Engagement Session",
  //     excerpt:
  //       "Style guide and outfit ideas to help you look and feel your best during your engagement photography session.",
  //     image: "/placeholder.svg?height=300&width=400",
  //     date: "December 10, 2024",
  //     category: "Style Guide",
  //   },
  //   {
  //     title: "The Magic of Golden Hour Photography",
  //     excerpt: "Understanding natural light and how to make the most of those perfect golden hour moments.",
  //     image: "/placeholder.svg?height=300&width=400",
  //     date: "December 5, 2024",
  //     category: "Photography Tips",
  //   },
  // ]

  // Example videos array
  const videos: VideoItem[] = [
    {
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Yash & Shree Wedding Highlights",
      date: "June 1, 2025",
      category: "Wedding",
      description: "A beautiful wedding highlight film capturing the love and joy of Yash & Shree's special day.",
    },
    {
      embedUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      title: "Riya & Bhavesh Prewedding",
      date: "May 15, 2025",
      category: "Prewedding",
      description: "Romantic prewedding shoot for Riya & Bhavesh at the lakeside.",
    },
    {
      embedUrl: "https://www.youtube.com/embed/l482T0yNkeo",
      title: "Maternity Memories - Lisa",
      date: "April 20, 2025",
      category: "Maternity",
      description: "Celebrating new beginnings with Lisa's maternity shoot.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-center">
            <div className="hidden md:flex space-x-12">
              {[
                { id: "home", label: "HOME" },
                { id: "about", label: "ABOUT" },
                { id: "portfolio", label: "PORTFOLIO" },
                { id: "services", label: "SERVICES" },
                { id: "blog", label: "BLOG" },
                { id: "contact", label: "CONTACT" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm tracking-wider transition-colors ${activeSection === item.id
                    ? "text-gray-900 border-b border-gray-900 pb-1"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-6 pb-6 border-t pt-6"
            >
              {[
                { id: "home", label: "HOME" },
                { id: "about", label: "ABOUT" },
                { id: "portfolio", label: "PORTFOLIO" },
                { id: "services", label: "SERVICES" },
                { id: "blog", label: "BLOG" },
                { id: "contact", label: "CONTACT" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-sm tracking-wider text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Social Media Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/best3.jpg')`,
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <div className="w-16 h-px bg-white mx-auto mb-6"></div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest mb-8"
            style={{ fontFamily: "serif" }}
          >
            Cine_Bhimraj
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-12"
          >
            <div className="w-16 h-px bg-white mx-auto mb-4"></div>
            <p className="text-sm md:text-base tracking-widest font-light">SR_WEDDING PHOTOGRAPHY</p>
            <div className="w-16 h-px bg-white mx-auto mt-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-3 tracking-wider"
              onClick={() => scrollToSection("portfolio")}
            >
              VIEW PORTFOLIO
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="flex flex-col items-center">
            <div className="w-px h-12 bg-white mb-2"></div>
            <p className="text-xs tracking-widest transform rotate-90 origin-center">SCROLL</p>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/self1.jpg"
                alt="cine_Bhimraj"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="w-16 h-px bg-gray-400 mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: "serif" }}>
                  About me
                </h2>
                <div className="w-16 h-px bg-gray-400 mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  I&apos;m a passionate wedding and portrait photographer based in the heart of the city, dedicated to
                  capturing the authentic moments that tell your unique story. With over 8 years of experience, I
                  believe that every couple deserves to have their love story documented in a way that feels genuine and
                  timeless.
                </p>
                <p>
                  My approach is rooted in creating a comfortable, natural environment where genuine emotions can shine
                  through. I don&apos;t just take photos – I craft visual narratives that you&apos;ll treasure for generations to
                  come.
                </p>
                <p>
                  When I&apos;m not behind the camera, you can find me exploring new locations, spending time with my family,
                  or planning my next creative project. I&apos;m always excited to meet new couples and hear their stories.
                </p>
              </div>

              <Button
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 tracking-wider bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                GET IN TOUCH
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: "serif" }}>
              Portfolio
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of moments, emotions, and stories captured through my lens. Each image represents a unique
              journey and the beauty found in life&apos;s most precious occasions.
            </p>
          </motion.div>

          {/* Wedding Portfolio - Asymmetric Grid */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-light mb-2" style={{ fontFamily: "serif" }}>
                Wedding
              </h3>
              <p className="text-gray-500 text-sm tracking-wider">Capturing your perfect day</p>
            </motion.div>

            {/* Asymmetric Grid Layout */}
            <div className="grid grid-cols-12 gap-4 h-auto">
              {/* Large image - spans 6 columns, 2 rows */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="col-span-12 md:col-span-6 row-span-2 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-96 md:h-[500px]">
                  <img
                    src="/best1.jpg"
                    alt="Wedding couple portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              {/* Medium image - spans 3 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="col-span-6 md:col-span-3 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-50 md:h-60">
                  <img
                    src="IMG_3.JPG"
                    alt="Wedding rings detail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              {/* Medium image - spans 3 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="col-span-6 md:col-span-3 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-48 md:h-60">
                  <img
                    src="/image2.jpg"
                    alt="Wedding bouquet"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              {/* Wide image - spans 6 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="col-span-12 md:col-span-6 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-48 md:h-60">
                  <img
                    src="/best2.jpg"
                    alt="Wedding ceremony"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              {/* Small square - spans 2 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="col-span-4 md:col-span-2 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-32 md:h-40">
                  <img
                    src="/IMG_3.JPG"
                    alt="Wedding detail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              {/* Medium image - spans 4 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="col-span-8 md:col-span-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-32 md:h-40">
                  <img
                    src="/image2.jpg"
                    alt="Wedding table setting"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Prewedding Portfolio - Different Asymmetric Layout */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-light mb-2" style={{ fontFamily: "serif" }}>
                Prewedding
              </h3>
              <p className="text-gray-500 text-sm tracking-wider">Love stories before the big day</p>
            </motion.div>

            <div className="grid grid-cols-12 gap-4">
              {/* Medium image - spans 4 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="col-span-12 md:col-span-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-96 md:h-[500px]">
                  <img
                    src="/image1.jpg"
                    alt="Prewedding couple"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              {/* Large vertical - spans 4 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="col-span-12 md:col-span-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-69 md:h-96">
                  <img
                    src="/home3.jpg"
                    alt="Prewedding portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              {/* Right column with stacked images */}
              <div className="col-span-12 md:col-span-4 space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-gray-100 h-32 md:h-44">
                    <img
                      src="/best2.jpg"
                      alt="Prewedding moment"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-gray-100 h-32 md:h-44">
                    <img
                      src="/best3.jpg"
                      alt="Prewedding detail"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Maternity Portfolio - Clean Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-light mb-2" style={{ fontFamily: "serif" }}>
                Maternity
              </h3>
              <p className="text-gray-500 text-sm tracking-wider">Celebrating new beginnings</p>
            </motion.div>

            <div className="grid grid-cols-12 gap-4">
              {/* Wide image - spans 8 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="col-span-12 md:col-span-8 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-64 md:h-80">
                  <img
                    src="/mat1.jpg"
                    alt="Maternity portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              {/* Square image - spans 4 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="col-span-12 md:col-span-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-64 md:h-80">
                  <img
                    src="mat2.jpg"
                    alt="Maternity detail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              {/* Three equal columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="col-span-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-48 md:h-60">
                  <img
                    src="/mat3.jpg"
                    alt="Maternity moment"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="col-span-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-48 md:h-60">
                  <img
                    src="/mat2.jpg"
                    alt="Maternity couple"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="col-span-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 h-48 md:h-60">
                  <img
                    src="/mat1.jpg"
                    alt="Maternity lifestyle"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: "serif" }}>
              Services
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Tailored photography services designed to capture your most important moments with artistry and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-light mb-2" style={{ fontFamily: "serif" }}>
                      {service.name}
                    </h3>
                    <p className="text-gray-900 font-medium mb-4">{service.price}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white tracking-wider bg-transparent"
                      onClick={() => scrollToSection("contact")}
                    >
                      INQUIRE
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="videos" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: "serif" }}>
              Videos
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Relive the moments with curated video highlights from weddings, preweddings, maternity shoots, and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video: VideoItem, index: number) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="mb-6 overflow-hidden aspect-video">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 tracking-wider">
                    <span>{video.date}</span>
                    <span>•</span>
                    <span>{video.category}</span>
                  </div>
                  <h3
                    className="text-xl font-light group-hover:text-gray-600 transition-colors"
                    style={{ fontFamily: "serif" }}
                  >
                    {video.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{video.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: "serif" }}>
              Kind Words
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed mb-6">&quot;{testimonial.text}&quot;</p>
                  <div className="w-8 h-px bg-gray-300 mx-auto mb-4"></div>
                  <p className="text-sm tracking-wider text-gray-900">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rating Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 max-w-md mx-auto"
          >
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-light mb-6" style={{ fontFamily: "serif" }}>
                  Share Your Experience
                </h3>
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 cursor-pointer mx-1 ${star <= newRating ? "text-gray-900 fill-current" : "text-gray-300"
                        }`}
                      onClick={() => setNewRating(star)}
                    />
                  ))}
                </div>
                <Textarea
                  placeholder="Tell us about your experience..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="mb-6 border-gray-200"
                />
                <Button
                  onClick={submitRating}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 tracking-wider"
                >
                  SUBMIT
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: "serif" }}>
              Let&apos;s Connect
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I&apos;d love to hear about your vision and discuss how we can create something beautiful together. Reach out
              and let&apos;s start planning your perfect session.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-light mb-6" style={{ fontFamily: "serif" }}>
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-600 mr-4" />
                    <span className="text-gray-600">hello@charlottemccoy.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-600 mr-4" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-6" style={{ fontFamily: "serif" }}>
                  Follow Along
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input placeholder="First Name" className="border-gray-200" />
                      <Input placeholder="Last Name" className="border-gray-200" />
                    </div>
                    <Input placeholder="Email Address" type="email" className="border-gray-200" />
                    <Input placeholder="Phone Number" type="tel" className="border-gray-200" />
                    <Input placeholder="Event Date" type="date" className="border-gray-200" />
                    <Textarea
                      placeholder="Tell me about your vision and what you&apos;re looking for..."
                      rows={5}
                      className="border-gray-200"
                    />
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 tracking-wider">
                      SEND MESSAGE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-light tracking-widest" style={{ fontFamily: "serif" }}>
              CHARLOTTE McCOY
            </h3>
            <p className="text-gray-400 text-sm tracking-wider mt-2">WEDDING PHOTOGRAPHY</p>
          </div>
          <div className="w-16 h-px bg-gray-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm">© 2024 Charlotte McCoy Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
