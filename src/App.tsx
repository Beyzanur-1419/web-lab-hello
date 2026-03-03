function App() {
  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* =========================
          Header + Navigation
      ========================= */}
      <header>
        <h1>Beyza Nur Ozanalp</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li>
              <a href="#hakkimda">Hakkımda</a>
            </li>
            <li>
              <a href="#projeler">Projelerim</a>
            </li>
            <li>
              <a href="#iletisim">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* =========================
          Main Content
      ========================= */}
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

        {/* Projeler */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Glowmance</h3>

            <p>
              Yapay zeka destekli cilt analizi yaparak kullanıcıya uygun bakım
              ürünleri öneren web uygulaması.
            </p>

            <p>
              <strong>Teknolojiler:</strong> React, Vite, AI API
            </p>

            <figure>
              <img
                src="/proje1.1.jpg"
                alt="Glowmance cilt analiz ekranı"
                width={300}
                loading="lazy"
              />
              <figcaption>Cilt Analiz Ekranı</figcaption>
            </figure>

            <figure>
              <img
                src="/proje1.2.jpg"
                alt="Glowmance ürün öneri ekranı"
                width={300}
                loading="lazy"
              />
              <figcaption>Ürün Öneri Ekranı</figcaption>
            </figure>
          </article>

          <article>
            <h3>Kişisel Portföy Sitesi</h3>

            <p>
              Kendimi ve projelerimi tanıttığım, erişilebilirlik kurallarına uygun
              portföy web sitesi.
            </p>

            <p>
              <strong>Teknolojiler:</strong> HTML, CSS, React
            </p>
          </article>
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
                <small
                  id="name-error"
                  className="error-msg"
                  role="alert"
                ></small>
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
                <small
                  id="email-error"
                  className="error-msg"
                  role="alert"
                ></small>
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
                <small
                  id="subject-error"
                  className="error-msg"
                  role="alert"
                ></small>
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
                <small
                  id="message-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* =========================
          Footer
      ========================= */}
      <footer>
        <p>© 2026 Beyza Nur Ozanalp</p>

        <p>
          <a
            href="https://github.com/Beyzanur-1419/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="http://www.linkedin.com/in/beyzanurozanalp"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://medium.com/@beyzanurozanalp/"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;