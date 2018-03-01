<template>
	<div class="gallery">
		<v-layout>
			<v-flex xs12>
				<v-card>
					<v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
						<v-layout row wrap>
							<v-flex xs12><h2 style="color:white;text-align:center;">{{msg}}</h2></v-flex>
							<v-flex
								xs1
								v-for="n in 36"
								:key="n">
									<v-card flat tile>
										<v-card-media
											:src="`https://unsplash.it/100/75?image=${Math.floor(Math.random() * 600) + 1}`"
											height="75px">
										</v-card-media>
									</v-card>
							</v-flex>
							<v-flex
								xs2
								v-for="n in 18"
								:key="n">
									<v-card flat tile>
										<v-card-media
											:src="`https://unsplash.it/200/75?image=${Math.floor(Math.random() * 600) + 1}`"
											height="75px">
										</v-card-media>
									</v-card>
							</v-flex>
							<v-flex
								xs3
								v-for="n in 8"
								:key="n">
									<v-card flat tile>
										<v-card-media
											:src="`https://unsplash.it/150/150?image=${Math.floor(Math.random() * 600) + 1}`"
											height="150px">
										</v-card-media>
									</v-card>
							</v-flex>
							<v-flex
								xs6
								v-for="n in 4"
								:key="n">
									<v-card flat tile>
										<v-card-media
											:src="`https://unsplash.it/300/150?image=${Math.floor(Math.random() * 600) + 1}`"
											height="150px">
										</v-card-media>
									</v-card>
							</v-flex>
							<v-flex
								xs3
								v-for="n in 8"
								:key="n">
									<v-card flat tile>
										<v-card-media
											:src="`https://unsplash.it/300/300?image=${Math.floor(Math.random() * 300) + 1}`"
											height="300px">
										</v-card-media>
									</v-card>
							</v-flex>
							<v-flex
								xs6
								v-for="n in 4"
								:key="n">
									<v-card flat tile>
										<v-card-media
											:src="`https://unsplash.it/600/300?image=${Math.floor(Math.random() * 600) + 1}`"
											height="300px">
										</v-card-media>
									</v-card>
							</v-flex>
							<v-flex
								xs6
								v-for="n in 4"
								:key="n">
									<v-card flat tile>
										<v-card-media
											:src="`https://unsplash.it/600/600?image=${Math.floor(Math.random() * 600) + 1}`"
											height="600px">
										</v-card-media>
									</v-card>
							</v-flex>
							<v-flex
								xs12
								v-for="n in 4"
								:key="n">
									<v-card flat tile>
										<v-card-media
											:src="`https://unsplash.it/1200/600?image=${Math.floor(Math.random() * 600) + 1}`"
											height="600px">
										</v-card-media>
									</v-card>
							</v-flex>
							<v-flex
								xs12
								v-for="n in 2"
								:key="n">
									<v-card flat tile>
										<v-card-media
											:src="`https://unsplash.it/1200/1200?image=${Math.floor(Math.random() * 600) + 1}`"
											height="1200px">
										</v-card-media>
									</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      msg: 'Gallery of Ysmir',
      size: 'md'
    }
  }
}
</script>

<style>

</style>