import { Container, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Banner = () => {
	return (
		<Container className="min-w-full p-0 h-screen lg:h-auto">
			<div className="lg:relative flex flex-col lg:flex-row justify-center lg:justify-between items-center">
				<Image
					className="absolute top-0 left-0 -z-10"
					src={"/res-blue-bg.png"}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "100%" }}
					alt="res-blue-bg"
				/>

				{/* SVG Element */}
				<div className="mt-[121px] lg:mt-52 z-10 mr-auto">
					<svg
						width="400"
						height="450"
						viewBox="0 0 854 978"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-52 sm:w-96 lg:w-[854px] h-auto"
					>
						<rect
							x="-124"
							width="978"
							height="978"
							fill="url(#pattern0_88_1118)"
						/>
						<defs>
							<pattern
								id="pattern0_88_1118"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									xlinkHref="#image0_88_1118"
									transform="scale(0.000488281)"
								/>
							</pattern>
							<image
								id="image0_88_1118"
								width="2048"
								height="2048"
							/>
						</defs>
					</svg>
				</div>

				<Text className="font-bold text-5xl lg:text-7xl text-white -mt-24 pr-10 ml-auto lg:mt-24 text-center text-nowrap lg:text-right lg:mr-52">
					احجز الآن
				</Text>
			</div>
		</Container>
	);
};

export default Banner;