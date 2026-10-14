export default defineEventHandler(() => {
  throw createError({
    statusCode: 503,
    statusMessage: 'This server feature is temporarily unavailable while the backend is being replaced.',
  })
})
