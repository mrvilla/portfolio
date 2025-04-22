<script>
	import * as m from '$lib/paraglide/messages';
</script>

<article class="article">
	<h2 class="article__headline">{m.article_headline()}</h2>
	<div class="article__content">
		<p>{m.article_paragraphs_p1()}</p>
		<p>{m.article_paragraphs_p2()}</p>
		<p>{m.article_paragraphs_p3()}</p>
		<p>{m.article_paragraphs_p4()}</p>

	</div>
</article>

<style lang="scss">
	@import './style/article.scss';
</style>
