function App() {
  return (
    <>
      {/* Skip Navigation */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* Header & Navigation */}
      <header>
        <h1>Web Tasarımı ve Programlama</h1>
        <h2>LAB – Kişisel Tanıtım Sitesi</h2>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Hakkımda */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure>
            <img
              src="/profil.jpg"
              alt="Beyza Nur Ozanalp'in profil fotografi"
              width="150"
            />
            <figcaption>Beyza Nur Ozanalp</figcaption>
          </figure>

          <p>
            Merhaba, ben Beyza Nur Ozanalp. Yazılım mühendisliği öğrencisiyim.
            Web ve mobil uygulama geliştirme ile ilgileniyorum.
          </p>

          <p>
            Hobilerim: UI tasarımı, yeni teknolojiler öğrenmek ve proje üretmek.
          </p>
        </section>

        {/* Projeler */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <figure>
            <img
              src="/proje1.1.jpg"
              alt="Glowmance uygulamasi analiz ekrani"
              width="250"
            />
            <figcaption>Glowmance – Analiz Ekranı</figcaption>
          </figure>

          <figure>
            <img
              src="/proje1.2..jpg"
              alt="Glowmance uygulamasi gecmis raporlar ekrani"
              width="250"
            />
            <figcaption>Glowmance – Geçmiş Raporlar</figcaption>
          </figure>
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
    </>
  );
}

export default App;