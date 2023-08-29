<template>
	<nav>
		<div>
			<div class="data-menu navbar">
				<div class="nav nome-empresa">
					<h1>ConnectFeela</h1>
				</div>
				<ul class=" nav justify-content-end ">
					<li class="nav-item item-menu">
						<a class="nav-link " href="#">HOME</a>
					</li>
					<li class="nav-item item-menu">
						<a class="nav-link" href="#">Home</a>
					</li>
					<li class="nav-item item-menu">
						<a class="nav-link" href="#">Home</a>
					</li>
					<li class="nav-item item-menu">
						<a class="nav-link" href="#">Home</a>
					</li>
					<li class="nav-item item-menu">
						<a class="nav-link" href="#">Home</a>
					</li>
				</ul>
			</div>

			<div class="data-menu2 navbar">
				<div class=" data-burguer">
					<!-- <ul class="nav align-items-center">
						<li>
							<a class="navbar" href=""><font-awesome-icon :icon="['fas', 'bars']" size="2xl" /></a>
						</li>
					</ul> -->
					<ul class="menu">

						<li title="home"><a href="#" class="menu-button home" @click="addopen()">menu</a></li>

						<li title="search"><a href="#" class="search">search</a></li>
						<li title="pencil"><a href="#" class="pencil">pencil</a></li>
						<li title="about"><a href="#" class="active about">about</a></li>
						<li title="archive"><a href="#" class="archive">archive</a></li>
						<li title="contact"><a href="#" class="contact">contact</a></li>
					</ul>

					<ul class="menu-bar" >
						<li><a href="#" class="menu-button">Menu</a></li>
						<li><a href="#">Home</a></li>
						<li><a href="#">Profile</a></li>
						<li><a href="#">Editorial</a></li>
						<li><a href="#">About</a></li>
					</ul>
				</div>
				<ul class="nav align-items-center justify-content-center">

					<li class="nav-item item-lupa">
						<a class="nav-link" href=""><font-awesome-icon :icon="['fas', 'magnifying-glass']" size="2xl" /></a>
					</li>

					<li class="nav-item item-menu ">
						<a class="nav-link" href="">cats</a>
						<!-- <div>
							<div class="">
								<span><img src="" alt=""><p>IMG Popular</p></span>
								<span>
									<ul class="">
										<span>TI</span>
										<li class="">TI1</li>
										<li>TI2</li>
										<li>TI3</li>
										<li>TI4</li>
										<li>TI5</li>
										<li>TI6</li>
										<li>TI7</li>
										<li>TI8</li>
										<li>TI9</li>
										<li>TI10</li>
										<li>TI11</li>
										<li><a href="">Ver Mais</a></li>

									</ul>
								</span>
								
							</div>
							<div>
								<span>
									<ul>
										<span>Brasal</span>
										<li>B1</li>
										<li>B2</li>
										<li>B3</li>
										<li>B4</li>
										<li>B5</li>
										<li>B6</li>
										<li>B7</li>
										<li>B8</li>
										<li>B9</li>
										<li>B10</li>
										<li>B11</li>
										<li><a href="">Ver Mais</a></li>

									</ul>
								</span>
							</div>
							<div>
								<span>
									<ul>
										<span>Desing</span>
										<li>D1</li>
										<li>D2</li>
										<li>D3</li>
										<li>D4</li>
										<li>D5</li>
										<li>D6</li>
										<li>D7</li>
										<li>D8</li>
										<li>D9</li>
										<li>D10</li>
										<li>D11</li>
										<li><a href="">Ver Mais</a></li>

									</ul>
								</span>
							</div>
							<div>
								<span>
									<ul>
										<span>Add Outro</span>
										<li>A1</li>
										<li>A2</li>
										<li>A3</li>
										<li>A4</li>
										<li>A5</li>
										<li>A6</li>
										<li>A7</li>
										<li>A8</li>
										<li>A9</li>
										<li>A10</li>
										<li>A11</li>
										<li><a href="">Ver Mais</a></li>

									</ul>
								</span>
							</div>
						</div> -->
					</li>
					<li class="nav-item item-menu">
						<a class="nav-link" href="">cat</a>
					</li>
					<li class="nav-item item-menu">
						<a class="nav-link" href="">cat</a>
					</li>
					<li class="nav-item item-menu">
						<a class="nav-link" href="">cat</a>
					</li>
					<li class="nav-item item-menu">
						<a class="nav-link" href="">cat</a>
					</li>
				</ul>
			</div>

		</div>

	</nav>
</template>

<script>

import {buguer,addopen} from '@/assets/js/ComponentMenu/JSBuguer.js';
export default {
	name: "HelloWorld",

	methods: {
		responsive: () => {
			buguer();
		},
		addopen: () => {
			addopen();
		},
	},
	created(){
		this.responsive()
	},

	
};


</script>
<style scoped>
@import "../assets/css/ComponentMenu/CSSMenu.css";
@import "../assets/css/ComponentMenu/CSSBuguer.css";
</style>
