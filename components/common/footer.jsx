import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Footer() {
  return (
    <footer className="bg-dark-grey text-white text-sm">
      <div className="mx-auto max-w-7xl px-6 py-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <p className="whitespace-nowrap">®2020 Finddeveloper.net</p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#">Gizlilik Merkezi</a>
            <span>|</span>
            <a href="#">Çerezler</a>
            <span>|</span>
            <a href="#">Gizlilik</a>
            <span>|</span>
            <a href="#">Şartlar</a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#">Finddeveloper’da Çalışmak</a>
            <span>|</span>
            <a href="#">Hakkımızda</a>
            <span>|</span>
            <a href="#">Yardım Merkezi</a>
          </div>

          <LanguageSwitcher />
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src="/images/iskur-logo.png"
            alt="İŞKUR"
            className="w-20 shrink-0"
          />

          <p className="leading-relaxed text-gray-200 max-w-xl">
            Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak
            31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere,
            Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar
            uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı
            kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin
            edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına
            başvurabilirsiniz. Diğer iller için tıklayın. Türkiye İş Kurumu
            İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye İş Kurumu İstanbul
            Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi:
            <br />
            0216 523 90 26
          </p>
        </div>
      </div>
    </footer>
  );
}
