// import Layout from '@/layouts/Layout.astro';
// import { Image } from "astro:assets";
import  Image  from "next/image";
import NokiaImage from '../assets/Nokia.png';
import NokiaLowImage from '../assets/NokiaLow.png';
import BusinessLogic from "../components/BusinessLogic";

export default function Home() {
  const code  = '12';
  const replay = ''
  return (
    <div>
      <main>
		<div className="background"/>
		<div className="container">
			<div className="made-by">made by <a target="_blank" href="https://drizzle.team/">drizzle.team</a></div>
			<div className="mobile-phone">
				<Image src={NokiaImage} alt="nokia" />
				<Image className="lq" src={NokiaLowImage} alt="nokia-lq" />
				<div className="screen">
					<div className="info-line">
						<div id="score">
							0000
						</div>
						<div className="countdown hidden">
							<span id="countdown">20</span>
							<div id="superfood-area">
								<canvas id="superfood-canvas" />
							</div>
						</div>
					</div>
					<div style={{border: "4px solid #000"}}>
						<div id="game-area">
							<canvas id="game-canvas"></canvas>
							<div className="game-start-screen">
									<div id="change-difficulty"><span id="game-difficulty">Hard</span></div>
									<div id="start-game">Play</div>
									<div id="leaderboard-button">Leaderboard</div>
							</div>
							<div className="game-loading-screen hidden">
								<div>Loading...</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BusinessLogic code={code} replaySlug={replay} />
		</div>
	</main>
    </div>
  );
}