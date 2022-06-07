{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
	buildInputs = with pkgs; [
		nodejs-12_x
		gcc
		gnumake

		pkgconfig
		openssl
		ffmpeg-full
		yarn

		docker-compose 
	];
}


