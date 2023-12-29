{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
	buildInputs = with pkgs; [
		nodejs-18_x
		gcc
		gnumake

		pkgconfig
		openssl
		ffmpeg-full
		yarn

		docker-compose 
	];
}


