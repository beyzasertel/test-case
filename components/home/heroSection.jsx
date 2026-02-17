import Button from "../common/Button";
import SearchBar from "../common/SearchBar";

export default function HeroSection({}) {
  return (
    <div className="bg-hero bg-cover bg-center py-4">
      <div className="container w-full flex justify-end items-center gap-4 py-4">
        <Button>Kayıt Ol</Button>
        <Button>Giriş Yap</Button>
      </div>

      <div className="flex items-center flex-col gap-2 p-12">
        <img src="/images/logo-find-developer.svg" alt="logo" />
        <img src="/images/logo-find-teammate.svg" alt="logo" />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-start justify-center gap-4">
          <div className="flex-1 min-w-0">
            <SearchBar />
          </div>

          <div className="flex flex-col items-center">
            <Button variant="image">&nbsp;</Button>

            <a href="#" className="mt-2 text-sm text-white underline">
              Detaylı Arama
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
