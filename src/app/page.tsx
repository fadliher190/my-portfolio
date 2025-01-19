import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 min-h-96">
          <div className="col-span-1 p-4">
            <TypingEffect
              texts={["Selamat Datang Di Website Portfolio Saya","Membuat aplikasi berkualitas, solusi tepat guna."," Jelajahi karya terbaik saya di sini."]}
              speed={100}
              delay={2000}
              className={"text-6xl font-black w-full"}
            />
          </div>
          <div className="col-span-1"></div>
        </div>
        <div className="grid grid-cols-2  ">
          <div className="col-span-2 p-4 text-xl font-bold">
            <div className="text-lg">
              Overview Skill
            </div>
            <div className="grid grid-cols-2 font-normal" >
              <div className="col-span-1">Technical Skills</div>
              <div className="col-span-1">Analytical Skills</div>
              <div className="col-span-1">Design Skills</div>
              <div className="col-span-1">Management Skills</div>
              <div className="col-span-1">Speciadivzed Skills</div>
              <div className="col-span-1">Soft Skills</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full text-center py-6">&copy; 2025 Fadli Hermawan, All Right Reserved!</footer>
    </div>
  );
}
