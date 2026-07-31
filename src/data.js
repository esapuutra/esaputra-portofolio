import HeroImage from "/assets/foto_diri_bg.png";
import HeroImage2 from "/assets/foto_diri_bg2.png";
import PengalamanIGP from "/assets/pengelamanIGP.jpeg";
import PengalamanBPPT from "/assets/pengalamanBPPT.png";

const Image = {
  HeroImage,
  HeroImage2,
  PengalamanIGP,
  PengalamanBPPT,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/php.png";
import Tools3 from "/assets/tools/laravel.png";
import Tools4 from "/assets/tools/svn.png";
import Tools5 from "/assets/tools/html.png";
import Tools6 from "/assets/tools/css.png";
import Tools7 from "/assets/tools/bootstrap.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/js.png";
import Tools10 from "/assets/tools/mysql.png";
import Tools11 from "/assets/tools/postgresql.png";
import Tools12 from "/assets/tools/oraclesql.png";
import Tools13 from "/assets/tools/dbeaver.png";
import Tools14 from "/assets/tools/xampp.png";
import Tools15 from "/assets/tools/laragon.png";
import Tools16 from "/assets/tools/drawio.png";
import Tools17 from "/assets/tools/figma.png";
import Tools18 from "/assets/tools/canva.png";
import Tools19 from "/assets/tools/bizagi.png";
import Tools20 from "/assets/tools/codeigniter.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "PHP",
    ket: "Programming Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Back-End Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools20,
    nama: "Codeigniter",
    ket: "Back-End Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools4,
    nama: "TortoiseSVN",
    ket: "Repository",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools5,
    nama: "HTML",
    ket: "Markup Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools6,
    nama: "CSS",
    ket: "Style Sheet Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools7,
    nama: "Bootstrap",
    ket: "Front-End Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools9,
    nama: "Javascript",
    ket: "Programming Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools10,
    nama: "MySQL",
    ket: "Relational Database Management System",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools11,
    nama: "PostgreSQL",
    ket: "Relational Database Management System",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools12,
    nama: "OracleSQL",
    ket: "Relational Database Management System",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools13,
    nama: "DBeaver",
    ket: "Database Management System",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools14,
    nama: "XAMPP",
    ket: "Local Development Environment",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools15,
    nama: "Laragon",
    ket: "Local Development Environment",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools16,
    nama: "Draw IO",
    ket: "System Modeling",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools17,
    nama: "Figma",
    ket: "Design App",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools18,
    nama: "Canva",
    ket: "Design App",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools19,
    nama: "Bizagi Modeler",
    ket: "Business Process Modeling",
    dad: "2000",
  },
];

import Proyek1 from "/assets/proyek/keuangan.png";
import Proyek2 from "/assets/proyek/cek_mesin.png";
import Proyek3 from "/assets/proyek/ecommerce.png";
import Proyek4 from "/assets/proyek/penerimaan_mhs.png";
import Proyek5 from "/assets/proyek/konsuldok.png";
import Proyek6 from "/assets/proyek/rebookin.png";
import Proyek7 from "/assets/proyek/rede_yt.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Pencatatan Keuangan Departemen General Affair",
    desk: "Membuat laporan dan penggunaan keuangan dari setiap departemen dalam satu tahun.",
    tools: ["HTML", "CSS", "Javascript", "PHP", "Laravel", "JQuery", "PostgreSQL", "OracleSQL"],
    link: "#",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Monitoring dan Pengecekan Mesin",
    desk: "Membuat monitoring laporan tiap hari dan bulanan dari hasil pengecekan rutin mesin seperti Forklift dll.",
    tools: ["HTML", "CSS", "Javascript", "PHP", "Laravel", "JQuery", "PostgreSQL", "Datatable"],
    link: "#",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "E-Commerce Kampus",
    desk: "Ini merupakan proyek pertama saya, yaitu jual beli online untuk membantu Mahasiswa mendapatkan barang disekitaran kampus",
    tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    link: "#",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "UI Design Penerimaan Mahasiswa Baru",
    desk: "Desain user interface yang berfokus untuk seleksi penerimaan mahasiswa baru",
    tools: ["Design App", "Figma"],
    link: "https://www.figma.com/design/I4OXUQJ0s80k3nQ43Wey7z/Project-Kelas?node-id=0-1&t=B6On9czsQ17Ld8Mw-1",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "UI Design Konsultasi Dokter Online",
    desk: "Desain user interface mobile untuk melakukan konsultasi dengan dokter secara online",
    tools: ["Design App", "Figma"],
    link: "https://www.figma.com/design/8tQ3hMEo8E4rMKdx98MmRA/Untitled?node-id=0-1&t=KimOgglqZBA18sPE-1",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "UI Design Belanja Buku Online",
    desk: "Desain user interface mobile untuk jual beli secara online dengan mudah",
    tools: ["Design App", "Figma"],
    link: "https://www.figma.com/design/AzFwR9fVaYAauzHWSHlBY2/Tugas-Desain-Interaksi---1?node-id=0-1&t=T5Q3mzhb3H0EpFQX-1",
    dad: "700",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "UI Re-Design Youtube",
    desk: "Mendesain ulang homepage youtube agar terlihat lebih clean dan rapih",
    tools: ["Design App", "Figma"],
    link: "https://www.instagram.com/p/Cj3QZw5S7bY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    dad: "800",
  },
];


import Sertifikat1 from "/assets/sertifikat/igp.jpg";
import Sertifikat2 from "/assets/sertifikat/lsp_si.jpg";
import Sertifikat3 from "/assets/sertifikat/it_supp.jpeg";
import Sertifikat4 from "/assets/sertifikat/lsp_smk.jpg";
import Sertifikat5 from "/assets/sertifikat/bppt.jpg";

export const listSertifikat = [
  {
    id: 1,
    gambar: Sertifikat1,
    nama: "Internship Certificate",
    desk: "PT Inti Ganda Perdana",
    tahun: "2024-2025",
    dad: "100",
  },
  {
    id: 2,
    gambar: Sertifikat2,
    nama: "Database Administrator",
    desk: "Badan Nasional Sertifikasi Profesi (BNSP)",
    tahun: "2025-2028",
    dad: "200",
  },
  {
    id: 3,
    gambar: Sertifikat3,
    nama: "IT Support Google Professional Certificate",
    desk: "Google",
    tahun: "2022",
    dad: "300",
  },
  {
    id: 4,
    gambar: Sertifikat4,
    nama: "Computer and Network Engineering Skills",
    desk: "Badan Nasional Sertifikasi Profesi (BNSP)",
    tahun: "2021-2024",
    dad: "400",
  },
  {
    id: 5,
    gambar: Sertifikat5,
    nama: "Internship Certificate",
    desk: "Badan Pengkajian dan Penerapan Teknologi (BPPT)",
    tahun: "2019",
    dad: "500",
  },
];