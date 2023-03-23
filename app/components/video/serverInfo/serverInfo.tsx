import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ServerInfo() {
  return (
    <div className="h-auto w-full lg:h-full lg:w-full">
      <div className="stats flex grow flex-col shadow lg:flex-row lg:flex-nowrap ">
        <div className="stat place-items-center">
          <div className="stat-title">Serveur</div>
          <div className="stat-value text-primary">Online</div>
        </div>
        <div className="divider lg:invisible">███</div>
        <div className="stat place-items-center">
          <div className="stat-title">Match en cours</div>
          <div className="stat-value text-primary">Narva AAS v2</div>
        </div>
        <div className="divider lg:invisible">███</div>
        <div className="stat place-items-center">
          <div className="stat-title">Joueurs en ligne</div>
          <div className="stat-value text-primary">80</div>
          <div className="stat-desc text-primary-focus">1050 enregistrés</div>
        </div>
      </div>
    </div>
  );
}
