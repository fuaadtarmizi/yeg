import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Contactus from "@/components/Contactus"


function misa() {
  return (
    <main>
      <title>YEG Academy - Kursus Kerjaya</title>

      <nav className="hidden lg:block sticky top-0 ">
        <Navbar />
      </nav>
      <nav>
        <div className="lg:hidden">
          <Sidebar />
        </div>
      </nav>
      <div className="flex justify-center">
        <Image
          className="rounded-sm "
          src="/misa.jpg"
          alt="misa"
          width="900"
          height="200"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <section>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-6">
          <div className="p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">OIL & GAS</h>
              <h>Industri Minyak dan Gas: Mencabar dan Penuh Peluang</h>
            </div>
            <div className="space-y-5">
              <div className="flex justify-center">
                <h className="text-justify">Melangkah ke dalam kerjaya dalam industri minyak dan gas membawa pengalaman yang seronok dengan peluang tanpa batas. Sudah semestinya pelatih akan merasai pengalaman-pengalaman yang mencabar kerana tugas ini termasuk dari kerjaya yang berisiko. Oleh itu, bekerjaya dalam industri ini mampu mendapat gaji yang lumayan seiring pengalaman yang luas. Menyertai industri yang kritikal ini tidak hanya memberikan pengalaman kerja yang bermakna tetapi juga peluang untuk menyumbang kepada kemajuan global dan kelestarian sumber daya alam.</h>
              </div>
              <div className="grid justify-center space-y-2">
                <h className="text-justify">Sijil Profesional Pemasangan Paip Gas dan Sijil Profesional Paip dan Jurugegas membuka pintu kepada pengetahuan dan kemahiran tinggi dalam industri ini. Dengan fokus pada teknologi terkini, latihan praktikal yang mendalam, dan pengajaran oleh pakar industri, program ini mempersiapkan graduan untuk menjadi ahli yang berkemampuan tinggi dan dicari dalam bidang pemasangan, penyelenggaraan, dan pengurusan sistem paip gas. Kami menawarkan program kursus jangka pendek yang menjadi pilihan ramai iaitu:</h>
                <li className="px-4">Sijil Profesional Pemasangan Paip Gas</li>
                <li className="px-4">Sijil Profesional Paip dan Jurugegas</li>
                <li className="px-4">Sijil Profesional Kulinari</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Dengan Kursus Ini, Anda Akan Dapat</h>
                <li className="px-4">Percuma Uniform PPE</li>
                <li className="px-4">NIOSH Oil & Gas Safety Passport (OGSP)</li>
                <li className="px-4">Kad CIDB</li>
                <li className="px-4">Lesen Offshore T-Bosiet OPITO</li>
                <li className="px-4">Sijil Basic Fire Watch</li>
                <li className="px-4">Medical OHD</li>
                <li className="px-4">Confined Space Entry (AESP)</li>
                <li className="px-4">Medical Offshore</li>
                <li className="px-4">Gas Pipe Installation (ABM) (High Pressure)</li>
                <li className="px-4">Jaminan Pekerjaan</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-Syarat Kelayakan</h>
                <li className="px-4">18 hingga 35 tahun</li>
                <li className="px-4">Memiliki sekurang-kurangnya PT3/ SPM</li>
                <li className="px-4">Sihat tubuh badan (Lulus Medikal Klinik Panel Jabatan Laut)</li>
                <li className="px-4">Bebas penyalahgunaan dadah</li>
                <li className="px-4">Lelaki sahaja</li>
              </div>
            </div>
          </div>
          <div className=" p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">INDUSTRI MARITIM</h>
              <h>Melangkah ke Dunia Maritim dengan Pengiktirafan Industri</h>
            </div>
            <div className="space-y-5">
              <div className="flex justify-center">
                <h className="text-justify">Meneruskan kerjaya dalam industri maritim melalui kursus Sijil Profisiensi Perkapalan - kelasi geladak & Kelasi Enjin membawa pengalaman menarik dan peluang yang mencabar. Kursus ini bukan sahaja menyediakan kemahiran teknikal dari segi mengawal enjin kapal atau tugasan dek, tetapi juga membuka pintu kepada peluang perjalanan kerjaya yang menyeronokkan. Keunikan kursus ini terletak pada pengiktirafannya daripada Jabatan Laut Malaysia, menjamin kualiti dan piawaian yang tinggi.</h>
              </div>
              <div className="grid justify-center space-y-2">
                <h className="text-justify">Dengan pakar dalam kalangan pemain industri, peserta boleh mendapatkan pandangan daripada profesional yang telah berjaya dalam bidang maritim. Pengalaman kerja dalam sektor ini bukan sahaja membina kecekapan, tetapi juga melibatkan peningkatan kemahiran kepimpinan dan keupayaan untuk menangani situasi kecemasan. Sertai kursus ini untuk memulakan perjalanan kerjaya maritim yang bermanfaat dan mendapat pengiktirafan daripada bidang industri yang penting. Kami menawarkan program kursus jangka pendek yang menjadi pilihan ramai iaitu:</h>
                <li className="px-4">Sijil Profisiensi Perkapalan - kelasi geladak & kelasi enjin</li>
                <li className="px-4">Sijil Profesional Katering Maritim</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Dengan Kursus Ini, Anda Akan Peroleh</h>
                <li className="px-4">Percuma Penginapan</li>
                <li className="px-4">Percuma Pemeriksaan Perubatan</li>
                <li className="px-4">Elaun Makan Disediakan</li>
                <li className="px-4">Pengiktirafan Antarabangsa</li>
                <li className="px-4">Kad Pelaut</li>
                <li className="px-4">Sijil Jabatan Laut</li>
                <li className="px-4">STCW Basic Training</li>
                <li className="px-4">STCW Basic Training Oil & Chemical Tanker</li>
                <li className="px-4">STCW Crowd Management</li>
                <li className="px-4">STCW Designated Security Duties</li>
                <li className="px-4">STCW Ship Security Awareness</li>
                <li className="px-4">General Aspect Seamanship Skills</li>
                <li className="px-4">Basic Rigging & Slinging</li>
                <li className="px-4">General Purpose Engine</li>
                <li className="px-4">General Purpose Deck</li>
                <li className="px-4">Softskill</li>
                <li className="px-4">Penempatan Pekerjaan</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-Syarat Kelayakan</h>
                <li className="px-4">Lelaki</li>
                <li className="px-4">Boleh membaca, mengira dan menulis</li>
                <li className="px-4">Berumur 18 hingga 35 tahun</li>
                <li className="px-4">Sihat dan tidak buta warna</li>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-6">
          <div className="p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">Dron Teknologi</h>
              <h>Melangkah ke dunia dron, cabaran teknologi, pengiktirafan, dan peluang global.</h>
            </div>
            <div className="space-y-5">
              <div className="flex justify-center">
                <h className="text-justify">Melangkah ke dalam kerjaya dalam industri teknologi dron membawa pengalaman yang menarik dengan peluang tanpa batas. Sudah semestinya pelatih akan merasai pengalaman-pengalaman yang mencabar kerana bidang ini termasuk dalam kerjaya berteknologi tinggi dan inovatif. Oleh itu, bekerjaya dalam industri ini mampu menawarkan gaji yang lumayan seiring dengan perkembangan kemahiran dan pengetahuan. Menyertai industri yang dinamik ini tidak hanya memberikan pengalaman kerja yang bermakna tetapi juga peluang untuk menyumbang kepada kemajuan global melalui penggunaan teknologi dron yang canggih dan lestari.</h>
              </div>
              <div className="grid justify-start space-y-2">
                <h className="text-justify">:</h>
                <li className="px-4">Sijil Profesional Pemasangan Paip Gas</li>
                <li className="px-4">Sijil Profesional Paip dan Jurugegas</li>
                <li className="px-4">Sijil Profesional Kulinari</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Dengan Kursus Ini, Anda Akan Dapat</h>
                <li className="px-4">Percuma Uniform PPE</li>
                <li className="px-4">NIOSH Oil & Gas Safety Passport (OGSP)</li>
                <li className="px-4">Kad CIDB</li>
                <li className="px-4">Lesen Offshore T-Bosiet OPITO</li>
                <li className="px-4">Sijil Basic Fire Watch</li>
                <li className="px-4">Medical OHD</li>
                <li className="px-4">Confined Space Entry (AESP)</li>
                <li className="px-4">Medical Offshore</li>
                <li className="px-4">Gas Pipe Installation (ABM) (High Pressure)</li>
                <li className="px-4">Jaminan Pekerjaan</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-Syarat Kelayakan</h>
                <li className="px-4">18 hingga 35 tahun</li>
                <li className="px-4">Memiliki sekurang-kurangnya PT3/ SPM</li>
                <li className="px-4">Sihat tubuh badan (Lulus Medikal Klinik Panel Jabatan Laut)</li>
                <li className="px-4">Bebas penyalahgunaan dadah</li>
                <li className="px-4">Lelaki sahaja</li>
              </div>
            </div>
          </div>
          <div className=" p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">Scaffolding</h>
              <h>Melangkah ke dunia scaffolding, keselamatan terjamin, peluang kerjaya luas</h>
            </div>
            <div className="space-y-5">
              <div className="flex justify-center">
                <h className="text-justify">Meneruskan kerjaya dalam industri pembinaan melalui kursus Sijil Profisiensi Scaffolding membawa pengalaman menarik dan peluang yang mencabar. Kursus ini bukan sahaja menyediakan kemahiran teknikal dalam memasang dan menyelenggara perancah dengan selamat, tetapi juga membuka pintu kepada peluang kerjaya yang luas. Keunikan kursus ini terletak pada pengiktirafannya daripada badan berkuasa yang diiktiraf, menjamin kualiti dan piawaian keselamatan yang tinggi.</h>
              </div>
              <div className="grid justify-center space-y-2">
                <h className="text-justify">Dengan bimbingan pakar industri, peserta kursus scaffolding memperoleh pandangan berharga daripada profesional berpengalaman. Pengalaman ini tidak hanya membina kecekapan teknikal, tetapi juga meningkatkan kemahiran keselamatan dan keupayaan menghadapi situasi kritikal. Sertai kursus ini untuk memulakan kerjaya dalam scaffolding dengan pengiktirafan dari industri pembinaan yang utama. Kami menawarkan program kursus jangka pendek yang menjadi pilihan ramai iaitu:</h>
                <li className="px-4">Sijil Profisiensi Perkapalan - kelasi geladak & kelasi enjin</li>
                <li className="px-4">Sijil Profesional Katering Maritim</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Dengan Kursus Ini, Anda Akan Peroleh</h>
                <li className="px-4">Percuma Penginapan</li>
                <li className="px-4">Percuma Pemeriksaan Perubatan</li>
                <li className="px-4">Elaun Makan Disediakan</li>
                <li className="px-4">Pengiktirafan Antarabangsa</li>
                <li className="px-4">Kad Pelaut</li>
                <li className="px-4">Sijil Jabatan Laut</li>
                <li className="px-4">STCW Basic Training</li>
                <li className="px-4">STCW Basic Training Oil & Chemical Tanker</li>
                <li className="px-4">STCW Crowd Management</li>
                <li className="px-4">STCW Designated Security Duties</li>
                <li className="px-4">STCW Ship Security Awareness</li>
                <li className="px-4">General Aspect Seamanship Skills</li>
                <li className="px-4">Basic Rigging & Slinging</li>
                <li className="px-4">General Purpose Engine</li>
                <li className="px-4">General Purpose Deck</li>
                <li className="px-4">Softskill</li>
                <li className="px-4">Penempatan Pekerjaan</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-Syarat Kelayakan</h>
                <li className="px-4">Lelaki</li>
                <li className="px-4">Boleh membaca, mengira dan menulis</li>
                <li className="px-4">Berumur 18 hingga 35 tahun</li>
                <li className="px-4">Sihat dan tidak buta warna</li>
              </div>
            </div>
          </div>
        </div>
      </section>







      <section>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-6">
          <div className="p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">Authorised Gas Tester and Entry Supervisor(AGTES)</h>
              <h>Melangkah ke dunia penguji gas dan penyelia masuk, keselamatan tinggi, pengiktirafan, dan peluang global.</h>
            </div>
            <div className="space-y-5">
              <div className="flex justify-center">
                <h className="text-justify">Kursus ini memberi latihan dan pensijilan kepada individu yang terlibat dalam pekerjaan di ruang terkurung, seperti penguji gas dan penyelia kemasukkan. Kurusus ini bertujuan untuk memastikan keselamatan ketika bekerja di ruang terkurung, termasuk mengenal pasti bahaya, menggunakan alat pengesan gas, dan mengikut prosedur kerja yang betul. Peserta kursus AGTES akan dilatih untuk memahami undang-undang berkaitan ruang terkurung, menguji gas dan mentafsir keputusan ujian, serta mengetahui langkah-langkah kecemasan. Kursus ini biasanya berlangsung selama tiga hari dan terbuka kepada pelbagai individu yang terlibat dalam pekerjaan ruang terkurung seperti jurutera,penyelia,pegawai keselamatan dan pekerja am. Untuk memenuhi syarat sebagai AGTES, seseorang perlu lulus kursus ini dan mempunyai pengalaman dalam bidang terkurung, serta kredit dalam subjek sains di peringkat SPM</h>
              </div>

              <div className="grid space-y-2">
                <h className="">Authorised Gas Tester (AGT):</h>
                <ul class="list-disc list-outside px-6">
                  <li>Melakukan ujian gas sebelum dan semasa operasi di ruang terkurung.</li>
                  <li> Mengukur kehadiran gas-gas berbahaya seperti oksigen, karbon monoksida, hidrogen sulfida, dan bahan mudah terbakar</li>
                  <li>Menggunakan peralatan pengesan gas untuk memastikan tahap keselamatan yang mencukupi</li>
                </ul>
              </div>

              <div className="grid space-y-2">
                <h className="">Entry Supervisor:</h>
                <ul class="list-disc list-outside px-6">
                  <li>Menyelia keseluruhan aktiviti kemasukan ke dalam ruang terkurung.</li>
                  <li>emastikan semua prosedur keselamatan dipatuhi, termasuk dokumen-dokumen seperti permit kemasukan (Entry Permit).</li>
                  <li>Menentukan sama ada ruang selamat untuk dimasuki dan menyelia pekerja sepanjang tempoh operasi di ruang tersebut.</li>
                </ul>
              </div>

              <div className="py-3 grid space-y-5">
                <h>Kerja di ruang terkurung membawa risiko tinggi, termasuk kekurangan oksigen atau pendedahan kepada gas beracun. Oleh itu, AGTES dilatih untuk mengenali bahaya ini dan mengambil langkah-langkah keselamatan yang diperlukan bagi mengelakkan kemalangan atau kecelakaan. AGTES adalah sebahagian daripada systems keselamatan yang penting di industri seperti pembinaan, minyak dan gas, serta loji petrokimia, di mana kerja dalam ruang terkurung adalah rutin. Latihan dan pensijilan AGTES diberikan oleh badan-badan yang diiktiraf, termasuk Jabatan Keselamatan dan Kesihatan Pekerjaan (DOSH), dan melibatkan latihan praktikal serta teori. Kursus jangka pendek yang ditawarkan oleh AGTES biasanya berkaitan dengan keselamatan dan pengurusan ruang terkurung. Antara kursus jangka pendek yang sering disebabkan adalah:</h>
              </div>

              <div className="grid space-y-2">
                <div><h className="">1. Menguji dan memantau tahap gas.</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Mengukur kepekatan gas dab memastikan tahap gas selamat</li>
                  </ul></div>
                <div><h className="">2. Mengendalikan peralatan pengesan gas</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Contoh, gas detektor. Memastikan ia berfungsi dengan betul sebelum digunakan</li>
                  </ul></div>
                <div><h className="">3. Menyediakan permit kemasukan (Permit-To-Work - PTW)</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Menyemak dan meluluskan permit</li>
                    <li>Mengesahkan bahawa semua langkah keselamatan telah diambil</li>
                  </ul></div>
                <div><h className="">4. Memberi taklimat keselamatan kepada pekerja</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Mengadakan sesi taklimat keselamtan</li>
                    <li>Memastikan semua pekerja memahami risiko</li>
                  </ul></div>
                <div><h className="">5. Menyelia kemasukkan dan aktiviti pekerja di ruang terkurung</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Mengawasi pekerja</li>
                    <li>engesan sebarang perubahan bahaya</li>
                  </ul></div>
                  <div><h className="">6. Memastikan penggunaan peralatan perlindungan diri(PPE)</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Menyemak keberkesanan dan kebolehlaksanaan PPE</li>
                  </ul></div>
                  <div><h className="">7. Menjalankan penilaian risiko</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Mengambil langkah mitigasi yang sesuai</li>
                  </ul></div>
                  <div><h className="">8. Menangani kecemasan dan prosedur peneyelamatan</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Merancang dan melaksanakan prosedur kecemasan</li>
                    <li>Membuat keputusan segera</li>
                  </ul></div>
                  <div><h className="">9. Menyediakan laporan keselamatan</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Merekod keputusan pengujian gas</li>
                  </ul></div>
                  <div><h className="">10. Bekerjasama dengan pasukan keselamatan lain</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Menyelaras tindakkan keselamatan</li>
                  </ul></div>
              </div>

              <div className="grid space-y-2">
                <h className="">Dengan Kursus Ini, Anda Akan Dapat:</h>
                <li className="px-4">Penginapan disediakan secara percuma</li>
                <li className="px-4">Penempatan kerja disediakan</li>
                <li className="px-4"> Sijil industri yang diiktiraf Jabatan Keselamatan dan Kesihatan Pekerjaan (DOSH)</li>
                <li className="px-4">Bill elektrik dan bil air disediakan secara percuma untuk mereka yang menginap di asrama</li>
                <li className="px-4">Percuma makan dan minum tiga kali sehari semasa latihan</li>
                <li className="px-4">Percuma basic uniform PPE(helmet keselamatan & kasut keselamatan)</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Antara Sijil yang diiktiraf:</h>
                <li className="px-4">Kursus Authorised Gas Tester And Entry Supervisor (AGTES)</li>
                <li className="px-4">Authorised Entrant Standby Person(AESPTM)</li>
                <li className="px-4">NIOSH TM Safety Passport(NTMSP)</li>
                <li className="px-4">CA2C</li>
                <li className="px-4">Ocupational Safety & Health Coordinator(OSHC)</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-Syarat Kelayakan</h>
                <li className="px-4">18 tahun ke atas</li>
                <li className="px-4">Minimum SPM (kredit subjek sains, contoh kimia, fizik atau setaraf)</li>
                <li className="px-4">Sihat tubuh badan</li>
                <li className="px-4">Bebas penyalahgunaan dadah</li>
                <li className="px-4">Tiada rekod jenayah</li>
                <li className="px-4">Penguasaan Bahasa Melayu dan Bahasa inggeris yang baik</li>
              </div>
            </div>
          </div>
          <div className=" p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">Non-destructive Testing(Radiographic Testing)(NDT-RT)</h>
              <h>Melangkah ke kemahiran tinggi, peluang luas.</h>
            </div>
            <div className="py-3 grid space-y-5">
                <h>Kursus ini merupakan salah satu kaedah pemeriksaan yag digunakan untuk menilai integriti dan kualiti bahan atau struktur tanpa merosakkannya. Radiographic Testing(RT) menggunakan sinar-X atau sinar gamma untuk mengesan kecacatan dalaman seperti retakan, porosti atau kekosongan dalam bahan seperti logam atau kimpalan:</h>
              </div>
            <div className="space-y-5">
              <div className="flex justify-start">
                <h className="text-justify">Konsep Utama NDT-RT:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="">1. Prinsip Ujian:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>RT melibatkan penggunaan sumber radiasi (sinar-X atau sinar gamma) yang dipancarkan melalui objek atau bahan diuji. Di sebalik bahan tersebut, sebuah filem radiografi atau detector digital akan menagkap imej yang terbentuk oleh penyerapan radiasi oleh bahan tersebut.</li>
                  </ul></div>
                <div><h className="">2. Imej Radiografi:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Imej yang terhasil menunjukkan perbezaan dalam ketebalan atau ketumpatan bahan. Kecacatan dalaman seperti retak, lubang, atau kawasann yang tidak seragam akan muncul dalam imej sebagai kawasan gelap atau terang, bergantung pada jenis kecacatan atau ketumpatan bahan.</li>
                  </ul></div>
                <div><h className="">3. Analisis dan Penilaian:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Pakar radiografi (Radiographic Interpreter) akan menilai imej untuk mengenal pasti kecacatan yang mungkin ada. Mereka menggunakan panduan dan piawaian yang ditetapkan, seperti kod ASME atau ISO, untuk menilai sama ada kecacatan tersebut boleh diterima atau tidak.</li>
                  </ul></div>
              </div>

              <div className="flex justify-start">
                <h className="text-justify">Ciri Utama NDT-RT:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="font-bold">Radiografi Sinar-X atau Gamma:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Sinar dipancarkan melalui objek, dan detektor atau filem menangkap imej yang menunjukkan sebarang kecacatan.</li>
                  </ul></div>
                <div><h className="font-bold">Tanpa merosakkan bahan:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Berbeza dengan kaedah ujian lain, NDT-RT tidak memerlukan pemotongan atau perubahan pada bahan yang diuji, menjadikannya ideal untuk pemeriksaan kualiti pada komponen yang mahal atau kritikal.</li>
                  </ul></div>
              </div>

              <div className="flex justify-start">
                <h className="text-justify">Kelebihan NDT-RT:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="font-bold">Tanpa Kerosakkan:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Bahan yang diuji tidak perlu dirosakkan atau dipotong, yang menjimatkan kos dan mengekalkan integriti bahan.</li>
                  </ul></div>
                <div><h className="font-bold">Boleh digunakan untuk pelbagai bahan:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>RT digunakan untuk memeriksa kimpalan, logam, paip, dan pelbagai struktur yang digunakan dalam industri seperti pembinaan, aeroangkasa, minyak dan gas, serta sektor pembuatan</li>
                  </ul></div>
                  <div><h className="font-bold">Kebolehan Mengesan Kecacatan Dalaman:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Kursus ini sangat berguna dalam mengenal pasti kecacatan yang tidak dapat dilihat dengan mata kasar atau kaedah ujian permukaan.</li>
                  </ul></div>
              </div>
              <div className="py-3 grid space-y-5">
                <h>Kursus jangka pendek NDT-RT biasanya dirancang untuk memberikan pelatihan praktis dan teori agar peserta dapat menguasai teknik-teknik tersebut tersebut secara efektif. Berikut adalah beberapa kursus jangka pendek yang sering ditawarkan:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="">1. Kursus Pengantar NDT:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Fokus pada konsep dasar NDT, Teknik-teknik umum, dan aplikasi praktis.</li>
                    <li>Biasanya merangkumi pengenalan kepada pelbagai kaedah NDT seperti ultrasonik, magnetik partikel, dan penetran cair.</li>
                  </ul></div>
                <div><h className="">2. Kursus Radiographic Testing(RT):</h>
                  <ul class="list-disc list-outside px-6">
                    <li> Mengajarkann prinsip dasar radiografi, termasuk penggunaan sinar-X atau sinar gamma untuk pengujian material.</li>
                    <li> Termasuk pelatihan dalam Teknik pembuatan gambar, interpretasi hasil, dan keamanan radiasi.</li>
                  </ul></div>
                <div><h className="">3. Kursus Teknik Spesifik:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Fokus pada teknik tertentu seperti ultrasonik, magnetik partikel, atau penetran cair</li>
                    <li>Memberikan pelatihan mendalam tentang kaedah dan aplikasi teknik tersebut</li>
                  </ul></div>
                  <div><h className="">4. Kursus Sertifikasi NDT:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Ditujukan untuk mempersiapkan peserta untuk ujian sertifikasi, seperti level 1, ll atau lll dalam pelbagai kaedah NDT.</li>
                    <li>Kursus ini sering kali merangkumi pelatihan intensif, simulasi ujian dan pembelajaran mengenai standart industri.</li>
                  </ul></div>
                  <div><h className="">5. Kursus Keselamatan Radiasi:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Mengajarkan praktik terbaik dallam melindungi diri dan orang lain dari radiasi yang digunakan dalam radiagraphic testing.</li>
                    <li>Termasuk penggunaan alat pelindung dan prosedur keselamatan.</li>
                  </ul></div>
              </div>
              <div className="grid space-y-2">
                <h className="">Dengan Kursus ini, anda akan peroleh:</h>
                <li className="px-4">Penempatan pekerjaan dan latihan diberikan</li>
                <li className="px-4">Percuma makan dan minum tiga kali sehari semasa latihan</li>
                <li className="px-4">Percuma penginapan</li>
                <li className="px-4">Percuma basic uniform PPE</li>
                <li className="px-4">Non-Destructive Testing - Radiography Testing(NDT-RT) Level2- Direct Access</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-syarat kelayakan:</h>
                <li className="px-4">Berumur 18 hingga 35 tahun</li>
                <li className="px-4">Berstatus bujang</li>
                <li className="px-4">Sihat tubuh badan</li>
                <li className="px-4">Bebas penyalahgunaa dadah</li>
                <li className="px-4">Lelaki: Memiliki 5M(Membaca, Menulis, Mengira, Minat dan Mampu)</li>
                <li className="px-4">Perempuan: Minimum SPM</li>
              </div>
            </div>
          </div>
        </div>
      </section>











      

      <section>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-6">
          <div className="p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">Fiber Optic Splicer Technician(FOST)</h>
              <h>Melangkah ke dunia penguji gas dan penyelia masuk, keselamatan tinggi, pengiktirafan, dan peluang global.</h>
            </div>
            <div className="space-y-5">
              <div className="flex justify-center">
                <h className="text-justify">Kursus ini bertanggunjawab untuk menyambung dan memastikan sambungan gentian optik berfungsi dengan betul dalam systems komunikasi optik. Gentian optik adalah teknologi yang menggunakan kabel yang diperbuat daripada serat kaca atau plastik untuk menghantar data dalam bentuk Cahaya, dan tugas utama juruteknik ini adalah memastikan bahawa sambungan gentian optik bebas daripada kerosakkan dan dapat memindahkan data dengan cekap.</h>
              </div>

              <div className="grid space-y-2">
                <h className="">Peranan dan kepentingan:</h>
                <ul class="list-disc list-outside px-6">
                  <li><span className="font-bold">Penting dalam Infrastruktur Telkomunikasi:</span>Fibre optik splider technicians memainkan peranan kritikal dalam membina, menyambung, dan menyelenggara infrastruktur komunikasi modern, termasuk internet berkelajuan tinggi, kabel TV, dan rangkaian telefon.</li>
                  <li><span className="font-bold">Kecekapan Penghantaran Data:</span>Kerja mereka memastikan bahawa penghantaran data melalui gentian optikadalah cekap, mengurangkan kelewatan atau kehilangan isyarat.</li>
                </ul>
              </div>
              <div className="grid space-y-2">
                <h className="font-bold">Kemahiran yang diperlukan:</h>
                <ul class="list-disc list-outside px-6">
                  <li><span className="font-bold">Kemahiran Teknikal:</span>Kemahiran dalam menggunakan peralatan penyambungan dan pengujian optik.</li>
                  <li><span className="font-bold">Ketelitian:</span>Proses splicing memerlukan ketepatan tinggi untuk memastikan penyambungan yang sempurna</li>
                  <li><span className="font-bold">Pemahaman Mengenai Sistem Komunikasi:</span>Pengetahuan dalam sistems rangkaian dan pengendalian gentian optik dalam pelbagai aplikasi.</li>
                </ul>
              </div>
              <div className="grid space-y-2">
                <h className="font-bold">Kelebihan program:</h>
                <ul class="list-disc list-outside px-6">
                  <li> Majikan telah menawarkan pekerjaan sebelum peserta tamat latihan.</li>
                  <li> Keutamaan bekerja di lokaliti setempat.</li>
                  <li>Memberi peluang kedua kepada remaja yang gagal dalam akademik.</li>
                </ul>
              </div>
              <div className="grid space-y-2">
                <h className="font-bold">Berikut adalah sijil yang diiktiraf dalam kursus ini:</h>
                <ul class="list-disc list-outside px-6">
                  <li>NIOSH TM Safety Passport.</li>
                  <li>NIOSH TENAGA Safety Passport</li>
                  <li>Authorised Entrant and Standby Person FOR TM Contractor (AESPTM).</li>
                  <li>TM-CA1C</li>
                  <li>TM-CA2C</li>
                  <li>Fibre Optic Splicing</li>
                  <li>Basic Occupational First Aid (BOFA)</li>
                  <li>Pole Proficiency</li>
                </ul>
              </div>
              <div className="grid space-y-2">
                <h className="font-bold">Badan pensijilan yang terlibat:</h>
                <ul class="list-disc list-outside px-6">
                  <li>NIOSH</li>
                  <li>TM</li>
                  <li>SRC GLOBAL RESOURCES</li>
                </ul>
              </div>
              <div className="grid space-y-2">
                <h className="font-bold">Syarat kelaykan:</h>
                <ul class="list-disc list-outside px-6">
                  <li>Minimum SPM</li>
                  <li>Berumur 18 tahun ke atas</li>
                  <li>Lelaki</li>
                  <li>Tidak rabun warna</li>
                  <li>Tidak mempunyai rekod jenayah</li>
                  <li>Sihat tubuh badan</li>
                  <li>Bebas penyalahgunaan dadah</li>
                </ul>
              </div>


              <div className="grid space-y-2">
                <h className="">Dengan Kursus Ini, Anda Akan Dapat:</h>
                <li className="px-4">Penginapan disediakan secara percuma</li>
                <li className="px-4">Penempatan kerja disediakan</li>
                <li className="px-4"> Sijil industri yang diiktiraf Jabatan Keselamatan dan Kesihatan Pekerjaan (FOST)</li>
                <li className="px-4">Bill elektrik dan bil air disediakan secara percuma untuk mereka yang menginap di asrama</li>
                <li className="px-4">Percuma makan dan minum tiga kali sehari semasa latihan</li>
                <li className="px-4">Percuma basic uniform PPE(helmet keselamatan & kasut keselamatan)</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Antara Sijil yang diiktiraf:</h>
                <li className="px-4">Kursus Authorised Gas Tester And Entry Supervisor (AGTES)</li>
                <li className="px-4">Authorised Entrant Standby Person(AESPTM)</li>
                <li className="px-4">NIOSH TM Safety Passport(NTMSP)</li>
                <li className="px-4">CA2C</li>
                <li className="px-4">Ocupational Safety & Health Coordinator(OSHC)</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-Syarat Kelayakan</h>
                <li className="px-4">18 tahun ke atas</li>
                <li className="px-4">Minimum SPM (kredit subjek sains, contoh kimia, fizik atau setaraf)</li>
                <li className="px-4">Sihat tubuh badan</li>
                <li className="px-4">Bebas penyalahgunaan dadah</li>
                <li className="px-4">Tiada rekod jenayah</li>
                <li className="px-4">Penguasaan Bahasa Melayu dan Bahasa inggeris yang baik</li>
              </div>
            </div>
          </div>
          <div className=" p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">FIBRE OPTIC TECHNICIAN(FOT)</h>
              <h>Melangkah ke kemahiran tinggi, peluang luas.</h>
            </div>
            <div className="py-3 grid space-y-5">
                <h>Kursus ini bertanggungjawab untuk memasang, menyelenggara, menguji, dan membaiki sistem gentian optik yang digunakan untuk penghantaran data berkelajuan tinggi. Gentian optik merupakan kabel yang diperbuat daripada kaca atau plastic halus yang menghantar isyarat cahaya, digunakan secara meluas dalam telekomunikasi, internet, dan rangkaian kabel TV</h>
              </div>
            <div className="space-y-5">
              <div className="flex justify-start">
                <h className="text-justify">Konsep Utama:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="">1. Pemasangan Kabel Gentian Optik:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Juruteknik bertugas untuk memasang kabel gentian optik di pelbagai persekitaran, seperti di bawah tanah, di dalam bangunan, atau di menara komunikasi. Mereka memastikan pemasangan dilakukan dengan betul untuk memaksimumkan kecekapan penghantaran data.</li>
                  </ul></div>
                <div><h className="">2. Penyambungan Gentian Optik(Splicing):</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Penyambungan (splicing) adalah proses menyambungkan dua hujung gentian optik untuk memastikan kesinambungan dalam sistem. Teknik utama termasuk fusion splicing dan mechanical splicing, di mana juruteknik memastikan bahawa penyambungan ini dilakukan dengan tepat untuk mengelakkan kehilangan isyarat</li>
                  </ul></div>
                <div><h className="">3. Pengujian dan Penyelesaian Masalah:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Juruteknik menggunakan peralatan seperti Optical Time-Domain Reflectometer (OTDR) dan power meters untuk mengesan dan menganalisis isyarat dalam kabel gentian optik. Mereka menguji kekuatan isyarat dan mencari punca gangguan atau kehilangan data</li>
                  </ul></div>
                  <div><h className="">4. Penyelenggaraan dan Pembaikan:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Juruteknik menggunakan peralatan seperti Optical Time-Domain Reflectometer (OTDR) dan power meters untuk mengesan dan menganalisis isyarat dalam kabel gentian optik. Mereka menguji kekuatan isyarat dan mencari punca gangguan atau kehilangan data.</li>
                  </ul></div>
                  <div><h className="">5. Pemahaman Terhadap Standart Indstri:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Juruteknik menggunakan peralatan seperti Optical Time-Domain Reflectometer (OTDR) dan power meters untuk mengesan dan menganalisis isyarat dalamkabel gentian optik. Mereka menguji kekuatan isyarat dan mencari punca gangguan atau kehilangan data.</li>
                  </ul></div>
                  <div><h className="">6. Bekerja dengan Peralatan Perlindungan Diri (PPE):</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Juruteknik menggunakan peralatan seperti Optical Time-Domain Reflectometer (OTDR) dan power meters untuk mengesan dan menganalisis isyarat dalam kabel gentian optik. Mereka menguji kekuatan isyarat dan mencari punca gangguan atau kehilangan data.</li>
                  </ul></div>
              </div>
              <div className="py-3 grid space-y-5">
                <h>Terdapat pelbagai kursus jangka pendek yang ditawarkan untuk kursus ini bagi membangunkan kemahiran teknikal dan profesional mereka. Berikut adalah beberapa kursus yang biasanya tersedia:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="">1. Pemasangan, Penyambungan, Ujian Dan Penyelenggaraan Fiber:</h>
                  <ul class="list-disc list-outside px-6">
                    <li> Fiber Optic Communication Technology.</li>
                    <li> Fiber Optic Cables and Connector</li>
                    <li> Fiber Optic Test and Measurement</li>
                    <li> Optical Fiber Installation</li>
                    <li> Fiber Splicing</li>
                    <li> OTDR Test</li>
                  </ul></div>
                <div><h className="">2. Pemasangan, Penyambungan, Ujian Dan Penyelenggaraan Cooper:</h>
                  <ul class="list-disc list-outside px-6">
                    <li> Cooper Communication Technology.</li>
                    <li> Cooper Cables and Connector.</li>
                    <li> Cooper Test and Measurement.</li>
                    <li> Cooper Installation.</li>
                    <li> Testing.</li>
                    <li> Terminology and safety equipment.</li>
                  </ul></div>
                <div><h className="">3. Amali Pemasangan Dan Demo</h></div>
                <div><h className="">4. Authorised Entrant and Standby Person for Confined Space for Telekom Malaysia(AESPTM)</h></div>
                <div><h className="">5. Niosh TM Safety Passport(NTMSP)</h></div>
                <div><h className="">6.  Working At Height (Pole Proficiency)</h></div>
                <div><h className="">7.  Basic Occupational First Aid (BOFA)</h></div>
                <div><h className="">8.  Program Kerohanian dan Motivasi</h></div>
              </div>
              <div><h className="">Berikut adalah sijil yang diiktiraf dalam kursus ini:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>NIOSH TM Safety Passport</li>
                    <li>Authorised Entrant and Standby Person FOR TM Contractor (AESPTM)</li>
                    <li>TM – CA1C</li>
                    <li>TM – CA2C</li>
                    <li>TM – CA2A</li>
                    <li>Basic Occupational First Aid (BOFA)</li>
                    <li>Pole Proficiencly</li>
                  </ul></div>
                <div><h className="">Badan pensijilan yang terlibat:</h>
                <ul class="list-disc list-outside px-6">
                  <li>NIOSH</li>
                  <li>TM</li>
                  <li>SRC Global Resources</li>
                </ul></div>
                <div><h className="">Syarat kelayakan:</h>
                <ul class="list-disc list-outside px-6">
                  <li>Minimum SPM</li>
                  <li>Berumur 18 tahun dan ke atas</li>
                  <li>Lelaki</li>
                  <li>Tidak rabun warna</li>
                  <li>Tiada rekod jenayah</li>
                  <li>Sihat tubuh badan</li>
                  <li>Bebas penyelahgunaan dadah</li>
                </ul></div>

              <div className="flex justify-start">
                <h className="text-justify">Ciri Utama NDT-RT:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="font-bold">Radiografi Sinar-X atau Gamma:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Sinar dipancarkan melalui objek, dan detektor atau filem menangkap imej yang menunjukkan sebarang kecacatan.</li>
                  </ul></div>
                <div><h className="font-bold">Tanpa merosakkan bahan:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Berbeza dengan kaedah ujian lain, NDT-RT tidak memerlukan pemotongan atau perubahan pada bahan yang diuji, menjadikannya ideal untuk pemeriksaan kualiti pada komponen yang mahal atau kritikal.</li>
                  </ul></div>
              </div>
              <div className="flex justify-start">
                <h className="text-justify">Kelebihan NDT-RT:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="font-bold">Tanpa Kerosakkan:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Bahan yang diuji tidak perlu dirosakkan atau dipotong, yang menjimatkan kos dan mengekalkan integriti bahan.</li>
                  </ul></div>
                <div><h className="font-bold">Boleh digunakan untuk pelbagai bahan:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>RT digunakan untuk memeriksa kimpalan, logam, paip, dan pelbagai struktur yang digunakan dalam industri seperti pembinaan, aeroangkasa, minyak dan gas, serta sektor pembuatan</li>
                  </ul></div>
                  <div><h className="font-bold">Kebolehan Mengesan Kecacatan Dalaman:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Kursus ini sangat berguna dalam mengenal pasti kecacatan yang tidak dapat dilihat dengan mata kasar atau kaedah ujian permukaan.</li>
                  </ul></div>
              </div>
              <div className="py-3 grid space-y-5">
                <h>Kursus jangka pendek NDT-RT biasanya dirancang untuk memberikan pelatihan praktis dan teori agar peserta dapat menguasai teknik-teknik tersebut tersebut secara efektif. Berikut adalah beberapa kursus jangka pendek yang sering ditawarkan:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="">1. Kursus Pengantar NDT:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Fokus pada konsep dasar NDT, Teknik-teknik umum, dan aplikasi praktis.</li>
                    <li>Biasanya merangkumi pengenalan kepada pelbagai kaedah NDT seperti ultrasonik, magnetik partikel, dan penetran cair.</li>
                  </ul></div>
                <div><h className="">2. Kursus Radiographic Testing(RT):</h>
                  <ul class="list-disc list-outside px-6">
                    <li> Mengajarkann prinsip dasar radiografi, termasuk penggunaan sinar-X atau sinar gamma untuk pengujian material.</li>
                    <li> Termasuk pelatihan dalam Teknik pembuatan gambar, interpretasi hasil, dan keamanan radiasi.</li>
                  </ul></div>
                <div><h className="">3. Kursus Teknik Spesifik:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Fokus pada teknik tertentu seperti ultrasonik, magnetik partikel, atau penetran cair</li>
                    <li>Memberikan pelatihan mendalam tentang kaedah dan aplikasi teknik tersebut</li>
                  </ul></div>
                  <div><h className="">4. Kursus Sertifikasi NDT:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Ditujukan untuk mempersiapkan peserta untuk ujian sertifikasi, seperti level 1, ll atau lll dalam pelbagai kaedah NDT.</li>
                    <li>Kursus ini sering kali merangkumi pelatihan intensif, simulasi ujian dan pembelajaran mengenai standart industri.</li>
                  </ul></div>
                  <div><h className="">5. Kursus Keselamatan Radiasi:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Mengajarkan praktik terbaik dallam melindungi diri dan orang lain dari radiasi yang digunakan dalam radiagraphic testing.</li>
                    <li>Termasuk penggunaan alat pelindung dan prosedur keselamatan.</li>
                  </ul></div>
              </div>
              <div className="grid space-y-2">
                <h className="">Dengan Kursus ini, anda akan peroleh:</h>
                <li className="px-4">Penempatan pekerjaan dan latihan diberikan</li>
                <li className="px-4">Percuma makan dan minum tiga kali sehari semasa latihan</li>
                <li className="px-4">Percuma penginapan</li>
                <li className="px-4">Percuma basic uniform PPE</li>
                <li className="px-4">Non-Destructive Testing - Radiography Testing(NDT-RT) Level2- Direct Access</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-syarat kelayakan:</h>
                <li className="px-4">Berumur 18 hingga 35 tahun</li>
                <li className="px-4">Berstatus bujang</li>
                <li className="px-4">Sihat tubuh badan</li>
                <li className="px-4">Bebas penyalahgunaa dadah</li>
                <li className="px-4">Lelaki: Memiliki 5M(Membaca, Menulis, Mengira, Minat dan Mampu)</li>
                <li className="px-4">Perempuan: Minimum SPM</li>
              </div>
            </div>
          </div>
        </div>
      </section>











      <div className="py-8 lg:py-10 md:[height:80px]"></div>
      <Contactus />
      <div className="py-8 lg:py-10 md:[height:80px]"></div>

      <section2>
        <div className="hidden lg:grid-cols-3 md:grid grid-cols-3 gap-6 px-6">
          <card1 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">1</h>
              <h>Program-program yang dipilih selaras dengan Dasar Ekonomi Digital Negara.</h>
            </div>
          </card1>
          <card2 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">2</h>
              <h>Berkolaborasi dengan IPT yang mempunyai ekosistem pembelajaran yang lengkap.</h>
            </div>
          </card2>
          <card3 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">3</h>
              <h>Bidang-bidang yang ditawarkan mengikut pasaran kerja terkini.</h>
            </div>
          </card3>
        </div>
        <div className="hidden  md:grid grid-cols-2 lg:grid grid-cols-2 gap-5 p-6">
          <card4 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">4</h>
              <h>Personaliti dan potensi pelajar diambil kira dengan bidang kerjaya yang dipilih.</h>
            </div>
          </card4>
          <card5 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">5</h>
              <h>Tenaga pengajar yang terdiri dari pakar industri masing-masing.</h>
            </div>
          </card5>
        </div>
      </section2>
      <div>
        <Footer />
      </div>
    </main>
  )
}

export default misa