import { Container, Text, Group } from "@mantine/core";

const Banner = () => {
	return (
		<Container className="min-w-full bg-gradient-to-r from-[#1987d9] to-[#1a3698] overflow-hidden">
			<Group className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center mt-20 lg:mt-40 relative">
				<div className="absolute left-[-30%] md:left-[-15%] lg:left-[-9%] right-[54%] lg:top-[15%] top-[20%] bottom-[-80%] bg-[rgba(217,217,217,0.71)] rounded-full w-72 h-72 lg:w-auto lg:h-auto" />

				{/* SVG Container */}
				<div className="z-20 mr-auto -mb-[70px] lg:mr-0 lg:-mb-0">
					<svg
						width="150"
						height="300"
						viewBox="0 0 225 648"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-36 lg:w-[225px] h-auto"
					>
						<g clipPath="url(#clip0_88_1258)">
							<path
								d="M153.081 611.828C153.081 611.828 150.382 631.903 153.029 644.262C153.815 647.949 157.01 647.795 160.683 647.881C172.521 648.102 206.158 647.966 218.901 647.915C222.455 647.898 225.444 641.309 224.932 637.792C224.18 632.671 222.865 626.457 200.469 623.658C193.704 622.822 185.299 610.36 185.299 610.36L153.081 611.828Z"
								fill="#EBEBEB"
							/>
							<path
								d="M30.2881 611.094L23.1132 636.512C21.5416 642.077 25.7269 647.607 31.5181 647.607H56.0151C61.772 647.607 65.9403 642.145 64.437 636.597L57.0913 609.473L30.2881 611.094Z"
								fill="#EBEBEB"
							/>
							<path
								d="M29.9806 248.166C24.7874 245.776 10.5231 299.905 10.0106 302.637C0.102442 355.981 6.95272 412.807 9.97641 466.595C12.1459 505.379 20.7387 562.478 24.2578 601.193C24.8386 607.595 23.7111 613.33 30.1514 613.365L58.27 613.706C65.1032 613.74 63.2412 607.219 63.3607 600.408L72.7735 341.83C86.9865 386.775 105.06 432.114 113.294 478.596C114.097 483.153 114.815 487.728 115.464 492.303C118.71 515.143 125.474 536.515 131.061 558.808C133.281 567.651 138.184 578.849 140.747 589.33C141.977 594.382 148.588 613.86 153.798 613.774H187.247C194.251 613.655 189.706 590.866 188.271 584.021L119.871 256.479C119.871 256.479 99.5425 260.934 88.4386 260.473C53.7601 259.074 29.9977 248.166 29.9806 248.166Z"
								fill="#1D3E59"
							/>
							<path
								d="M91.8039 112.885C88.1653 117.784 82.767 120.942 76.3951 121.044C70.1427 121.13 64.3345 118.586 58.7142 116.162C57.2963 115.548 56.203 114.506 55.4343 113.226L39.1371 113.465L42.3999 258.254C42.3999 258.254 68.4515 264.024 77.0442 264.826C94.7764 266.482 105.624 264.178 105.624 264.178L91.8039 112.885Z"
								fill="#7EB5E6"
							/>
							<path
								d="M91.7357 117.511C91.8894 117.34 92.0431 117.169 92.1798 116.982L91.804 112.885C88.1653 117.784 82.7671 120.942 76.3951 121.044C70.1428 121.13 64.3345 118.586 58.7142 116.162C57.2964 115.548 56.203 114.506 55.4343 113.226L49.9165 113.312C50.1215 113.568 50.3094 113.807 50.5144 114.046C51.1123 114.728 51.7444 115.36 52.3935 115.957C53.3844 116.862 54.4606 117.562 55.5026 118.347C56.5276 119.115 57.5013 119.918 58.5947 120.583C60.7129 121.915 63.0021 122.939 65.3595 123.605C68.4686 124.492 71.6973 124.783 74.9089 124.783C78.0351 124.766 81.2125 124.441 84.1337 123.195C86.9695 121.966 89.5832 119.849 91.7357 117.511Z"
								fill="#699FCF"
							/>
							<path
								d="M74.4989 336.145C77.8643 332.065 78.633 326.245 79.248 321.584C80.6659 310.95 82.1179 299.974 81.8959 289.083C81.8788 287.99 81.8275 286.898 81.7934 285.788C81.6738 282.63 81.5884 279.37 81.8959 276.161C82.0667 276.144 82.2204 276.144 82.3913 276.127C82.5963 276.092 82.7842 276.058 82.9892 276.024C82.6646 279.25 82.75 282.545 82.8696 285.771C82.9038 286.881 82.955 287.973 82.9721 289.083C83.1942 300.042 81.725 311.069 80.3072 321.738C79.6751 326.552 78.8722 332.526 75.3189 336.845C75.2335 336.948 75.131 337.016 74.9943 337.033C74.8406 337.067 74.6868 337.033 74.5502 336.913C74.3452 336.709 74.311 336.384 74.4989 336.145Z"
								fill="#06121C"
							/>
							<path
								d="M54.8193 113.226C54.8193 113.226 66.1966 156.038 65.3595 235.346C64.8641 282.784 56.3909 352.482 48.6353 407.908C48.4132 409.445 47.3028 410.708 45.7995 411.118C41.7337 412.227 33.1922 414.258 23.8649 414.685C17.6467 414.975 0.0170898 413.251 0.0170898 413.251C0.0170898 413.251 2.66495 295.962 17.6638 229.645C17.6638 229.645 10.0277 161.654 6.8332 141.324C3.63868 120.993 21.6271 108.788 54.8193 113.226Z"
								fill="#EBEBEB"
							/>
							<path
								d="M124.552 225.736C125.662 215.323 126.705 204.364 127.234 193.507L150.655 196.443C150.655 196.443 137.159 114.933 95.8185 113.414C94.5202 113.107 93.1877 112.868 91.7869 112.68C91.7869 112.68 88.7974 278.021 121.323 407.789C121.614 408.932 122.588 409.786 123.766 409.922C127.337 410.315 135.092 410.964 141.55 409.974C145.684 409.342 157.164 405.843 157.164 405.843C157.164 405.843 119.444 273.566 124.552 225.736Z"
								fill="#EBEBEB"
							/>
							<path
								d="M97.2534 194.088L96.9801 194.275C96.6555 194.514 96.2114 194.429 95.9722 194.122L74.5331 164.522C74.2939 164.198 74.3793 163.754 74.6868 163.515L74.9601 163.327C75.2847 163.088 75.7289 163.174 75.968 163.481L97.4072 193.063C97.6463 193.405 97.5609 193.849 97.2534 194.088Z"
								fill="black"
							/>
							<path
								d="M24.2579 114.797C24.2579 114.797 1.70834 118.586 1.41793 154.314C1.16168 185.655 -1.04202 205.832 5.0566 223.226C11.1552 240.621 36.8651 230.242 53.3844 226.231C69.9036 222.219 99.218 212.677 99.218 212.677L91.4282 190.486C91.4282 190.486 48.3278 201.564 27.7257 201.223L24.2579 114.797Z"
								fill="#EBEBEB"
							/>
							<path
								d="M108.033 106.927C106.53 113.243 112.56 116.111 117.036 119.628C118.539 120.805 107.606 126.746 103.625 128.06C96.758 130.348 97.9197 139.429 90.7107 140.965C78.2913 143.611 65.5987 135.264 52.7864 131.201C44.4329 128.555 36.3355 129.477 27.2815 125.244C19.6284 121.659 14.0935 114.967 15.1355 113.738C18.8084 109.42 35.6522 111.536 36.7113 106.944C38.0438 101.26 30.7494 80.7417 31.6035 62.0328C32.7652 36.8373 41.0846 5.56478 70.7577 0.614439C74.9943 -0.0854376 79.3163 -0.153718 83.6041 0.221825C83.6041 0.221825 112.099 2.27024 121.323 34.6182C123.066 40.7464 122.946 48.4279 122.639 54.7268C121.75 72.8382 113.277 89.806 108.033 106.927Z"
								fill="#262F36"
							/>
							<path
								d="M111.125 86.2214C110.032 89.6867 108.887 93.1007 107.367 96.327C105.846 99.5532 103.967 102.575 101.558 105.135C99.1497 107.696 96.2456 109.778 93.2732 111.827C91.804 112.851 90.3007 113.824 88.6949 114.558C87.892 114.916 87.055 115.224 86.1837 115.411C85.9617 115.463 85.7396 115.497 85.5346 115.531C85.3125 115.565 85.0904 115.582 84.8684 115.599L84.2021 115.616C83.98 115.599 83.758 115.599 83.5188 115.582C83.7409 115.633 83.963 115.685 84.185 115.736L84.8684 115.838C85.0904 115.855 85.3296 115.872 85.5517 115.872C85.7738 115.872 86.0129 115.872 86.2521 115.855C87.1746 115.804 88.097 115.582 88.9854 115.309C90.762 114.729 92.4019 113.841 93.9736 112.919C95.5281 111.98 97.0827 111.007 98.5689 109.915C99.3035 109.369 100.038 108.788 100.738 108.191C101.439 107.576 102.105 106.945 102.754 106.262C103.062 105.92 103.369 105.562 103.677 105.221C103.967 104.862 104.258 104.486 104.548 104.128C104.821 103.752 105.095 103.377 105.351 102.984C105.607 102.592 105.863 102.199 106.103 101.806C107.059 100.219 107.879 98.5461 108.545 96.8391C109.878 93.408 110.698 89.8232 111.125 86.2214Z"
								fill="#12161A"
							/>
							<path
								d="M84.0825 128.094C82.5621 128.094 81.0759 127.736 79.6922 127.156C79.0088 126.865 78.3255 126.541 77.6764 126.165C77.0272 125.79 76.3951 125.397 75.7972 124.954C75.1993 124.51 74.6185 124.049 74.0889 123.537C73.5594 123.025 73.0981 122.461 72.654 121.881C72.2098 121.283 71.7998 120.652 71.3898 120.02L70.1428 118.108C69.3057 116.828 68.4857 115.565 67.6487 114.302C66.8116 113.021 65.9745 111.775 65.1716 110.495C64.3687 109.215 63.5829 107.952 62.8996 106.62C62.1992 105.306 61.5671 103.957 60.9863 102.575C60.4055 101.192 59.8759 99.7921 59.3976 98.3753C58.9192 96.9585 58.4751 95.5075 58.0651 94.0565C57.2451 91.1546 56.5105 88.2186 55.8443 85.2654C54.5289 79.3591 53.5894 73.3675 53.0939 67.3076C52.9231 73.4017 53.521 79.4957 54.5973 85.5044C55.1439 88.5087 55.7931 91.496 56.5789 94.4492C56.9718 95.9343 57.3989 97.4023 57.8772 98.8533C58.3555 100.304 58.8851 101.755 59.483 103.172C60.0809 104.589 60.7471 105.989 61.4817 107.354C62.2163 108.72 63.0362 110.034 63.8733 111.314C64.7275 112.595 65.5987 113.841 66.4699 115.087C67.3412 116.333 68.2124 117.579 69.1007 118.808L70.4161 120.669C70.8603 121.283 71.3044 121.915 71.8169 122.512C72.3123 123.11 72.859 123.69 73.4569 124.202C74.0548 124.715 74.6868 125.175 75.336 125.585C76.0022 125.995 76.6685 126.37 77.3689 126.695C78.0693 127.019 78.7868 127.326 79.5213 127.548C80.2559 127.77 81.0075 127.958 81.7763 128.043C82.5621 128.163 83.3308 128.18 84.0825 128.094Z"
								fill="#12161A"
							/>
							<path
								d="M77.3689 10.1909C73.9352 11.3858 70.5527 12.7344 67.2899 14.4072C65.667 15.2437 64.0612 16.1655 62.5408 17.2068C61.0204 18.248 59.5342 19.3747 58.2018 20.672L57.9455 20.911C57.8601 20.9963 57.7747 21.0817 57.7063 21.167L57.228 21.6621L56.7497 22.1571C56.596 22.3278 56.4422 22.5156 56.2885 22.6863L55.8443 23.2154L55.6222 23.4886L55.4172 23.7617C55.1439 24.1372 54.8535 24.5128 54.5802 24.8883L54.1873 25.4687L53.9993 25.7589L53.8114 26.0491L53.4527 26.6465L53.111 27.2611L52.9402 27.5683L52.7864 27.8756L52.4619 28.4901C52.274 28.9169 52.069 29.3266 51.881 29.7533L51.6077 30.3849L51.3515 31.0336C51.1806 31.4603 51.0269 31.8871 50.8731 32.3138C50.5657 33.1844 50.2923 34.055 50.0361 34.9256C49.7798 35.7961 49.5407 36.6838 49.3186 37.5544L48.994 38.8858C48.8915 39.3297 48.789 39.7735 48.7036 40.2173C50.1215 36.8716 51.3856 33.4575 53.0427 30.2996C53.8627 28.712 54.7852 27.1928 55.8272 25.776C56.1005 25.4346 56.3739 25.0932 56.6472 24.7347L56.8522 24.4786L57.0743 24.2397L57.5184 23.7446L57.9626 23.2496L58.4238 22.7716L58.8851 22.2937C58.9705 22.2083 59.0388 22.14 59.1242 22.0547L59.3634 21.8328C59.688 21.5255 60.0126 21.2353 60.3371 20.928L61.3621 20.0745C61.5329 19.9209 61.7038 19.8014 61.8746 19.6649L62.4042 19.2552C62.575 19.1186 62.7458 18.982 62.9337 18.8455L63.4804 18.4529C64.1979 17.9237 64.9495 17.4287 65.6841 16.9336L66.8116 16.2167C67.1874 15.9777 67.5803 15.7558 67.9561 15.5168C70.9798 13.6562 74.1914 12.0004 77.3689 10.1909Z"
								fill="#12161A"
							/>
							<path
								d="M58.2359 53.4637C58.253 53.4637 58.7484 53.4295 60.1663 53.0881C68.9299 50.1009 77.6934 48.3426 86.6278 43.4094C90.164 41.4634 102.549 33.1843 103.198 31.0847C103.284 31.0847 106.137 35.523 106.478 36.1033C113.636 47.9842 113.192 56.0754 109.929 69.6633C108.169 76.9864 105.248 84.0875 100.841 90.3011C97.3218 95.2514 92.4019 99.0581 86.6962 100.782C81.6567 102.301 75.951 101.909 70.4844 96.9072C63.395 89.789 58.458 78.352 57.7234 65.225C57.4843 61.1453 57.6722 57.202 58.2359 53.4637Z"
								fill="#FBA287"
							/>
							<path
								d="M86.6107 43.4094C90.1469 41.4634 102.532 33.1843 103.181 31.0847C103.215 31.0847 103.711 31.8187 104.292 32.7234C104.292 32.7405 104.292 32.7405 104.309 32.7576C104.462 32.9966 104.633 33.2697 104.804 33.5257C103.779 34.2086 102.857 35.0791 102.327 36.1716C99.3717 38.9541 96.1771 41.4975 92.6922 43.5801C90.5398 44.8603 88.2848 45.9528 85.9274 46.8063C83.997 47.5062 81.9983 48.0354 80.0166 48.5816C77.2834 49.3156 74.533 50.0497 71.7997 50.8007C67.9219 51.842 62.3357 53.2076 58.2188 53.5149C66.8627 50.5447 77.83 48.2744 86.6107 43.4094Z"
								fill="#ED8F75"
							/>
							<path
								d="M82.8183 52.9858C83.997 52.7639 85.227 52.5419 86.3886 52.8663C87.5503 53.1906 88.6094 54.1977 88.5411 55.4097C87.3453 56.0413 85.8932 55.6999 84.5607 55.478C81.52 54.983 78.7354 55.4439 75.763 56.0072C74.2255 53.2247 81.0587 53.3272 82.8183 52.9858Z"
								fill="#12161A"
							/>
							<path
								d="M105.368 56.2973C104.48 55.9046 103.557 55.495 102.583 55.5291C101.61 55.5632 100.585 56.1607 100.414 57.1166C101.234 57.8506 102.447 57.8506 103.54 57.936C106.034 58.1238 108.135 59.0285 110.373 60.0185C112.099 58.1067 106.683 56.8776 105.368 56.2973Z"
								fill="#12161A"
							/>
							<path
								d="M80.8367 81.2538L91.6502 84.6679C91.8893 84.7362 91.9406 85.1117 91.7356 85.3165C89.7369 87.3137 81.7762 94.3808 80.4096 81.7147C80.3583 81.4416 80.5975 81.1856 80.8367 81.2538Z"
								fill="white"
							/>
							<path
								d="M90.8302 77.5325C91.5306 77.4983 92.0943 77.2935 92.5214 76.9179C93.888 75.723 93.4268 73.4015 92.9997 71.1482C92.846 70.3971 92.7093 69.6973 92.658 69.0827C92.6239 68.7072 92.3164 68.4341 91.9235 68.4682C91.5476 68.5024 91.2743 68.8267 91.3085 69.2022C91.3597 69.868 91.5135 70.619 91.6672 71.4043C91.9918 73.1113 92.4018 75.228 91.6331 75.8937C91.2572 76.2181 90.3518 76.44 88.0969 75.6718C87.7381 75.5523 87.3623 75.7401 87.2427 76.0986C87.1232 76.457 87.3111 76.8326 87.6698 76.9521C88.951 77.3788 89.9931 77.5837 90.8302 77.5325Z"
								fill="#E8856A"
							/>
							<path
								d="M75.985 71.8824C76.2413 72.3262 76.4804 72.7871 76.5488 73.2992C76.6854 74.5112 75.7459 75.6378 74.6013 76.0646C73.4738 76.4913 72.1926 76.3889 70.9968 76.1841C70.2964 76.0646 69.5618 75.911 68.9469 75.5354C68.2123 75.0916 67.6827 74.3917 67.2386 73.6748C66.6406 72.7359 66.1452 71.7117 65.9573 70.6192C65.7523 69.5267 65.889 68.3489 66.4698 67.393C66.6919 67.0174 66.9994 66.6931 67.3923 66.5053C67.734 66.3346 68.1269 66.3005 68.5027 66.2834C72.0389 66.181 74.3622 69.0829 75.985 71.8824Z"
								fill="#E58376"
							/>
							<path
								d="M103.506 79.7517C104.736 78.6592 106.171 77.6009 107.708 76.9863C106.974 79.0006 106.154 80.9807 105.214 82.9097C104.907 83.5071 104.599 84.0875 104.274 84.6679C104.001 84.5313 103.745 84.3606 103.506 84.1729C102.566 83.4047 102.02 82.0391 102.532 80.9295C102.737 80.4516 103.113 80.0931 103.506 79.7517Z"
								fill="#E58376"
							/>
							<path
								d="M80.495 63.6034C80.0167 65.5324 80.6317 67.3759 81.8788 67.6832C83.1258 68.0075 84.5437 66.6931 85.022 64.7642C85.5003 62.8353 84.8854 60.9917 83.6383 60.6844C82.3912 60.3601 80.9904 61.6574 80.495 63.6034Z"
								fill="#12161A"
							/>
							<path
								d="M104.257 65.0201C105.846 65.3615 107.025 66.0785 107.725 67.1197C107.879 67.3587 107.828 67.6831 107.572 67.8538C107.332 68.0074 107.008 67.9562 106.837 67.7001C105.897 66.2833 103.933 65.9078 102.464 65.8565C100.653 65.7712 98.8934 66.0272 97.1167 66.5906C96.8434 66.6759 96.553 66.5223 96.4505 66.2492C96.3651 65.976 96.5188 65.6858 96.7921 65.5834C98.6884 64.9689 100.55 64.7128 102.498 64.7982C103.13 64.8323 103.711 64.9006 104.257 65.0201Z"
								fill="#12161A"
							/>
							<path
								d="M84.0483 60.2577C85.637 60.5991 86.8158 61.316 87.5162 62.3573C87.6699 62.5963 87.6187 62.9206 87.3624 63.0913C87.1232 63.2449 86.7987 63.1937 86.6278 62.9377C85.6883 61.5208 83.7237 61.1453 82.2546 61.0941C80.4438 61.0087 78.6843 61.2648 76.9076 61.8281C76.6343 61.9135 76.3439 61.7598 76.2414 61.4867C76.156 61.2136 76.3097 60.9234 76.583 60.821C78.4793 60.2064 80.3413 59.9504 82.2888 60.0357C82.9208 60.0699 83.5017 60.1382 84.0483 60.2577Z"
								fill="#12161A"
							/>
							<path
								d="M100.226 68.0246C99.7475 69.9535 100.363 71.7971 101.61 72.1043C102.857 72.4287 104.275 71.1143 104.753 69.1853C105.231 67.2564 104.616 65.4128 103.369 65.1056C102.122 64.7812 100.721 66.0957 100.226 68.0246Z"
								fill="#12161A"
							/>
							<path
								d="M26.8544 157.216C27.6914 167.424 28.3064 178.793 28.8189 189.086C28.9727 192.637 29.1606 196.17 29.2802 199.721L28.6652 199.106C39.0004 199.038 53.8797 197.177 64.3344 196.324C55.4855 197.86 46.6023 199.089 37.6508 199.909C34.6613 200.182 31.6718 200.386 28.6481 200.386C28.3235 200.386 28.0502 200.13 28.0331 199.789C27.8623 196.238 27.7427 192.688 27.606 189.137C27.2302 178.827 26.8715 167.475 26.8544 157.216Z"
								fill="#BFBFBF"
							/>
							<path
								d="M45.9361 182.224C45.304 182.275 44.689 182.207 44.074 182.036C32.9872 179.117 27.401 143.423 27.1619 141.904L28.1356 141.75C28.1868 142.109 33.8413 178.315 44.3303 181.08C46.8756 181.746 49.5747 180.295 52.3593 176.761L53.128 177.359C50.7193 180.449 48.3106 182.07 45.9361 182.224Z"
								fill="#34333C"
							/>
							<path
								d="M38.1462 182.992C35.9937 183.145 33.5167 182.189 30.7151 180.124L31.2959 179.339C34.9346 182.002 37.9241 182.685 40.1961 181.37C49.5576 175.925 45.3552 139.514 45.304 139.156L46.2777 139.036C46.4656 140.555 50.5997 176.437 40.6916 182.207C39.8887 182.667 39.0516 182.923 38.1462 182.992Z"
								fill="#34333C"
							/>
							<path
								d="M51.2147 179.407L50.5655 178.861C50.2409 178.588 50.1555 178.11 50.3605 177.734L52.2397 174.423C52.6667 173.911 53.4184 173.859 53.9138 174.286L55.0583 175.259C55.5708 175.686 55.6221 176.437 55.195 176.932L52.3422 179.39C52.0347 179.68 51.5563 179.68 51.2147 179.407Z"
								fill="#34333C"
							/>
							<path
								d="M33.1409 181.421L33.5851 180.705C33.8072 180.346 33.7559 179.868 33.4313 179.578L30.6468 177C30.0831 176.642 29.3485 176.813 29.0068 177.376L28.2039 178.656C27.8452 179.219 28.016 179.953 28.5798 180.295L32.0476 181.763C32.4576 181.934 32.9189 181.797 33.1409 181.421Z"
								fill="#34333C"
							/>
							<path
								d="M109.553 113.67C109.519 113.517 108.545 108.156 107.913 107.713C107.281 109.539 107.384 110.785 107.452 112.441C111.62 133.062 102.908 170.411 102.805 170.855L105.094 171.401C105.129 171.265 108.306 157.814 110.014 142.604C111.654 127.685 111.706 121.403 109.553 113.67Z"
								fill="#597994"
							/>
							<path
								d="M36.3868 109.522C36.6772 108.31 36.9334 105.971 36.5405 105.715C36.233 105.51 35.3959 106.381 34.576 107.508C34.5247 107.576 34.183 108.327 34.166 108.395C32.7993 112.851 32.0989 118.808 33.3801 126.524L35.7034 126.148C34.6614 119.884 34.9347 114.404 36.3868 109.522Z"
								fill="#597994"
							/>
							<path
								d="M27.8794 143.901C27.2815 143.935 26.7519 143.526 26.6494 142.928L25.6927 137.176C24.7532 131.525 28.5798 126.148 34.2513 125.209C37.0017 124.749 39.752 125.397 42.007 127.002C44.262 128.623 45.7653 131.013 46.2265 133.762L47.1831 139.514C47.2856 140.146 46.8586 140.76 46.2265 140.863C45.5944 140.965 44.9794 140.538 44.8769 139.907L43.9203 134.154C43.5616 132.038 42.3999 130.177 40.6574 128.931C38.8979 127.685 36.7625 127.19 34.6442 127.548C30.2539 128.282 27.2815 132.43 28.016 136.817L28.9727 142.57C29.0752 143.201 28.6481 143.816 28.016 143.918C27.9648 143.901 27.9135 143.901 27.8794 143.901Z"
								fill="#597994"
							/>
							<path
								d="M109.249 172.395C109.343 169.229 106.85 166.586 103.681 166.492C100.513 166.398 97.8677 168.889 97.7739 172.056C97.6801 175.222 100.173 177.865 103.342 177.959C106.51 178.052 109.155 175.561 109.249 172.395Z"
								fill="#34333C"
							/>
							<path
								d="M106.376 172.869C106.017 174.457 104.462 175.447 102.874 175.106C101.285 174.747 100.294 173.194 100.636 171.606C100.995 170.019 102.549 169.029 104.138 169.37C105.727 169.711 106.734 171.282 106.376 172.869Z"
								fill="#7CA9CF"
							/>
							<path
								d="M119.427 170.497C117.394 161.586 114.934 154.195 112.696 145.096C114.131 153.921 114.798 161.944 116.267 170.565C117.24 170.548 118.317 170.514 119.427 170.497Z"
								fill="#BFBFBF"
							/>
							<path
								d="M55.4684 235.363L109.348 160.972C109.416 160.886 109.519 160.818 109.621 160.818L176.365 153.324C176.706 153.29 176.928 153.683 176.706 153.956L113.926 231.096C113.858 231.181 113.756 231.232 113.653 231.232L55.8101 235.995C55.4855 236.012 55.2805 235.636 55.4684 235.363Z"
								fill="#212126"
							/>
							<path
								d="M57.3134 235.892L111.022 161.876L176.416 154.263L115.396 232.256L57.3134 235.892Z"
								fill="#34333C"
							/>
							<path
								d="M114.319 218.976C112.047 219.744 109.69 220.307 107.196 220.563C105.846 220.7 104.411 220.751 103.164 220.188C102.378 219.829 101.712 219.249 101.148 218.6C98.9617 216.108 97.9709 212.592 95.3743 210.526C92.7264 208.426 88.729 208.102 86.8328 205.303C85.9616 204.022 85.4662 202.179 83.9458 201.854C82.2716 201.496 80.9733 203.425 80.8025 205.115C80.5121 208 82.0325 210.97 84.5437 212.421C82.5279 212.284 80.8025 210.97 79.2138 209.724C78.1546 208.887 76.9076 205.985 77.5909 204.842C74.5672 204.449 71.1677 203.357 71.236 208C70.2111 207.641 69.3227 206.754 67.4436 208.563C66.5211 209.451 67.3411 212.557 67.4949 213.821C66.299 213.582 64.7616 213.377 63.6853 214.896C62.5408 216.518 63.8733 219.027 64.9666 219.573C63.1729 220.376 61.8916 221.741 62.797 223.482C63.6854 225.241 64.2833 225.326 66.0428 226.197C71.9194 229.133 78.3938 230.618 84.7999 232.052C88.4386 232.871 92.0773 233.69 95.7501 234.339C101.285 235.329 106.888 235.926 112.491 236.148L114.319 218.976Z"
								fill="#FAA186"
							/>
							<path
								d="M152.158 204.978C151.27 199.721 149.339 189.206 149.339 189.206C149.339 189.206 132.923 210.116 131.932 211.448C131.471 212.062 130.548 212.455 129.814 212.967C124.791 216.501 119.222 216.927 113.209 217.866C112.252 218.02 111.518 218.822 111.466 219.795C111.313 223.056 111.296 226.794 110.646 229.781C110.202 231.83 108.579 234.732 107.298 236.985C106.581 238.248 107.486 239.836 108.938 239.853C121.494 239.955 135.775 236.626 147.682 233.69C148.707 233.434 149.784 233.144 150.552 232.41C151.253 231.727 151.594 230.771 151.885 229.85C154.276 221.844 153.559 213.24 152.158 204.978Z"
								fill="#EBEBEB"
							/>
							<path
								d="M133.384 210.543C136.339 208.102 141.259 208.478 144.3 210.611C143.463 210.543 142.677 210.407 141.857 210.287C139.021 209.929 136.203 209.911 133.384 210.543Z"
								fill="#BFBFBF"
							/>
							<path
								d="M13.6322 203.664C16.878 201.103 22.0883 200.199 26.0857 201.035C24.3945 201.428 22.6862 201.684 20.9779 202.008C18.5179 202.486 16.0922 203.015 13.6322 203.664Z"
								fill="#BFBFBF"
							/>
							<path
								d="M106.171 239.375C112.15 239.375 118.231 239.272 124.159 238.675L124.227 242.533C118.129 241.833 112.133 240.655 106.171 239.375Z"
								fill="#BFBFBF"
							/>
							<path
								d="M27.2302 233.093C23.677 233.366 20.1237 233.366 16.9633 232.717C16.5192 234.766 16.0921 236.848 15.665 238.982C19.8845 239.306 23.9332 238.726 27.9477 237.855C35.6692 236.148 42.9124 233.349 50.3093 230.84C53.9651 229.645 57.655 228.381 61.3279 227.169L49.8993 229.286C42.3828 230.703 34.8151 232.478 27.2302 233.093Z"
								fill="#BFBFBF"
							/>
							<path
								d="M71.5947 208.802C74.123 212.438 77.3517 214.981 81.3149 216.825C76.805 216.808 72.4147 213.274 71.5947 208.802Z"
								fill="#EC8E75"
							/>
							<path
								d="M67.6827 214.555C71.1164 217.508 74.6868 219.71 78.7354 221.622C74.1914 221.485 69.6814 218.634 67.6827 214.555Z"
								fill="#EC8E75"
							/>
							<path
								d="M65.479 220.29C68.6906 222.407 71.9705 223.721 75.4213 225.292C71.6118 225.514 67.3923 223.687 65.479 220.29Z"
								fill="#EC8E75"
							/>
							<path
								d="M31.9281 299.12C31.6548 299.12 31.3814 299.103 31.1081 299.069L20.5167 297.908C18.5179 297.686 16.7071 296.696 15.4601 295.126C14.1959 293.555 13.6493 291.575 13.8885 289.578L16.6901 266.209L41.8191 269.93L39.3934 292.429C39.1713 294.426 38.1975 296.218 36.643 297.464C35.2593 298.557 33.6193 299.12 31.9281 299.12ZM17.7834 267.677L15.1526 289.749C14.9476 291.405 15.4259 293.043 16.4509 294.358C17.493 295.672 18.9792 296.491 20.6362 296.662L31.2277 297.823C32.8847 298.011 34.5076 297.533 35.8059 296.491C37.1042 295.45 37.9071 293.965 38.095 292.309L40.3842 271.04L17.7834 267.677Z"
								fill="#BFBFBF"
							/>
							<path
								d="M58.1069 301.569C58.8007 300.875 58.8007 299.751 58.1069 299.058C57.4131 298.365 56.2882 298.365 55.5944 299.058C54.9006 299.751 54.9006 300.876 55.5944 301.569C56.2882 302.262 57.4131 302.262 58.1069 301.569Z"
								fill="#BFBFBF"
							/>
							<path
								d="M60.0311 270.496C60.8013 269.888 60.9329 268.772 60.3249 268.002C59.717 267.232 58.5997 267.101 57.8295 267.708C57.0592 268.316 56.9277 269.432 57.5356 270.202C58.1436 270.972 59.2608 271.103 60.0311 270.496Z"
								fill="#BFBFBF"
							/>
							<path
								d="M61.767 243.426C62.5008 242.776 62.5675 241.653 61.9161 240.92C61.2647 240.187 60.1418 240.12 59.408 240.771C58.6743 241.422 58.6076 242.544 59.259 243.278C59.9104 244.011 61.0333 244.077 61.767 243.426Z"
								fill="#BFBFBF"
							/>
							<path
								d="M62.0085 190.162C62.234 189.208 61.6427 188.251 60.6878 188.026C59.7329 187.801 58.776 188.392 58.5505 189.346C58.325 190.3 58.9163 191.256 59.8712 191.481C60.8261 191.707 61.783 191.116 62.0085 190.162Z"
								fill="#BFBFBF"
							/>
							<path
								d="M131.641 298.54C131.556 298.113 131.488 297.703 131.402 297.277L121.819 298.318C120.162 298.506 118.539 298.028 117.241 296.987C115.942 295.945 115.139 294.46 114.951 292.804L112.662 271.535L126.841 269.435C126.79 269.009 126.722 268.582 126.67 268.155L111.261 270.442L113.687 292.941C113.909 294.938 114.883 296.73 116.438 297.977C117.787 299.052 119.427 299.632 121.118 299.632C121.392 299.632 121.665 299.615 121.938 299.581L131.641 298.54Z"
								fill="#BFBFBF"
							/>
						</g>
						<defs>
							<clipPath id="clip0_88_1258">
								<rect width="225" height="648" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>

				{/* Small Circle SVG */}
				<div className="absolute top-10 sm:top-16 lg:top-20">
					<svg
						width="50" // Adjusted width for responsiveness
						height="50" // Adjusted height for responsiveness
						viewBox="0 0 73 73"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-12 sm:w-16 lg:w-[73px] h-auto"
					>
						<path
							d="M36.5314 72.9901C56.6696 72.9901 72.9949 56.7427 72.9949 36.7005C72.9949 16.6583 56.6696 0.410889 36.5314 0.410889C16.3931 0.410889 0.0678711 16.6583 0.0678711 36.7005C0.0678711 56.7427 16.3931 72.9901 36.5314 72.9901Z"
							fill="url(#paint0_radial_88_1427)"
						/>
						<defs>
							<radialGradient
								id="paint0_radial_88_1427"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(33.3323 18.9522) rotate(147.981) scale(79.8118 79.6457)"
							>
								<stop offset="0.1879" stopColor="#94D9DA" />
								<stop offset="0.3452" stopColor="#6AABE0" />
								<stop offset="0.4333" stopColor="#5796E2" />
								<stop offset="0.5383" stopColor="#5A99E2" />
								<stop offset="0.6304" stopColor="#64A4E0" />
								<stop offset="0.7177" stopColor="#74B6DE" />
								<stop offset="0.8015" stopColor="#8BCFDB" />
								<stop offset="0.8282" stopColor="#94D9DA" />
							</radialGradient>
						</defs>
					</svg>
				</div>

				{/* Text Element */}
				<Text className="text-white text-5xl lg:text-7xl font-bold lg:mt-0 ml-auto pr-6 lg:pr-0 lg:ml-0 -mt-28 mb-28">
					حجوزاتي
				</Text>
			</Group>
		</Container>
	);
};

export default Banner;