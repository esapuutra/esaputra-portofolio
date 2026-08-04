import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Esa Putra Priyadimas</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya memiliki ketertarikan dalam bidang pengembangan sistem informasi berbasis website dan arsitektur database. Dengan pengalaman internship selama satu tahun, saya terbiasa merancangan dan mengembangan aplikasi web yang terstruktur serta mudah dikembangkan dan dipelihara. Selain itu, saya juga memiliki minat dalam merancang arsitektur database yang optimal, terorganisir.
          </p>
          <p className="text-base/loose">
            <i className="ri-mail-line mr-2"></i> esapuutraa@gmail.com
          </p>
          <p className="text-base/loose">
            <i className="ri-whatsapp-line mr-2"></i> +62 851-5618-9220
          </p>
          <p className="text-base/loose mb-6">
          <i className="ri-map-pin-line mr-2"></i> Kemayoran, Jakarta Pusat
          </p>
          <div className="flex items-center gap-3 mb-6 surface-card w-fit p-4 rounded-2xl">
            <q>Teruslah berjuang dan kembangkan potensi diri. 👌</q>
          </div>
          <div className="flex flex-wrap items-center sm:gap-4 gap-2">
            <a href="/CV_Esa_Putra_Priyadimas.pdf" download className="bg-violet-700 p-4 rounded-xl hover:bg-violet-600 items-center">
              Download CV <i className="ri-download-line ri-lg ml-1"></i>
            </a>
            <a href="#proyek" className="surface-muted surface-hover p-4 rounded-xl">
              Lihat Proyek <i className="ri-eye-fill ri-lg ml-1"></i>
            </a>
            <a href="https://github.com/esapuutra" target="_blank" rel="noopener noreferrer" className="surface-muted surface-hover p-4 rounded-xl">
              GitHub <i className="ri-github-fill ri-lg ml-1"></i>
            </a>
          </div>
        </div>
        {/* <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" /> */}
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
          onMouseEnter={(e) => (e.currentTarget.src = DataImage.HeroImage2)}
          onMouseLeave={(e) => (e.currentTarget.src = DataImage.HeroImage)}
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <h1 className="text-center text-4xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tentang Saya</h1>
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 surface-card rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <p className="text-base/loose mb-10">
            Lulusan dari Sistem Informasi Industri Otomotif di Politeknik STMI Jakarta dengan pengalaman menjadi Full Stack Web Developer. Terampil membangun aplikasi web menggunakan PHP Native, Laravel, dan JavaScript, serta menguasai manajemen basis data, analisis serta pemodelan sistem dengan Use Case, Activity, dan Sequence Diagram, serta desain dan pemodelan database. Memiliki pengalaman magang 1 tahun, sertifikasi resmi BNSP Database Administrator. Memiliki ketertarikan tinggi dalam memecahkan masalah dan mengoptimalkan proses bisnis dan selalu ingin terus belajar serta berkembang di dunia teknologi.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md opacity-0" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <a href="#proyek" className="cursor-pointer">
                  <h1 className="text-4xl mb-1">
                    6<span className="text-violet-500 font-medium">+</span>
                  </h1>
                  <p>Proyek Selesai</p>
                </a>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-violet-500 font-medium">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* pengalaman */}
        <div className="pengalaman mt-25">
          <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Pengalaman</h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini adalah pengalaman yang saya miliki</p>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 surface-card rounded-lg mb-3" >
              <div className="grid md:grid-cols-[1fr_5fr] items-center xl:gap-0 gap-6 grid-cols-1">
                <img src={DataImage.PengalamanIGP} alt="Image" className="w-30 rounded-md" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-semibold">PT Inti Ganda Perdana</h1>
                  <p className="text-base/loose opacity-50">Feb 2024 - Apr 2025 | Full Stack Web Developer</p>
                  <div className="ml-4">
                    <li>Mengembangkan website internal (Full stack)</li>
                    <li>Berkolaborasi dengan pengguna dan manajer IT (Mentor)</li>
                    <li>Sosialisasi kepada pengguna atau end-user</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 surface-card rounded-lg">
              <div className="grid md:grid-cols-[1fr_5fr] items-center xl:gap-0 gap-6 grid-cols-1">
                <img src={DataImage.PengalamanBPPT} alt="Image" className="w-30 rounded-md" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-semibold">Badan Pengkajian dan Penerapan Teknologi (BPPT)</h1>
                  <p className="text-base/loose opacity-50">Nov 2019 - Des 2019 | IT Support</p>
                  <div className="ml-4">
                    <li>Memberikan bantuan teknis kepada pengguna terkait perangkat keras, lunak, dan jaringan</li>
                    <li>Melakukan pemantauan sistem (Monitoring), backup data, dokumentasi permasalahan teknis</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"  data-aos-once="true">Berikut ini adalah beberapa tools yang biasa saya pakai untuk pembuatan Website dan Desain</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border theme-border rounded-md surface-hover group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 surface-card p-1" loading="lazy" />
                <div>
                  <h4 className="font-bold ">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa proyek yang saya kerjakan dan dapat didokumentasikan</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div
              key={proyek.id}
              className="p-4 surface-card rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>

                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      key={index}
                      className="py-1 px-3 border theme-border surface-muted rounded-md font-semibold"
                    >
                      {tool}
                    </p>
                  ))}
                </div>

                {proyek.link !== "#" && (
                  <div className="mt-8 text-center">
                    <a
                      href={proyek.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                    >
                      Lihat Proyek
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-base/loose opacity-50">Note: Ada proyek yang tidak dapat saya dokumentasikan.</h1>
      </div>

      {/* Sertifikat */}
      <div className="sertifikat mt-32 py-10" id="sertifikat">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Sertifikat</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa sertifikat yang pernah saya capai </p>
        <div className="sertifikat-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listSertifikat.map(sertifikat => (
            <div key={sertifikat.id} className="p-4 surface-card rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={sertifikat.dad} data-aos-once="true">
              <img src={sertifikat.gambar} alt="Sertifikat Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold mt-4">{sertifikat.nama}</h1>
                <p className="text-base/loose opacity-70">{sertifikat.desk}</p>
                <p className="text-base/loose opacity-70">{sertifikat.tahun}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/esapuutraa@gmail.com" method="POST" className="surface-card p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama ..." className="border theme-border theme-field p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email ..." className="border theme-border theme-field p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan ..." className="border theme-border theme-field p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
