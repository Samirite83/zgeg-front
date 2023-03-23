import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div
      className="hero min-h-screen snap-center"
      style={{
        backgroundImage: `url("https://cdn.discordapp.com/attachments/950684466760794142/1086278414127857664/OSBC_Marvin_create_a_bonobo_soldier_with_mk18_weapon_f0d27b65-51de-4270-9d44-b2be88794be5.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex flex-col text-center text-neutral-content">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://cdn.discordapp.com/attachments/950684466760794142/1086287192319606884/MADssense_vectorized_logo_badge_monkey_war_soldier_squad_game_a510466c-3812-42ae-8da4-bf71f76f14dd.png" />
          </div>
        </div>
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Zealous Gaming Esport Group
          </h1>
          <p className="mb-5">
            Une équipe expérimentée, pour des games de qualité !
          </p>
          <button className="btn-primary btn">Stats</button>
        </div>
      </div>
    </div>
  );
}
