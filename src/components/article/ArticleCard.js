import React from 'react'
import './Article.css'


export const ArticleCard= ({article}) => {
	return(
		<>
		<section className="article">
			<h1>{article.title}</h1>
			<div>{article.synopsis}</div>
			<div>Posted by: {article.user.name}</div>
		</section>

		</>
	)
}