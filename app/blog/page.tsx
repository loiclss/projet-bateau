import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/ui/FloatingActions'
import { BLOG_POSTS } from '@/lib/constants/blog-data'
import { BookOpen, Calendar, Clock, ArrowRight, Anchor } from 'lucide-react'

export const metadata: Metadata = {
  title: "Blog & Guides Nautiques | Location Bateau Golfe du Morbihan",
  description: "Découvrez nos guides de navigation, conseils de pêche, itinéraires d'escales et règles de sécurité pour réussir votre location de bateau dans le Golfe du Morbihan.",
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[var(--color-vasiere)] text-[var(--color-ecume)] font-sans antialiased">
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#142C39] border-b border-[var(--color-ecume)]/10">
        <div className="mx-auto max-w-6xl px-5 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cuivre)]/15 border border-[var(--color-cuivre)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-ocre)]">
              <BookOpen className="h-3.5 w-3.5" /> Blog & Guides Marins
            </span>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-white leading-tight">
              Tout savoir pour naviguer <br />
              <span className="text-[var(--color-ocre)]">dans le Golfe du Morbihan</span>
            </h1>
            <p className="text-base sm:text-lg text-[#D0D4D2] leading-relaxed">
              Sécurité, permis, courants, meilleurs spots de pêche et escales secrètes : retrouvez les conseils de nos capitaines et loueurs agréés.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#142C39] border border-[var(--color-ecume)]/10 shadow-xl transition-all duration-300 hover:border-[var(--color-cuivre)]/40 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover filter brightness-105 contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142C39] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#1B3A4B]/90 backdrop-blur-md px-3.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--color-ocre)] border border-[var(--color-cuivre)]/30">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[0.72rem] text-[var(--color-granit)]">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-[var(--color-ocre)]" /> {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-[var(--color-ocre)]" /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-heading text-lg font-bold text-white group-hover:text-[var(--color-ocre)] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-[#D0D4D2] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-ecume)]/10 flex items-center justify-between">
                    <span className="text-[0.7rem] text-[var(--color-granit)]">{post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-ocre)] group-hover:translate-x-1 transition-transform"
                    >
                      Lire la suite <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Blog */}
      <section className="bg-[#142C39] py-16 border-t border-[var(--color-ecume)]/10 text-center">
        <div className="mx-auto max-w-4xl px-5 space-y-4">
          <Anchor className="h-10 w-10 text-[var(--color-ocre)] mx-auto" />
          <h3 className="font-heading text-2xl font-bold text-white">Prêt à choisir votre bateau ?</h3>
          <p className="text-sm text-[#D0D4D2] max-w-xl mx-auto">
            Retrouvez tous nos voiliers, bateaux à moteur et semi-rigides au départ des 6 ports du Golfe.
          </p>
          <div className="pt-2">
            <Link
              href="/#fleet"
              className="inline-block rounded-full bg-[var(--color-cuivre)] px-8 py-3 text-sm font-semibold text-white shadow-xl hover:brightness-110 transition-all"
            >
              Voir la flotte disponible
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  )
}
