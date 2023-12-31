import { rest } from 'msw'

const posts = ['게시글1', '게시글2', '게시글3']

export const handlers = [
	// 포스트 목록
	rest.get('/posts', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(posts))
	}),

	// 포스트 추가
	rest.post('/posts', (req, res, ctx) => {
		posts.push(req.body as string)
		return res(ctx.status(201))
	}),
]
