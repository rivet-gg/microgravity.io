{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
	buildInputs = with pkgs; [
		nodejs-18_x
		gcc
		gnumake

		pkg-config
		openssl
		ffmpeg-full

		docker-compose 
	];
}


