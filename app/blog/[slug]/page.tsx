import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/ui/FloatingActions'
import { BLOG_POSTS } from '@/lib/constants/blog-data'
import { Calendar, Clock, ArrowLeft, Anchor, Share2 } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.seoTitle} | Morbihan Nautic`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Schema.org BlogPosting JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Morbihan Nautic',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Morbihan Nautic',
      logo: {
        '@type': 'ImageObject',
        url: 'https://projet-bateaulevrai.pages.dev/hero-bg.jpeg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://projet-bateaulevrai.pages.dev/blog/${post.slug}`,
    },
  }

  return (
    <div className="min-h-screen bg-[var(--color-vasiere)] text-[var(--color-ecume)] font-sans antialiased">
      {/* Ingestion JSON-LD pour SEO Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Header Article */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#142C39] border-b border-[var(--color-ecume)]/10">
        <div className="mx-auto max-w-4xl px-5 relative z-10 space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-ocre)] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Retour aux articles
          </Link>

          <span className="inline-block rounded-full bg-[var(--color-cuivre)]/20 border border-[var(--color-cuivre)]/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-ocre)]">
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-granit)] border-t border-[var(--color-ecume)]/10 pt-4">
            <span>Par <strong className="text-white">{post.author}</strong></span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-[var(--color-ocre)]" /> {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-[var(--color-ocre)]" /> {post.readTime} de lecture
            </span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="mx-auto max-w-4xl px-5 -mt-6 relative z-20">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-[var(--color-ecume)]/15 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover filter brightness-105 contrast-[1.02]"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 mx-auto max-w-3xl px-5">
        <div className="space-y-6 text-[#D0D4D2] text-base sm:text-lg leading-relaxed">
          {post.content.map((paragraph, i) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={i} className="font-heading text-2xl font-bold text-white pt-6 pb-2 border-b border-[var(--color-ecume)]/10">
                  {paragraph.replace('### ', '')}
                </h3>
              )
            }
            if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) {
              return (
                <div key={i} className="pl-4 border-l-2 border-[var(--color-cuivre)] py-1 my-2 text-white font-medium text-base">
                  {paragraph}
                </div>
              )
            }
            if (paragraph.startsWith('• ')) {
              return (
                <p key={i} className="pl-2 text-base text-[var(--color-ecume)]">
                  {paragraph}
                </p>
              )
            }
            return <p key={i}>{paragraph}</p>
          })}
        </div>

        {/* Backlink interne vers la flotte et les programmes */}
        <div className="mt-12 p-6 rounded-2xl bg-[#142C39] border border-[var(--color-cuivre)]/30 space-y-3">
          <h4 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <Anchor className="h-5 w-5 text-[var(--color-ocre)]" /> Réservez votre bateau dans le Golfe du Morbihan
          </h4>
          <p className="text-xs sm:text-sm text-[#D0D4D2]">
            Envie de mettre en pratique ces conseils ? Découvrez nos voiliers, semi-rigides et bateaux à moteur disponibles au départ des 6 ports (Vannes, Arradon, Le Crouesty, Port-Blanc, Larmor-Baden, Port-Navalo).
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/#fleet"
              className="rounded-full bg-[var(--color-cuivre)] px-6 py-2.5 text-xs font-semibold text-white shadow-lg hover:brightness-110 transition-all"
            >
              Voir nos bateaux disponibles
            </Link>
            <Link
              href="/programmes"
              className="rounded-full border border-[var(--color-ecume)]/20 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-all"
            >
              Voir les itineraires conseillés
            </Link>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingActions />
    </div>
  )
}
