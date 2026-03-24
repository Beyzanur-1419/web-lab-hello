import { useState, useEffect } from "react";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";

export default function App() {
  // ─── STATE ───────────────────────────────────────────────
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ─── VERİ ÇEKME ──────────────────────────────────────────
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu."
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // ─── TÜRETİLMİŞ VERİ (Derived State) ────────────────────
  const filtered = applyFilters(projects, search, category, sortField, sortOrder);

  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

  // ─── UI ──────────────────────────────────────────────────
  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* ─── Header ─── */}
      <header>
        <h1>Beyza Nur Ozanalp</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* ─── Main ─── */}
      <main id="main-content">

        {/* Hakkımda */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <p>
            Yazılım Mühendisliği öğrencisiyim. Web ve mobil teknolojilere ilgi
            duyuyor, kullanıcı odaklı ve erişilebilir arayüzler geliştirmeyi
            hedefliyorum.
          </p>
          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
          </ul>
        </section>

        {/* ─── Projeler ─── */}
        <section id="projeler">
          <h2>Projelerim</h2>

          {/* HATA DURUMU */}
          {error && (
            <div role="alert" className="error-alert">
              <strong>Hata:</strong> {error}
            </div>
          )}

          {/* FİLTRELER */}
          <div className="filters">
            {/* Arama */}
            <input
              id="search"
              type="search"
              placeholder="Proje ara... (başlık, açıklama, teknoloji)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Proje arama"
            />

            {/* Kategori butonları */}
            <div className="category-buttons" role="group" aria-label="Kategori filtresi">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={category === cat ? "btn-active" : "btn-ghost"}
                  aria-pressed={category === cat}
                >
                  {cat === "all" ? "Tümü" : cat}
                </button>
              ))}
            </div>

            {/* Sıralama */}
            <div className="sort-controls">
              <label htmlFor="sort-field">Sırala:</label>
              <select
                id="sort-field"
                value={sortField}
                onChange={(e) => setSortField(e.target.value as SortField)}
              >
                <option value="year">Yıl</option>
                <option value="title">Başlık</option>
              </select>

              <button
                onClick={() => setSortOrder((o) => (o === "asc" ? "desc" : "asc"))}
                className="btn-ghost"
                aria-label={`Sıralama yönü: ${sortOrder === "asc" ? "Artan" : "Azalan"}`}
              >
                {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
              </button>
            </div>
          </div>

          {/* YÜKLENİYOR */}
          {loading && (
            <p className="status-msg" role="status">
              Yükleniyor...
            </p>
          )}

          {/* SONUÇ YOK */}
          {!loading && !error && filtered.length === 0 && (
            <p className="status-msg">Eşleşen proje bulunamadı.</p>
          )}

          {/* PROJE LİSTESİ */}
          {!loading && filtered.length > 0 && (
            <>
              <p className="result-count">
                {filtered.length} / {projects.length} proje gösteriliyor
              </p>
              <div className="project-grid">
                {filtered.map((project) => (
                  <article key={project.id} className="project-card">
                    <header className="card-header">
                      <h3>{project.title}</h3>
                      <span className="badge">{project.category}</span>
                    </header>

                    <p className="card-desc">{project.description}</p>

                    {/* Teknoloji etiketleri */}
                    <ul className="tech-list" aria-label="Kullanılan teknolojiler">
                      {project.tech.map((t) => (
                        <li key={t} className="tech-tag">
                          {t}
                        </li>
                      ))}
                    </ul>

                    <footer className="card-footer">
                      <span className="card-year">{project.year}</span>
                      {project.featured && (
                        <span className="featured-badge">⭐ Öne Çıkan</span>
                      )}
                      <div className="card-links">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="card-link"
                          >
                            Demo
                          </a>
                        )}
                        {project.sourceUrl && (
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="card-link"
                          >
                            Kaynak
                          </a>
                        )}
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        {/* İletişim */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer>
        <p>© 2026 Beyza Nur Ozanalp</p>
        <p>
          <a href="https://github.com/Beyzanur-1419/" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a href="http://www.linkedin.com/in/beyzanurozanalp" target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://medium.com/@beyzanurozanalp/" target="_blank" rel="noreferrer">
            Medium
          </a>
        </p>
      </footer>
    </>
  );
}