function requireAuth(req, res, next) {
  if (!req.session.isAuthenticated) {
    res.redirect("/login");
  } else {
    next();
  }
}

export default {
  requireAuth,
};
