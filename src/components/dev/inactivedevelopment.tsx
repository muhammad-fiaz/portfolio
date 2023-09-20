import Section from '../structure/section';
import Container from '../structure/container';
import { Player } from "@lottiefiles/react-lottie-player";

import css from '../../../assets/styles/scss/sections/projects/featured.module.scss';
import React from "react";

interface InactivedevelopmentProps {
	spacing: string[];
}

export default function Inactivedevelopment({ spacing }: InactivedevelopmentProps) {
	return (
		<Section classProp={css.hasBg}>
			<Container spacing={spacing}>
				<div className={css.centeredContainer}>
					<div style={{
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
						<div className={css.centeredContent}>
							<Player
								className="construction-anim-player"
								autoplay
								loop
								src="/lottie/constuction.json"
								style={{
									width: "60%",
									height: "60%",
									position: 'relative',
									zIndex: "100"

								}}
							/>
							<h2 className="centered">Currently Under Development!</h2>
						</div>
						<div className="area" >
							<ul className="circles">
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div >
					</div>
				</div>

			</Container>
			<style jsx>{`
        .centered {
          display: flex;
          justify-content: center;
          align-items: center;
			text-align: center;
			text-space: nowrap;
        }
      `}</style>
			<div className={css.bgContainer}>
        <span className={css.orbitalBg}>
          <span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
          <span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
          <span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
        </span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}
