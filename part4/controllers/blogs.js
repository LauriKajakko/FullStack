const blogsRouter = require('express').Router()
const { request } = require('../app')
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs.map(blog => blog.toJSON()))
})
  
blogsRouter.post('/', async (request, response) => {
const blog = new Blog(request.body)
if(blog.likes === undefined) blog.likes = 0
if(blog.title === undefined || blog.url === undefined){
    response.status(400)
}
const savedBlog = await blog.save()
response.json(savedBlog.toJSON())
})

blogsRouter.delete('/:id', async (request, response) => {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

module.exports = blogsRouter