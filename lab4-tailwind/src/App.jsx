import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import Card from './components/Card.jsx'
import Alert from './components/Alert.jsx'

function App() {
  const profile = {
    name: 'Beyza Nur Ozanalp',
    title: 'Yazılım Mühendisliği Öğrencisi',
    subtitle:
      'Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Web ve mobil uygulama geliştirme alanlarında yapay zeka destekli araçlarla proje tabanlı çalışmalar yaptım. Harita tabanlı web uygulamaları ve yapay zeka destekli mobil projelerde gereksinim analizi, akış planlama ve Agile/Scrum süreçlerinde görev aldım. Medium’da yazılım ve teknoloji odaklı içerikler üretiyorum.',
    location: 'Elazığ, Türkiye',
    email: 'beyzanurozanalp@gmail.com',
    links: [
      { label: 'Medium', href: 'https://medium.com/@beyzanurozanalp' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/beyzanurozanalp/' },
      { label: 'GitHub', href: 'https://github.com/Beyzanur-1419' },
    ],
  }

  const techs = [
    { label: 'C#', tone: 'violet' },
    { label: 'Java', tone: 'orange' },
    { label: 'Python', tone: 'sky' },
    { label: 'PostgreSQL', tone: 'cyan' },
    { label: 'MySQL', tone: 'amber' },
    { label: 'MongoDB', tone: 'teal' },
    { label: 'Git & GitHub', tone: 'zinc' },
    { label: 'Docker', tone: 'slate' },
    { label: 'Postman', tone: 'rose' },
    { label: 'Agile & Scrum', tone: 'emerald' },
    { label: 'Wireshark (Temel)', tone: 'fuchsia' },
    { label: 'Burp Suite (Temel)', tone: 'indigo' },
  ]

  const projects = [
    {
      title: 'Glowmance — Yapay Zeka Destekli Kişisel Cilt Analizli Mobil Uygulama',
      description:
        'Kullanıcıdan alınan cilt fotoğraflarını analiz ederek kişisel bakım önerileri sunmayı amaçlayan yapay zeka destekli mobil uygulama projesi.',
      tags: ['Scrum Master', 'Gereksinim Analizi', 'Veritabanı Tasarımı'],
    },
    {
      title: 'İkinci El Sahaf — 2. El Kitap Satış, Takas ve Yönetim Web Uygulaması',
      description:
        'Kullanıcıların ikinci el kitapları satış ve takas yoluyla listeleyip yönetebildiği web tabanlı platform.',
      tags: ['Scrum Master', 'Kullanıcı Senaryoları', 'İlişkisel Veri Modeli'],
    },
    {
      title: 'Harita Tabanlı Web Uygulaması — Konum Bazlı Altyapı Sorunu Bildirim Sistemi',
      description:
        'Harita üzerinden konum bazlı altyapı sorunlarını bildirme ve bildirim yönetimi sağlayan web tabanlı sistem.',
      tags: ['Bireysel Proje', 'Prisma ORM', 'AI/No‑Code'],
    },
  ]

  const experience = [
    {
      role: 'Medium Ekip Üyesi',
      org: 'HSD (Huawei Student Developer) — Fırat Core Team',
      date: '2024 – Devam ediyor',
      details: [
        'İçerik üretimi ve Medium yazıları yayımlama',
        'Kulüp etkinliklerinde aktif rol alma',
        '“Ayın Yazarı” ödülü (yüksek etkileşim alan yazı)',
      ],
    },
  ]

  const education = [
    {
      school: 'Fırat Üniversitesi',
      program: 'Yazılım Mühendisliği (Lisans) — GANO: 3.43 / 4.00',
      date: '2023 – 2027',
    },
  ]

  const toneClasses = {
    orange: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200 ring-orange-200/60 dark:ring-orange-900/40',
    sky: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200 ring-sky-200/60 dark:ring-sky-900/40',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 ring-amber-200/60 dark:ring-amber-900/40',
    cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200 ring-cyan-200/60 dark:ring-cyan-900/40',
    teal: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-200 ring-teal-200/60 dark:ring-teal-900/40',
    zinc: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 ring-zinc-200/60 dark:ring-zinc-700/40',
    slate: 'bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-200 ring-slate-200/60 dark:ring-slate-900/40',
    rose: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200 ring-rose-200/60 dark:ring-rose-900/40',
    emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 ring-emerald-200/60 dark:ring-emerald-900/40',
    fuchsia: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950 dark:text-fuchsia-200 ring-fuchsia-200/60 dark:ring-fuchsia-900/40',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 ring-indigo-200/60 dark:ring-indigo-900/40',
    violet: 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200 ring-violet-200/60 dark:ring-violet-900/40',
  }

  return (
    <div className="min-h-screen bg-surface text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white px-4 py-2 z-50"
      >
        Ana içeriğe atla
      </a>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
            <h1 className="text-xl font-bold text-primary dark:text-blue-300">{profile.name}</h1>
            <nav aria-label="Ana navigasyon">
              <ul className="flex flex-wrap gap-2">
                <li>
                  <a
                    href="#hakkimda"
                    className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Hakkımda
                  </a>
                </li>
                <li>
                  <a
                    href="#projeler"
                    className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Projeler
                  </a>
                </li>
                <li>
                  <a
                    href="#iletisim"
                    className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="main-content" className="flex-1">
          {/* Hero */}
          <section className="px-4 pt-10 pb-8">
            <div className="max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 dark:border-gray-800/60 bg-white dark:bg-gray-900 shadow-sm">
                <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/25 via-violet-500/20 to-fuchsia-500/25 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl" />

                <div className="relative p-6 sm:p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="shrink-0">
                      <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-[2px] shadow-lg">
                        <div className="h-full w-full rounded-[22px] bg-white dark:bg-gray-950 grid place-items-center">
                          <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                            {profile.name
                              .split(' ')
                              .slice(0, 2)
                              .map((x) => x[0])
                              .join('')
                              .toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-200 ring-1 ring-inset ring-blue-200/60 dark:ring-blue-900/50">
                          ● Yeni projelere açık
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 dark:bg-gray-950 dark:text-gray-200 ring-1 ring-inset ring-gray-200/60 dark:ring-gray-800/60">
                          {profile.location}
                        </span>
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {profile.name}
                      </h2>
                      <p className="mt-2 text-lg font-medium text-primary dark:text-blue-300">
                        {profile.title}
                      </p>
                      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                        {profile.subtitle}
                      </p>

                      <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
                        <a
                          className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline"
                          href={`mailto:${profile.email}`}
                        >
                          {profile.email}
                        </a>
                        <div className="flex flex-wrap gap-2">
                          {profile.links.map((l) => (
                            <a
                              key={l.label}
                              href={l.href}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                              {l.label}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a href={`mailto:${profile.email}`}>
                          <Button variant="primary" size="md" type="button">
                            Bana Ulaşın
                          </Button>
                        </a>

                        <a href="/cv-tr.pdf" download>
                          <Button variant="secondary" size="md" type="button">
                            CV İndir (TR)
                          </Button>
                        </a>

                        <a href="/CV(İngilizce).pdf" download>
                          <Button variant="secondary" size="md" type="button">
                            CV İndir (EN)
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teknolojiler */}
          <section id="hakkimda" className="px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Teknolojiler</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Kullandıklarım</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {techs.map((t) => (
                  <div
                    key={t.label}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold ring-1 ring-inset ${
                      toneClasses[t.tone]
                    }`}
                  >
                    {t.label}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projeler */}
          <section
            id="projeler"
            className="py-12 px-4 bg-gray-50 dark:bg-gray-900/40"
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Projelerim</h3>
                <a className="text-sm font-medium text-blue-700 dark:text-blue-300 hover:underline" href="#iletisim">
                  Birlikte çalışalım →
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                  <Card
                    key={p.title}
                    variant={i === 0 ? 'elevated' : i === 1 ? 'outlined' : 'filled'}
                    title={p.title}
                    footer={
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button size="sm" variant="ghost" type="button">
                          Daha Fazla
                        </Button>
                      </div>
                    }
                  >
                    {p.description}
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Deneyim + Eğitim */}
          <section className="px-4 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card variant="outlined" title="Deneyim">
                <ul className="space-y-5">
                  {experience.map((x) => (
                    <li key={`${x.role}-${x.org}`} className="space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100">{x.role}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{x.org}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{x.date}</span>
                      </div>
                      {x.details?.length ? (
                        <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          {x.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card variant="outlined" title="Eğitim">
                <ul className="space-y-4">
                  {education.map((e) => (
                    <li key={`${e.school}-${e.program}`} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">{e.school}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{e.program}</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{e.date}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* Bilgilendirme */}
          <section className="px-4 pb-4 max-w-6xl mx-auto">
            <Alert variant="success" title="LAB-4">
              Bu sayfa Tailwind CSS + component yaklaşımıyla yeniden düzenlendi. Dark mode ve responsive yapıyı UI Kit’te de kontrol edebilirsin.
            </Alert>
          </section>

          {/* İletişim */}
          <section id="iletisim" className="py-16 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8 text-center">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                İletişim
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Bir proje fikrin varsa mesaj bırak; en kısa sürede dönüş yaparım.
                </p>
              </div>

              <Card
                variant="elevated"
                title="Mesaj Gönder"
                footer={
                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Form şu an demo amaçlı; backend eklenince gönderim aktif olur.
                    </p>
                    <Button variant="primary" size="md" type="submit">
                      Gönder
                    </Button>
                  </div>
                }
              >
                <form className="space-y-4">
                  <Input id="name" label="Ad Soyad" required placeholder={profile.name} />
                <Input
                  id="email"
                  label="E-posta"
                  type="email"
                  required
                  helpText="Örnek: ad@mail.com"
                />
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                  ></textarea>
                </div>
                </form>
              </Card>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-center py-10 px-4 text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; 2026 {profile.name}. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </div>
  )
}

export default App